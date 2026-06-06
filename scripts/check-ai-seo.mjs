import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { llmsFiles, publicRoutes, siteUrl } from "./ai-seo-routes.mjs";

const appRoutePrefixPattern = /^app\/?/;
const pageFileSuffixPattern = /\/page\.js$/;
const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const errors = [];

const toProjectPath = (file) => join(rootDir, file);

const normalizePath = (file) => file.split(sep).join("/");

const readProjectFile = (file) => readFileSync(toProjectPath(file), "utf8");

const addError = (message) => {
  errors.push(message);
};

const collectPageFiles = (dir) => {
  const files = [];
  const entries = readdirSync(toProjectPath(dir), { withFileTypes: true });

  for (const entry of entries) {
    const relativePath = `${dir}/${entry.name}`;

    if (entry.isDirectory()) {
      for (const child of collectPageFiles(relativePath)) {
        files.push(child);
      }
      continue;
    }

    if (entry.isFile() && entry.name === "page.js") {
      files.push(normalizePath(relativePath));
    }
  }

  return files;
};

const routeFromPageFile = (file) => {
  if (file === "app/page.js") {
    return "/";
  }

  const route = file
    .replace(appRoutePrefixPattern, "")
    .replace(pageFileSuffixPattern, "");
  return `/${route}`;
};

const expectSnippet = ({ file, label, snippet, source }) => {
  if (!source.includes(snippet)) {
    addError(`${file} is missing ${label}: ${snippet}`);
  }
};

const validateRouteManifest = () => {
  const routePaths = new Set();
  const routePages = new Set();

  for (const route of publicRoutes) {
    if (routePaths.has(route.path)) {
      addError(`Duplicate route path in manifest: ${route.path}`);
    }

    if (routePages.has(route.page)) {
      addError(`Duplicate page file in manifest: ${route.page}`);
    }

    routePaths.add(route.path);
    routePages.add(route.page);

    if (!existsSync(toProjectPath(route.page))) {
      addError(`Manifest page does not exist: ${route.page}`);
    }
  }

  const appPageFiles = collectPageFiles("app").sort();

  for (const pageFile of appPageFiles) {
    if (!routePages.has(pageFile)) {
      addError(
        `${pageFile} is a public page but is missing from ai-seo-routes.mjs`
      );
    }

    const path = routeFromPageFile(pageFile);

    if (!routePaths.has(path)) {
      addError(`${pageFile} maps to ${path}, which is missing from manifest`);
    }
  }
};

const validatePageMetadata = () => {
  for (const route of publicRoutes) {
    const source = readProjectFile(route.page);

    expectSnippet({
      file: route.page,
      label: "createPageMetadata usage",
      snippet: "createPageMetadata",
      source,
    });
    expectSnippet({
      file: route.page,
      label: "metadata title constant",
      snippet: "const title =",
      source,
    });
    expectSnippet({
      file: route.page,
      label: "manifest title value",
      snippet: JSON.stringify(route.title),
      source,
    });
    expectSnippet({
      file: route.page,
      label: "metadata description constant",
      snippet: "const description =",
      source,
    });
    expectSnippet({
      file: route.page,
      label: "manifest description value",
      snippet: JSON.stringify(route.description),
      source,
    });
    expectSnippet({
      file: route.page,
      label: "canonical path",
      snippet: `path: "${route.path}"`,
      source,
    });
    expectSnippet({
      file: route.page,
      label: "open graph image",
      snippet: `image: "${route.image}"`,
      source,
    });
    expectSnippet({
      file: route.page,
      label: "open graph image alt text",
      snippet: `imageAlt: "${route.imageAlt}"`,
      source,
    });
  }
};

const validateStructuredData = () => {
  for (const route of publicRoutes) {
    const source = readProjectFile(route.page);
    const hasStructuredData = source.includes("<StructuredData");

    if (route.structuredDataTypes.length === 0 && hasStructuredData) {
      addError(
        `${route.page} has StructuredData, but the manifest does not track it`
      );
    }

    if (route.structuredDataTypes.length > 0 && !hasStructuredData) {
      addError(
        `${route.page} is missing its expected StructuredData component`
      );
    }

    for (const structuredDataType of route.structuredDataTypes) {
      expectSnippet({
        file: route.page,
        label: `${structuredDataType} structured data`,
        snippet: `"@type": "${structuredDataType}"`,
        source,
      });
    }
  }
};

const validateAccessibilityRoutes = () => {
  const source = readProjectFile("tests/accessibility/axe.spec.js");

  for (const route of publicRoutes) {
    expectSnippet({
      file: "tests/accessibility/axe.spec.js",
      label: `${route.path} accessibility coverage`,
      snippet: `"${route.path}"`,
      source,
    });
  }
};

const validateSitemap = () => {
  const sitemapIndex = readProjectFile("public/sitemap.xml");
  const sitemap = readProjectFile("public/sitemap-0.xml");

  expectSnippet({
    file: "public/sitemap.xml",
    label: "generated sitemap file",
    snippet: `${siteUrl}/sitemap-0.xml`,
    source: sitemapIndex,
  });

  for (const route of publicRoutes) {
    const loc = route.path === "/" ? siteUrl : `${siteUrl}${route.path}`;

    expectSnippet({
      file: "public/sitemap-0.xml",
      label: `${route.path} sitemap entry`,
      snippet: `<loc>${loc}</loc>`,
      source: sitemap,
    });
  }
};

const validateRobotsAndSitemapConfig = () => {
  const robots = readProjectFile("public/robots.txt");
  const sitemapConfig = readProjectFile("next-sitemap.config.js");

  for (const snippet of [
    "User-agent: *",
    "Allow: /",
    "Disallow: /files/",
    `Host: ${siteUrl}`,
    `Sitemap: ${siteUrl}/sitemap.xml`,
  ]) {
    expectSnippet({
      file: "public/robots.txt",
      label: "robots directive",
      snippet,
      source: robots,
    });
  }

  for (const snippet of [
    `siteUrl: "${siteUrl}"`,
    "generateRobotsTxt: true",
    "autoLastmod: false",
    'disallow: "/files/"',
  ]) {
    expectSnippet({
      file: "next-sitemap.config.js",
      label: "sitemap config directive",
      snippet,
      source: sitemapConfig,
    });
  }
};

const validateLlmsFiles = () => {
  for (const llmsFile of llmsFiles) {
    const source = readProjectFile(llmsFile.file);

    for (const anchor of llmsFile.anchors) {
      expectSnippet({
        file: llmsFile.file,
        label: "donor-critical llms anchor",
        snippet: anchor,
        source,
      });
    }
  }
};

validateRouteManifest();
validatePageMetadata();
validateStructuredData();
validateAccessibilityRoutes();
validateSitemap();
validateRobotsAndSitemapConfig();
validateLlmsFiles();

if (errors.length > 0) {
  process.stderr.write(`AI/SEO check failed with ${errors.length} issue(s):\n`);

  for (const error of errors) {
    process.stderr.write(`- ${error}\n`);
  }

  process.exitCode = 1;
} else {
  process.stdout.write("AI/SEO check passed.\n");
}

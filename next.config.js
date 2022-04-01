// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy

// disables the security policy when running npm run dev
const ContentSecurityPolicy =
  process.env.NODE_ENV === "development"
    ? ``
    : `default-src 'self' ; style-src 'self' 'unsafe-inline'; img-src 'self' data:; script-src 'self' plausible.io; connect-src 'self' plausible.io vitals.vercel-insights.com;`;

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=()",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
  // Strict-Transport-Security not required as we deploy on Vercel and Vercel does this automatically
];

module.exports = {
  reactStrictMode: true,
  // SVGR does not work on mobile (tried on safari and brave ios)
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     issuer: /\.[jt]sx?$/,
  //     use: ["@svgr/webpack"],
  //   });
  //   return config;
  // },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy

// disables the security policy when running npm run dev
const ContentSecurityPolicy =
  process.env.NODE_ENV === "development"
    ? ``
    : `
    default-src 'self' *.plausible.io;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' plausible.io vercel.live;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

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
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async rewrites() {
    return [
      // Proxying Plausible to avoid Adblockers
      // https://plausible.io/docs/proxy/guides/nextjs
      {
        source: "/js/script.file-downloads.js",
        destination: "https://plausible.io/js/script.file-downloads.js",
      },
      {
        source: "/api/event",
        destination: "https://plausible.io/api/event",
      },
    ];
  },
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

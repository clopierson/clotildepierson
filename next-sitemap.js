module.exports = {
  siteUrl: "https://clotildepierson.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/files/",
      },
    ],
  },
};

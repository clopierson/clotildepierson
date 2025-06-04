module.exports = {
  siteUrl: "https://www.clotildepierson.com",
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

module.exports = {
  siteUrl: "https://www.clotildepierson.com",
  generateRobotsTxt: true,
  autoLastmod: false,
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

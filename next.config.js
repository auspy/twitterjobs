module.exports = {
  images: {
    domains: ["pbs.twimg.com", "abs.twimg.com"],
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "api.producthunt.com",
      },
    ],
  },
};

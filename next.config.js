const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  typescript: {
    ignoreBuildErrors: true,
  },
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
});

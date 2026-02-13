import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Physical AI Humanoid and Robotics Textbook",
  tagline: "Comprehensive guide to Physical AI and Humanoid Robotics",
  favicon: "static/img/favicon.png",

  // Set the production url of your site here
  url: "https://sheikh-mohammad.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: "sheikh-mohammad", // Usually your GitHub org/user name.
  projectName: "robocraft", // Usually your repo name.
  deploymentBranch: "gh-pages", // Branch that GitHub pages will deploy from.

  // Deployment settings for GitHub Pages
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // editUrl removed to hide "Edit this page" link (T128)
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          // editUrl removed to hide "Edit this page" link
          editUrl: undefined,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      // Navbar disabled - using custom Navbar component via theme override (src/theme/Navbar/index.js)
      navbar: {
        hideOnScroll: false,
      },
      // Footer disabled - using custom Footer component via theme override (src/theme/Footer/index.js)
      footer: {
        style: "dark",
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // Search disabled - Algolia configuration removed to prevent crashes
    }),
};

export default config;

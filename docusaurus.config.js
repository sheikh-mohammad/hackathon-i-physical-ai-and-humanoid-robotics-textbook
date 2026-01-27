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
  baseUrl: "/hackathon-i-physical-ai-and-humanoid-robotics-textbook/",

  // GitHub pages deployment config.
  organizationName: "sheikh-mohammad", // Usually your GitHub org/user name.
  projectName: "hackathon-i-physical-ai-and-humanoid-robotics-textbook", // Usually your repo name.
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/sheikh-mohammad/hackathon-i-physical-ai-and-humanoid-robotics-textbook/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/sheikh-mohammad/hackathon-i-physical-ai-and-humanoid-robotics-textbook/tree/main/",
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
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Physical AI Humanoid Robotics",
        logo: {
          alt: "Physical AI Humanoid Robotics Logo",
          src: "img/logo.svg",
          width: 32,
          height: 32,
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Textbook",
          },
          {
            href: "https://github.com/sheikh-mohammad/hackathon-i-physical-ai-and-humanoid-robotics-textbook",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Textbook",
                to: "/docs/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/sheikh-mohammad/hackathon-i-physical-ai-and-humanoid-robotics-textbook",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RoboCraft. Made with ❤️ by Sheikh Mohammad.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "YOUR_APP_ID",

        // Public API key provided by Algolia
        apiKey: "YOUR_SEARCH_API_KEY",

        // Index name provided by Algolia
        indexName: "hackathon-i-physical-ai-and-humanoid-robotics-textbook",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead of history.push. Useful when our Algolia config fetches records from external domains.
        externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",
      },
    }),
};

export default config;

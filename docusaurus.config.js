const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Oxdefi',
  tagline: 'Documentation Portal',
  url: 'https://docs.0xdefi.finance/',
  baseUrl: '/', 
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: '0xDefi',
  projectName: '0xdefi-docs',
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/0xdefi-finance/0xdefi-docs/edit/master',
          versions: {
            current: {
              label: 'current',
            },
          },
          lastVersion: 'current',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '0xDefi',
        logo: {
          alt: 'Sushiswap Logo',
          src: 'img/logo_big.png',
        },
        items: [
          {
            to: '/docs/Developers/Deployment%20Addresses',
            label: 'Contracts Addresses',
            position: 'left',
          },
          {
            to: '/docs/Ecosystem/Build%20on%200xDefi',
            label: 'Ecosystem',
            position: 'left',
          },
          {
            to: '/docs/FAQ/General%20FAQ',
            label: 'FAQ',
            position: 'right',
          },
          {
            href: 'https://github.com/0xDefi-finance',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'GitHub',
            items: [
              {
                label: '0xDefi-Contracts',
                href: 'https://github.com/0xDefi-Finance',
              }
            ],
          },
          {
            title: 'Ecosystem',
            items: [
              {
                label: 'Home',
                href: 'https://0xdefi.finance',
              },
              {
                label: 'App',
                href: 'https://app.0xdefi.finance',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/3q3d8gTwBn',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/0xdefi_finance',
              },
            ],
          },
        ],
      },
      prism: {
        defaultMode: 'darkCodeTheme',
        // theme: lightCodeTheme,
        // darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;

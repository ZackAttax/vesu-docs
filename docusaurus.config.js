// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vesu Knowledge Hub',
  tagline: 'Learn all about Vesu Markets and the Vesu Risk Framework. Find lend, borrow & liquidate manuals and documentation to build your own lending experience on top of Vesu.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.vesu.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vesuxyz', // Usually your GitHub org/user name.
  projectName: 'vesu-protocol', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/hero-image.jpg',
      navbar: {
        style: 'dark',
        title: null,
        logo: {
          alt: 'Vesu Knowledge Hub logo',
          src: 'img/logo.png',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'search',
            position: 'right',
          },
          {
            to: '/intro',
            activeBasePath: 'docs',
            label: 'Get started',
            position: 'right',
          },
          {
            to: '/blog',
            activeBasePath: 'docs',
            label: 'Vesu Blog',
            position: 'right',
          },
          {
            href: 'https://vesu.xyz/app/',
            label: 'Vesu App',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'User Tutorials',
                to: '/use/',
              },
              {
                label: 'Creator Docs',
                to: '/create/',
              },
              {
                label: 'Developer Docs',
                to: '/build/',
              },
              {
                label: 'Risk Framework',
                to: '/explore/',
              },
            ],
          },
          {
            title: 'Explore',
            items: [
              {
                label: 'Whitepaper',
                to: '/explore/whitepaper',
              },
              {
                label: 'Architecture',
                to: '/explore/architecture',
              },
              {
                label: 'Contracts',
                to: '/explore/contracts',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/vesu',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/vesuxyz',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/vesuxyz',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Vesu Labs AG.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,
      },
      announcementBar: {
        id: 'vesu-1-0-release', // Any value that will identify this message.
        content:
          '<div class="announcement-bar"><a href="https://docs.vesu.xyz/blog/introducing-vesu/" target="_blank" rel="noopener"><span>Announcing Vesu Lending Markets</span> <span style="margin-left:1rem">Learn more</span> <span style="margin-left:0.25rem">→</span></a></div>',
        backgroundColor: 'rgb(210, 215, 254)', // Defaults to `#fff`.
        textColor: 'rgb(22 31 49)', // Defaults to `#000`.
        isCloseable: true, // Defaults to `true`.
      },
    }),

    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        {
          docs: {
            routeBasePath: '/',
            path: 'docs',
            sidebarPath: require.resolve('./sidebars.js'),
            showLastUpdateTime: true,
            editUrl:
              'https://github.com/vesuxyz/vesu-docs/edit/master/',
          },
          blog: {
            showReadingTime: true,
          },
          theme: {
            customCss: require.resolve('./src/css/custom.scss'),
          },
          pages: {
            path: 'src/pages',
            routeBasePath: '/',
            include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
            exclude: [
              '**/_*.{js,jsx,ts,tsx,md,mdx}',
              '**/_*/**',
              '**/*.test.{js,jsx,ts,tsx}',
              '**/__tests__/**',
            ],
            mdxPageComponent: '@theme/MDXPage',
            remarkPlugins: [],
            rehypePlugins: [],
            beforeDefaultRemarkPlugins: [],
            beforeDefaultRehypePlugins: [],
          },
          sitemap: {
            changefreq: 'weekly',
            priority: 0.5,
            ignorePatterns: ['/lp/**'],
            filename: 'sitemap.xml',
          },
        },
      ],
    ],

    plugins: [
      'docusaurus-plugin-sass'
    ]
};

export default config;
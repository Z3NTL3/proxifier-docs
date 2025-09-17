import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Proxifier',
  tagline: 'A proxy client library for Go programs with support for SOCKS4/5 and HTTP/HTTPS',
  favicon: 'img/logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://proxifier.z3ntl3.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'z3ntl3', // Usually your GitHub org/user name.
  projectName: 'proxifier', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
     async function myPlugin(context, options) {
        return {
            name: "docusaurus-tailwindcss",
            configurePostCss(postcssOptions) {
                // Appends TailwindCSS and AutoPrefixer.
                postcssOptions.plugins.push(require("tailwindcss"))
                postcssOptions.plugins.push(require("autoprefixer"))
                return postcssOptions
            },
        }
      },
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false
    },
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Proxifier',
      logo: {
        alt: 'Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Docs  ',
        },
        {
          href: 'https://github.com/z3ntl3/proxifier',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Sitemap',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'Docs',
              to: '/docs/intro',
            }
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/z3ntl3/proxifier',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Proxifier, made by z3ntl3`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

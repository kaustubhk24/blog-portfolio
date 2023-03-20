// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kaustubh Kulkarni',
  tagline: 'Quick Learner, Problem Solver, Open Source Contributor',
  url: 'https://www.kaustubhk24.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kaustubhk24', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.


  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'My All Posts',
          postsPerPage: 10,

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: ['@docusaurus/plugin-ideal-image'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // announcementBar: {
      //   id: 'please_wait',
      //   content:
      //     'Update 19/03/2023 - Search option will be available in next release.',
      //   backgroundColor: '#F08080',
      //   textColor: '#FFFFFF',
      //   isCloseable: true,
      // },
      // Replace with your project's social card
      
      navbar: {
        style:'primary',
        title: 'Kaustubh Kulkarni',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            routeBasePath: '/',
            position: 'left',
            label: 'About',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/blog/archive', label: 'Blog Archive', position: 'left'},

          {
            href: 'https://kaustubhk24.netlify.app/Downloads/Kaustubh-Kulkarni.pdf',
            label: ' Resume',
            position: 'right',
          },
          {
            href: 'https://github.com/kaustubhk24/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        
        links: [
          {
            title: 'Kaustubh K.',
            items: [
         
              {
                label: 'Resume',
                to: '/resume',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/kaustubhk24',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'About me',
                to: '/',
              },
              
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KaustubhK24.`,
      },
      
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    
    
    
};

module.exports = config;

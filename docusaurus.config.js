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

  plugins: ['@docusaurus/plugin-ideal-image','docusaurus-plugin-google-adsense'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
      {
        googleAdsense: {
          dataAdClient: 'ca-pub-7541510388779651',
        },
      // announcementBar: {
      //   id: 'please_wait',
      //   content:
      //     'Update 19/03/2023 - Search option will be available in next release.',
      //   backgroundColor: '#F08080',
      //   textColor: '#FFFFFF',
      //   isCloseable: true,
      // },
      // Replace with your project's social card
      algolia: {
        // The application ID provided by Algolia
        appId: 'E8SO1NMM6E',
  
        // Public API key: it is safe to commit it
        apiKey: 'b3b6268494e045f8bc8fc2315c46b699',
  
        indexName: 'kaustubhk24',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
       
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
  
      
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
          {to: '/Projects/open%20source', label: 'Projects', position: 'left'},
          {to: '/blog/archive', label: 'Archive', position: 'left'},

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

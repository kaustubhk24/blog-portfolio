// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kaustubh Kulkarni',
  tagline: 'ServiceNow Developer',
  url: 'https://www.kaustubhk24.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=400',
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
      //     sidebarPath: require.resolve('./sidebars.js'),
                   routeBasePath: '/',

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
      {
       
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
          {to: '/resume', label: 'Resume', position: 'left'},
          {to: '/publications', label: 'Publications', position: 'left'},

           
          {
            href: 'https://github.com/kaustubhk24/',
            label: 'GitHub',
            position: 'left',
          },
          {
            href: 'https://www.servicenow.com/community/user/viewprofilepage/user-id/273446',
            label: 'SNOW Community',
            position: 'left',
          },
        ],
      },
      // footer: {
      //   style: 'dark',
        
      //   links: [
      //     {
      //       title: 'Kaustubh K.',
      //       items: [
         
      //         {
      //           label: 'Resume',
      //           to: '/resume',
      //         },
      //         {
      //           label: 'GitHub',
      //           to: 'https://github.com/kaustubhk24',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'About me',
      //           to: '/',
      //         },
              
            
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} Kaustubh Kulkarni.`,
      // },
      
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    
    
    
};

module.exports = config;

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Kaustubh K.',
  tagline: 'Quick Learner, Problem Solver, Open Source Contributor',
  url: 'https://kaustubhk24.netlify.app/',
  baseUrl: '/',
  organizationName: 'kaustubhk24', // Usually your GitHub org/user name.
  projectName: '', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Home',
     
      items: [
        {
          type: 'doc',
          docId: 'about',
          position: 'left',
          label: 'More Info',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://kaustubhk24.netlify.app/Downloads/Kaustubh-Kulkarni.pdf',
          label: 'Download Resume',
          position: 'right',
        },
        {
          href: 'https://github.com/kaustubhk24',
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
              label: 'Home',
              to: '/',
            },
            {
              label: 'Resume',
              to: '/docs/resume',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/kaustubhk24',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'About me',
              to: '/docs/about',
            },
            {
              label: 'Timeline',
              to: '/docs/timeline',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} MyPortfolio. Built with Docusaurus.`,
    },
  },

  themes: ['docusaurus-portfolio-theme'],

  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'), 
    {
      // whether to index docs pages
      indexDocs: true,
      // must start with "/" and correspond to the routeBasePath configured for the docs plugin
      // use "/" if you use docs-only-mode
      // (see https://v2.docusaurus.io/docs/2.0.0-alpha.70/docs-introduction#docs-only-mode)
      docsRouteBasePath: '/docs',
    
      // Whether to also index the titles of the parent categories in the sidebar of a doc page.
      // 0 disables this feature.
      // 1 indexes the direct parent category in the sidebar of a doc page
      // 2 indexes up to two nested parent categories of a doc page
      // 3...
      //
      // Do _not_ use Infinity, the value must be a JSON-serializable integer.
      indexDocSidebarParentCategories: 0,
    
      // whether to index blog pages
      indexBlog: true,
      // must start with "/" and correspond to the routeBasePath configured for the blog plugin
      // use "/" if you use blog-only-mode
      // (see https://v2.docusaurus.io/docs/2.0.0-alpha.70/blog#blog-only-mode)
      blogRouteBasePath: '/blog',
    
      // whether to index static pages
      // /404.html is never indexed
      indexPages: false,
    
      // language of your documentation, see next section
      language: "en",
    
      // setting this to "none" will prevent the default CSS to be included. The default CSS
      // comes from autocomplete-theme-classic, which you can read more about here:
      // https://autocomplete.algolia.com/docs/autocomplete-theme-classic
      style: undefined,
    
      // lunr.js-specific settings
      lunr: {
        // When indexing your documents, their content is split into "tokens".
        // Text entered into the search box is also tokenized.
        // This setting configures the separator used to determine where to split the text into tokens.
        // By default, it splits the text at whitespace and dashes.
        //
        // Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
        tokenizerSeparator: /[\s\-]+/
      }
    }],
    [
      'docusaurus-portfolio-plugin',
      {
        username: 'kaustubhk24',
        path: '/',
        pageTitle: 'Home',
        pageDescription: 'About me.',
        userOptions: {},
        repoOptions: {
          type: 'all',
          sort: 'updated',
          direction: 'desc',
          numRepos: 100,
        },
      },
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/kaustubhk24/kaustubh.codes/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/kaustubhk24/kaustubh.codes/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

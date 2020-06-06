module.exports = {
  title: 'secRet',
  tagline: 'Secure Return Community',
  url: 'http://sec-r.et',
  baseUrl: '/',
  favicon: 'img/secret.png',
  organizationName: 'secRet-re', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  plugins: [
    '@docusaurus/plugin-google-analytics',
    [
      '@docusaurus/plugin-sitemap',
      {
        cacheTime: 600 * 1000,
        changefreq: 'weekly',
        priority: 0.5,
      },
    ],
  ],
  themeConfig: {
    defaultDarkMode: true,
    // disableDarkMode: false,
    sidebarCollapsible: true,
    googleAnalytics: {
      trackingID: 'UA-168412867-1',
      anonymizeIP: true,
    },
    navbar: {
      title: 'secRet',
      logo: {
        alt: 'secRet',
        src: 'img/secret.png',
      },
      links: [
        {
          label: 'Events',
          position: 'left',
          items: [
            {
              to: 'streams',
              label: 'Live streams',
            },
            {
              to: 'ctfs',
              label: 'CTFs'
            }
          ]
        },
        {
          to: '/awesome',
          label: 'Resources',
          textDecoration: 'underline',
          position: 'left'
        },
        {
          label: 'Docs',
          position: 'left',
          items: [
            {
              to: '/frida',
              label: 'Frida',  
            },
            {
              to: '/dwarf',
              label: 'Dwarf'
            }
          ]
        },
        {
          href: 'https://www.patreon.com/securereturn',
          label: 'Patreon',
          position: 'right'
        },
        {
          href: 'https://twitch.tv/securereturn',
          label: 'Twitch',
          position: 'right'
        },
        {
          href: 'https://twitter.com/secureReturn',
          label: 'Twitter',
          position: 'right'
        },
        {
          href: 'https://github.com/secRet-re',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://join.slack.com/t/resecret/shared_invite/zt-4sjjl4md-_M8AB5_tic~HTbFPY9oEFg',
          label: 'Slack',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Events',
              to: 'events/',
            },
            {
              label: 'Awesome',
              to: 'awesome/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/resecret/shared_invite/zt-4sjjl4md-_M8AB5_tic~HTbFPY9oEFg',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/secureReturn',
            },
            {
              label: 'Twitch',
              href: 'https://www.twitch.tv/securereturn',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/secRet-re',
            },
            {
              label: 'Become a patron',
              href: 'https://www.patreon.com/securereturn',
            },
          ],
        },
      ],
      copyright: `Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'home',
          // Please change this to your repo.
          // sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
              'https://github.com/secRet-re/website/edit/master/',
        },
        // blog: {
        //   path: 'blog',
        //   editUrl:
        //       'https://github.com/secRet-re/website/edit/master/',
        //   postsPerPage: 5,
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

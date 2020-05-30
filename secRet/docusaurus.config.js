module.exports = {
  title: 'secRet',
  tagline: 'Secure Return Community',
  url: 'http://sec-r.et',
  baseUrl: '/',
  favicon: 'img/secret.png',
  organizationName: 'secRet-re', // Usually your GitHub org/user name.
  projectName: 'secRet', // Usually your repo name.
  themeConfig: {
    defaultDarkMode: true,
    disableDarkMode: false,
    navbar: {
      title: 'secRet',
      logo: {
        alt: 'secRet',
        src: 'img/secret.png',
      },
      links: [
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
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
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
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
              'https://github.com/secRet-re/website/edit/master/secRet/',
        },
        blog: {
          path: 'blog',
          editUrl:
              'https://github.com/secRet-re/website/edit/master/secRet/',
          postsPerPage: 5,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

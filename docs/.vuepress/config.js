module.exports = {
  title: 'learnElement',
  description: 'learn Element-ui',
  base: '/learnElement/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [1, 2, 3] }
  },
  plugins: [
    ['@vuepress/active-header-links', true],
    ['@vuepress/back-to-top', true],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/nprogress', true]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'packages 目录', link: '/packages/' },
      { text: 'src 目录', link: '/src/' },
    ],
    sidebar: {
      '/src/': [
        '',
        ['utils', 'utils']
      ]
    },
    sidebarDepth: 2,
    displayAllHeaders: true,
    searchMaxSuggestions: 10,
    lastUpdated: '上次更新',
    repo: 'fxss5201/learnElement',
    docsRepo: 'fxss5201/learnElement',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    smoothScroll: true
  }
}
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
  plugins: ['@vuepress/active-header-links', '@vuepress/back-to-top', '@vuepress/medium-zoom', '@vuepress/nprogress'],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'packages 目录', link: '/packages/' },
      { text: 'src 目录', link: '/src/' },
    ],
    sidebarDepth: 2,
    sidebar: 'auto',
    searchMaxSuggestions: 10,
    lastUpdated: '上次更新',
    repo: '/learnElement',
    docsRepo: '/learnElement',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    smoothScroll: true
  }
}
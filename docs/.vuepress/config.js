module.exports = {
  title: 'JavaScript常用操作',
  description: '写写博客，涨涨见识',
  base: '/gh-pages/',
  theme: 'reco',
  themeConfig: {
    nav: [
        { text: '首页', link: '/' },
        { 
            text: 'mimosa-blog', 
            items: [
                { text: 'Github', link: 'https://github.com/mqyqingfeng' },
                { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
            ]
        }
    ],
    sidebar: [
      {
          title: 'String常见操作',
          path: '/JavaScript/StringOption',
          collapsable: false, // 不折叠
      },
      {
        title: "Array常见操作",
        path: '/JavaScript/ArrayOption',
        collapsable: false, // 不折叠
      }
    ],
    subSidebar: 'auto'
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
}
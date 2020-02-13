module.exports = {
  title: '小小错题本',
  description: '开发遇到的问题',
  base: '',
  theme: '@vuepress/theme-blog',
  themeConfig: {
    nav: [
      { text: '分类', link: '/tag/' }
      // { text: 'External', link: 'https://google.com' }
    ]
    // sidebar: [
    //   ['/vue/', 'Vue相关'],
    //   ['/react/', 'React相关'],
    //   ['/js/', 'js相关'],
    //   ['/other/', '杂谈']
    // ]
  },
  plugins: ['@vuepress/back-to-top'],
  footer: {
    contact: [
      {
        type: 'github',
        link: 'https://github.com/vuejs/vuepress'
      },
      {
        type: 'twitter',
        link: 'https://github.com/vuejs/vuepress'
      }
    ]
  }
};

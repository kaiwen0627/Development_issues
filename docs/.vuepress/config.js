module.exports = {
  title: '小小错题本',
  description: '开发遇到的问题',
  base: '',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'vue相关', link: '/vue/' },
      { text: 'External', link: 'https://google.com' }
    ],
    sidebar: [
      ['/vue/', 'Vue相关'],
      ['/react/', 'React相关'],
      ['/js/', 'js相关'],
      ['/other/', '杂谈'],
    ]
  }
};

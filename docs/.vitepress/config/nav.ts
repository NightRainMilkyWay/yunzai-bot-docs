import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
{
  text: '指导',
    link: '/guide/介绍/什么是Yunzai bot.md',
    activeMatch: '/guide/'
  },
  {
    text: 'FAQ',
    link: 'FAQ/FAQ.md',
    activeMatch: 'FAQ/FAQ.md'
  },
  {
    text: '主页',
    link: 'index.md',
    activeMatch: '/index.md/'
  },
  
  {
    text: '关于',
    items: [
      { text: '关于文档', link: '/about/index', activeMatch: '/about/index.md' },
      { text: '关于我', link: '/about/me', activeMatch: '/about/me.md' },
      { text: 'MIT', link: '/about/MIT', activeMatch: '/about/MIT.md' },
      { text: '贡献者', link: '/about/Contributors', activeMatch: '/about/Contributors.md' },
    ],
    activeMatch: '/about/' // // 当前页面处于匹配路径下时, 对应导航菜单将突出显示
  },
 
 
 
  
  
];
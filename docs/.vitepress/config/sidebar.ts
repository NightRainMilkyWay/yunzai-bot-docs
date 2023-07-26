import type { DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.Config['sidebar'] = {

 // This sidebar gets displayed when a user
      // is on `guide` directory.
      '/guide/': [
        {
          text: '介绍',
          items: [
            { text: '什么是Yunzai bot', link: '/guide/介绍/什么是Yunzai bot.md' },
            { text: '准备工作', link: '/guide/介绍/准备工作.md' },
          ]
        },
        {
          text: '开始',
          items: [
            { text: '选择设备', link: '/guide/开始/选择设备.md' },
            {
              text: '脚本部署',
              items: [
                { text: 'TRSS管理脚本', link: '/guide/开始/脚本部署/TRSS管理脚本.md' },
                { text: '长楠脚本', link: '/guide/开始/脚本部署/长楠脚本.md' },
                { text: 'Bot-Help', link: '/guide/开始/脚本部署/Bot-Help.md' },
                { text: 'Ubuntu-键安装Miao-Yunzai脚本', link: '/guide/开始/脚本部署/Ubuntu-键安装Miao-Yunzai脚本.md' },
                { text: 'Yzai-V3 Ubuntu一键部署', link: '/guide/开始/脚本部署/Yzai-V3 Ubuntu一键部署' },
                { text: '3QNmoqy-Yunzai.bat Yunzai-Bot管理脚本', link: '/guide/开始/脚本部署/3QNmoqy-Yunzai.bat Yunzai-Bot管理脚本' },
                
              ]
            },
            {
              text: '手动部署',
              items: [
                { text: '手动部署', link: '/guide/开始/手动部署/手动部署.md' },
                { text: 'Android手动部署', link: '/guide/开始/结构目录.md' },
                { text: 'windows手动部署', link: '/guide/开始/开始.md' },
                { text: '服务器手动部署', link: '/guide/开始/结构目录.md' },
              ]
            },
            { text: '结构目录', link: '/guide/开始/结构目录.md' },
          ]
        }
      ],

      
}



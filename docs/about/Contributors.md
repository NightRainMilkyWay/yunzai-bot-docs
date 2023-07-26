---
title: 团队
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
	VPTeamMembers,
	VPTeamPageSection
} from 'vitepress/theme'

const svg = {
  gitee:'<svg t="1688198073080" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1524" width="200" height="200"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="1525"></path></svg>'
  }
const members = [
  {
    avatar: '../public/Contributors/Le-niao.png',
    name: 'Le-niao',
    title: 'Creator',
    org: 'yunzai bot',
    orgLink: 'https://gitee.com/Le-niao/Yunzai-Bot',
    desc: '原版 Yunzai 开发者',
    links: [
      { icon: 'github', link: 'https://github.com/Le-niao/Yunzai-Bot'},
     { icon: {
        svg:svg.gitee
        },
      link: 'https://gitee.com/Le-niao/Yunzai-Bot'
    },
 
     
        ],
  },
  {
    avatar: '../public/Contributors/Kokomi.png',
    name: 'Kokomi',
    title: 'Creator',
    org: 'yunzai bot',
    orgLink: 'https://gitee.com/yoimiya-kokomi/Miao-Yunzai',
    desc: '喵版 Yunzai bot 开发者',
    links: [
      { icon: 'github', link: 'https://gitee.com/yoimiya-kokomi/Miao-Yunzai'},
     { icon: {
        svg:svg.gitee
        },
      link: 'https://gitee.com/yoimiya-kokomi/Miao-Yunzai'
    },
 
     
        ],
  },
   {
    avatar: '../public/Contributors/时雨🌌星空.png',
    name: '时雨🌌星空',
    title: 'Creator',
    org: 'Yunzai Bot',
    orgLink: 'https://gitee.com/TimeRainStarSky/Yunzai',
    desc: 'TRSS-Yunzai,TRSS一键部署脚本',
    links: [
      { icon: 'github', link: 'https://github.com/TimeRainStarSky/Yunzai'},
     { icon: {
        svg:svg.gitee
        },
      link: 'https://gitee.com/TimeRainStarSky/Yunzai'
    },
 
     
        ],
  },
     {
    avatar: '../public/Contributors/渔火Arcadia.png',
    name: '渔火Arcadia',
    title: 'Creator',
    org: 'yunzai bot',
    orgLink: 'https://gitee.com/yhArcadia/Yunzai-Bot-plugins-index',
    desc: '云崽相关内容索引库',
    links: [
      { icon: 'github', link: 'https://github.com/yhArcadia/Yunzai-Bot-plugins-index'},
     { icon: {
        svg:svg.gitee
        },
      link: 'https://gitee.com/yhArcadia/Yunzai-Bot-plugins-index'
    },
 
     
        ],
  },
  {
    avatar: '../public/Contributors/听语惊花.png',
    name: '听语惊花',
    title: 'Creator',
    org: 'Yunzai-Bot-lite',
    orgLink: 'https://gitee.com/Nwflower/yunzai-bot-lite',
    desc: 'Yunzai-Bot-lite，轻量版，无原神功能',
    links: [
      { icon: 'github', link: 'https://github.com/Nwflower/yunzai-bot-lite'},
     { icon: {
        svg:svg.gitee
        },
      link: 'https://gitee.com/Nwflower/yunzai-bot-lite'
    },
 
     
        ],
  }
   
  
]
const core = [
   {
    avatar: '../public/Contributors/海琴烟.jpg',
    name: 'Oldmemorie',
    title: 'Creator',
    org: 'yunzai-bot-docs',
    orgLink: 'https://github.com/Oldmemorie/yunzai-bot-docs',
    desc: 'yunzai bot 文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' },
    ],
    sponsor: 'https://github.com/sponsors/yyx990803',
  },
]

</script>
<VPTeamPage>
	<VPTeamPageTitle>
		<template #title>重要贡献者</template>
		<template #lead>此页面尚未完成</template>
	</VPTeamPageTitle>
	<VPTeamMembers size="medium" :members="members" />
	<VPTeamPageSection>
		<template #title>文档发起人</template>
		<template #lead>oldmemorei</template>
		<template #members>
			<VPTeamMembers size="small" :members="core" />
		</template>
	</VPTeamPageSection>
</VPTeamPage>






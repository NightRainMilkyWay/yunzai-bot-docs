import type { HeadConfig } from 'vitepress';
import { metaData } from './constants';


export const head: HeadConfig[] = [
  ['link', { rel: 'icon', href: './刻晴Q.png' }],
  ['link', { rel: 'stylesheet', href: '/styles/custom.css' }],
  ['meta', { name: 'author', content: '旧忆 残梦' }],
  ['meta', { name: 'keywords', content: '基于vitepress书写的yunzai bot 构建文档' }],

  ['meta', { name: 'HandheldFriendly', content: 'True' }],
  ['meta', { name: 'MobileOptimized', content: '320' }],
  ['meta', { name: 'theme-color', content: '#000000' }],
  ['meta', { name: 'baidu_union_verify', content: '19bd8ed3f02a91e23043efdf1d823107' }],


]
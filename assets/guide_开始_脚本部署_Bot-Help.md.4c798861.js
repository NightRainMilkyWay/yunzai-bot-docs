import{_ as y,o as c,c as F,k as s,L as t,w as l,a as n,b as u,e as h,V as A,H as r}from"./chunks/framework.08d5879c.js";const N=JSON.parse('{"title":"bot help","description":"","frontmatter":{"title":"bot help"},"headers":[],"relativePath":"guide/开始/脚本部署/Bot-Help.md","filePath":"guide/开始/脚本部署/Bot-Help.md","lastUpdated":1690291236000}'),b={name:"guide/开始/脚本部署/Bot-Help.md"},D={align:"center"},C={id:"bot-help",tabindex:"-1"},m=s("a",{class:"header-anchor",href:"#bot-help","aria-label":'Permalink to "<font face="arial,helvaticon">BOT HELP</font>"'},"​",-1),_={id:"适用于centos-ubuntu一键管理部署脚本",tabindex:"-1"},B=s("a",{class:"header-anchor",href:"#适用于centos-ubuntu一键管理部署脚本","aria-label":'Permalink to "<font color=#FF851B>适用于Centos&&Ubuntu一键管理部署脚本</font>"'},"​",-1),k={class:"tip custom-block"},f={class:"custom-block-title"},g=s("p",null,"所有的操作必须是在root环境下",-1),q=A('<h2 id="一、安装教程" tabindex="-1">一、安装教程 <a class="header-anchor" href="#一、安装教程" aria-label="Permalink to &quot;一、安装教程&quot;">​</a></h2><h4 id="_1-切换权限" tabindex="-1">（1）切换权限 <a class="header-anchor" href="#_1-切换权限" aria-label="Permalink to &quot;（1）切换权限&quot;">​</a></h4><blockquote><p>必须<code>ROOT</code>用户</p></blockquote><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">sudo</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">su</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">root</span></span></code></pre></div><h4 id="_2-环境准备" tabindex="-1">（2）环境准备 <a class="header-anchor" href="#_2-环境准备" aria-label="Permalink to &quot;（2）环境准备&quot;">​</a></h4><blockquote><p>推荐使用 Centos7.6</p></blockquote><blockquote><p>1.<code>Centos</code>系统初始化 ☞<a href="./centos/README">Centos 详细内容</a></p></blockquote><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">yum</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">update</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">-y</span><span style="color:#ADBAC7;"> &amp;&amp; </span><span style="color:#F69D50;">yum</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">install</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">git</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">-y</span></span></code></pre></div><blockquote><p>推荐推荐 Ubuntu20.04</p></blockquote><blockquote><p>2.<code>Ubuntu</code>系统初始化 ☞<a href="./ubuntu/README">Ubuntu 详细内容</a></p></blockquote><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">apt</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">update</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">-y</span><span style="color:#ADBAC7;"> &amp;&amp; </span><span style="color:#F69D50;">apt-get</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">install</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">git</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">-y</span><span style="color:#ADBAC7;"> &amp;&amp; </span><span style="color:#F69D50;">apt-get</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">install</span><span style="color:#ADBAC7;">  </span><span style="color:#96D0FF;">whiptail</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">-y</span></span></code></pre></div><h4 id="_3-项目拉取" tabindex="-1">（3）项目拉取 <a class="header-anchor" href="#_3-项目拉取" aria-label="Permalink to &quot;（3）项目拉取&quot;">​</a></h4><blockquote><p>克隆启动</p></blockquote><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">git</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">clone</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">https://gitee.com/ningmengchongshui/bot-help.git</span><span style="color:#ADBAC7;">  </span><span style="color:#96D0FF;">/bot-help</span><span style="color:#ADBAC7;"> &amp;&amp; </span><span style="color:#F69D50;">chmod</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">+x</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">/bot-help/</span><span style="color:#6CB6FF;">*</span><span style="color:#96D0FF;">/</span><span style="color:#6CB6FF;">*</span><span style="color:#96D0FF;">.sh</span><span style="color:#ADBAC7;"> &amp;&amp; </span><span style="color:#F69D50;">sh</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">/bot-help/install.sh</span></span></code></pre></div><blockquote><p>日常启动</p></blockquote><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">sh</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">/bot-help/install.sh</span></span></code></pre></div>',16);function v(a,P,T,$,E,V){const p=r("font"),i=r("ArticleMetadata"),d=r("ClientOnly");return c(),F("div",null,[s("div",D,[s("h1",C,[t(p,{face:"arial,helvaticon"},{default:l(()=>[n("BOT HELP")]),_:1}),n(),m]),t(d,null,{default:l(()=>{var o,e;return[(((o=a.$frontmatter)==null?void 0:o.aside)??!0)&&(((e=a.$frontmatter)==null?void 0:e.showArticleMetadata)??!0)?(c(),u(i,{key:0,article:a.$frontmatter},null,8,["article"])):h("",!0)]}),_:1}),s("h1",_,[t(p,{color:"#FF851B"},{default:l(()=>[n("适用于Centos&&Ubuntu一键管理部署脚本")]),_:1}),n(),B]),t(d,null,{default:l(()=>{var o,e;return[(((o=a.$frontmatter)==null?void 0:o.aside)??!0)&&(((e=a.$frontmatter)==null?void 0:e.showArticleMetadata)??!0)?(c(),u(i,{key:0,article:a.$frontmatter},null,8,["article"])):h("",!0)]}),_:1})]),s("div",k,[s("p",f,[t(p,{color:"#FF851B"},{default:l(()=>[n("提示")]),_:1})]),g]),q])}const O=y(b,[["render",v]]);export{N as __pageData,O as default};

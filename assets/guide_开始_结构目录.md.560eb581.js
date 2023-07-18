import{_ as p,o as e,c as i,L as r,w as d,b as _,e as y,k as l,a as b,V as u,H as t}from"./chunks/framework.08d5879c.js";const A=JSON.parse('{"title":"结构目录","description":"","frontmatter":{"title":"结构目录"},"headers":[],"relativePath":"guide/开始/结构目录.md","filePath":"guide/开始/结构目录.md","lastUpdated":1689685226000}'),m={name:"guide/开始/结构目录.md"},f=l("h1",{id:"yunzai-结构主要目录",tabindex:"-1"},[b("Yunzai 结构主要目录 "),l("a",{class:"header-anchor",href:"#yunzai-结构主要目录","aria-label":'Permalink to "Yunzai 结构主要目录"'},"​")],-1),h=u(`<blockquote><p>这里只显示主要结构，毕竟整个目录包括子文件夹太多了，不知道也没关系统, <s>绝对不是我写不出来</s></p></blockquote><hr><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#adbac7;">.Yunzai</span></span>
<span class="line"><span style="color:#adbac7;"> ├─ .git</span></span>
<span class="line"><span style="color:#adbac7;"> ├─ config //配置</span></span>
<span class="line"><span style="color:#adbac7;"> │  ├─ config</span></span>
<span class="line"><span style="color:#adbac7;"> │  │  ├─ bot.yaml //bot配置</span></span>
<span class="line"><span style="color:#adbac7;"> │  │  ├─ group.yaml //群组配置</span></span>
<span class="line"><span style="color:#adbac7;"> │  │  ├─ other.yaml //其他配置，比如主人设置，黑名单之类的</span></span>
<span class="line"><span style="color:#adbac7;"> │  │  ├─ redis.yaml //redis配置，不用管</span></span>
<span class="line"><span style="color:#adbac7;"> │  └─ default_config //作为config的备份文件，千万不要动</span></span>
<span class="line"><span style="color:#adbac7;"> │</span></span>
<span class="line"><span style="color:#adbac7;"> ├─ data //数据</span></span>
<span class="line"><span style="color:#adbac7;"> │  ├─ face //群组表情存放位置</span></span>
<span class="line"><span style="color:#adbac7;"> │  ├─ myscookie //cookie存放位置</span></span>
<span class="line"><span style="color:#adbac7;"> │  └─ userdata //绑定uid存放位置</span></span>
<span class="line"><span style="color:#adbac7;"> └─ plugins</span></span>
<span class="line"><span style="color:#adbac7;">     ├─ example //js插件存放位置</span></span>
<span class="line"><span style="color:#adbac7;">     ├─ genshin //自带插件，别再找不到米游社资讯推送了</span></span>
<span class="line"><span style="color:#adbac7;">     ├─ other //小白勿动</span></span>
<span class="line"><span style="color:#adbac7;">     ├─ system //同上</span></span>
<span class="line"><span style="color:#adbac7;">     ├─ …… //其他插件依次类推</span></span></code></pre></div>`,3);function g(a,k,C,V,N,T){const c=t("ArticleMetadata"),o=t("ClientOnly");return e(),i("div",null,[f,r(o,null,{default:d(()=>{var s,n;return[(((s=a.$frontmatter)==null?void 0:s.aside)??!0)&&(((n=a.$frontmatter)==null?void 0:n.showArticleMetadata)??!0)?(e(),_(c,{key:0,article:a.$frontmatter},null,8,["article"])):y("",!0)]}),_:1}),h])}const v=p(m,[["render",g]]);export{A as __pageData,v as default};

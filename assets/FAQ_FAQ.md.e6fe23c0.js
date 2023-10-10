import{_ as u,o as i,c as y,L as l,w as h,b as _,e as b,k as a,a as s,V as t,H as o}from"./chunks/framework.08d5879c.js";const W=JSON.parse('{"title":"常见问题及其解决方法","description":"","frontmatter":{"title":"常见问题及其解决方法"},"headers":[],"relativePath":"FAQ/FAQ.md","filePath":"FAQ/FAQ.md","lastUpdated":1690339581000}'),m={name:"FAQ/FAQ.md"},g=a("h1",{id:"常见问题及其解决方法",tabindex:"-1"},[s("常见问题及其解决方法 "),a("a",{class:"header-anchor",href:"#常见问题及其解决方法","aria-label":'Permalink to "常见问题及其解决方法"'},"​")],-1),F=a("blockquote",null,[a("p",null,"自己解决不了的报错建议使用脚本，脚本会自动配置解决一些不必要的麻烦，当然这不是绝对的")],-1),A={class:"table-of-contents"},q={href:"#icqq的-禁止登录-版本过低"},C={href:"#_1-版本过低"},D=a("li",null,[a("a",{href:"#_2-icqq的-禁止登录-错误码-45"},"2.icqq的[禁止登录]（错误码:45）")],-1),k=a("li",null,[a("a",{href:"#_3-icqq的-禁止登录-错误码-235"},"3.icqq的[禁止登录]（错误码:235）")],-1),B=a("li",null,[a("a",{href:"#_4-icqq的-禁止登录-错误码-235"},"4.icqq的[禁止登录]（错误码:235）")],-1),f=a("li",null,[a("a",{href:"#_5-icqq的-禁止登录-错误码-238"},"5.icqq的[禁止登录]（错误码:238）")],-1),v={href:"#登录token过期"},x=a("li",null,[a("a",{href:"#yunzai-bot-换源"},"yunzai bot 换源"),a("ul",null,[a("li",null,[a("a",{href:"#依次执行以下"},"依次执行以下")])])],-1),P={id:"icqq的-禁止登录-版本过低",tabindex:"-1"},T=a("a",{class:"header-anchor",href:"#icqq的-禁止登录-版本过低","aria-label":'Permalink to "icqq的 禁止登录&版本过低<Badge type="danger" text="非常重要" />"'},"​",-1),I=a("blockquote",null,[a("ul",null,[a("li",null,"1使用脚本修复，根据脚本内指引提示完成操作即可"),a("li",null,"2手动修复")])],-1),z={id:"_1-版本过低",tabindex:"-1"},V=a("a",{class:"header-anchor",href:"#_1-版本过低","aria-label":'Permalink to "1.版本过低 <Badge type="warning" text="重要的" />"'},"​",-1),S=t('<ul><li>尝试更换登录设备，建议使用手表,Mac OS设备，尝试更改位于data下的<code>device.json</code>。引号内的字符随便改，原来有几个字符改为后还是有几个字符。改完之后输入</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">npm</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">run</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">login</span></span></code></pre></div>',2),N=a("h3",{id:"_2-icqq的-禁止登录-错误码-45",tabindex:"-1"},[s("2.icqq的[禁止登录]（错误码:45） "),a("a",{class:"header-anchor",href:"#_2-icqq的-禁止登录-错误码-45","aria-label":'Permalink to "2.icqq的[禁止登录]（错误码:45）"'},"​")],-1),X=a("a",{href:"/yunzai-bot-docs/guide/menu1/开始/02-脚本部署"},"传送门",-1),M=t('<h3 id="_3-icqq的-禁止登录-错误码-235" tabindex="-1">3.icqq的[禁止登录]（错误码:235） <a class="header-anchor" href="#_3-icqq的-禁止登录-错误码-235" aria-label="Permalink to &quot;3.icqq的[禁止登录]（错误码:235）&quot;">​</a></h3><ul><li>解决方法：删除<a href="/yunzai-bot-docs/guide/menu1/开始/05-结构目录">data</a>下的配置文件 可以手动删除也可以执行下面的代码</li></ul><details class="details custom-block"><summary>yunzai</summary><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">rm</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">-rf</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">data/device.json</span></span></code></pre></div></details><details class="details custom-block"><summary>Miao-Yunzai</summary><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">rm</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">-rf</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">data/icqq</span></span></code></pre></div></details><ul><li>最后执行</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">node</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">app</span></span></code></pre></div>',6),Q=a("a",{href:"/yunzai-bot-docs/guide/menu1/开始/02-脚本部署"},"传送门",-1),w=a("p",null,[a("s",null,"别告诉我你分不清")],-1),E=a("h3",{id:"_4-icqq的-禁止登录-错误码-235",tabindex:"-1"},[s("4.icqq的[禁止登录]（错误码:235） "),a("a",{class:"header-anchor",href:"#_4-icqq的-禁止登录-错误码-235","aria-label":'Permalink to "4.icqq的[禁止登录]（错误码:235）"'},"​")],-1),$=a("h3",{id:"_5-icqq的-禁止登录-错误码-238",tabindex:"-1"},[s("5.icqq的[禁止登录]（错误码:238） "),a("a",{class:"header-anchor",href:"#_5-icqq的-禁止登录-错误码-238","aria-label":'Permalink to "5.icqq的[禁止登录]（错误码:238）"'},"​")],-1),O=a("p",null,[s("换个协议，密码登录， 建议使用"),a("code",null,"手表，Mac OS"),s("。")],-1),Y={id:"登录token过期",tabindex:"-1"},j=a("a",{class:"header-anchor",href:"#登录token过期","aria-label":'Permalink to "登录token过期<Badge type="danger" text="非常重要" />"'},"​",-1),L=t(`<blockquote><ul><li>1.使用脚本</li><li>执行</li></ul></blockquote><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">pnpm</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">i</span><span style="color:#ADBAC7;"> &amp;&amp; </span><span style="color:#F69D50;">pnpm</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">add</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">icqq@0.3.14</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">-w</span></span></code></pre></div><blockquote><p>删除Yunzai-bot\\data文件夹下的device.json文件 然后进入Yunzai-Bot\\config\\config文件夹下文本打开qq.yaml</p></blockquote><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#768390;"># qq账号</span></span>
<span class="line"><span style="color:#F69D50;">qq:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">123456789</span></span>
<span class="line"><span style="color:#768390;"># 密码，为空则用扫码登录,扫码登录现在仅能在同一ip下进行</span></span>
<span class="line"><span style="color:#6CB6FF;">pwd</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#768390;"># 1:安卓手机、 2:aPad 、 3:安卓手表、 4:MacOS 、 5:iPad</span></span>
<span class="line"><span style="color:#F69D50;">platform:</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">6</span></span></code></pre></div><blockquote><p>把platform: 冒号后面改为6 然后<code>node app</code></p></blockquote><h2 id="yunzai-bot-换源" tabindex="-1">yunzai bot 换源 <a class="header-anchor" href="#yunzai-bot-换源" aria-label="Permalink to &quot;yunzai  bot 换源&quot;">​</a></h2><h3 id="依次执行以下" tabindex="-1"><em><strong>依次执行以下</strong></em> <a class="header-anchor" href="#依次执行以下" aria-label="Permalink to &quot;***依次执行以下***&quot;">​</a></h3><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-X1PrI" id="tab-g3MR0LC" checked="checked"><label for="tab-g3MR0LC">第一步</label><input type="radio" name="group-X1PrI" id="tab-EUYBuzx"><label for="tab-EUYBuzx">第二部</label><input type="radio" name="group-X1PrI" id="tab-ZEDyXaN"><label for="tab-ZEDyXaN">第三步</label><input type="radio" name="group-X1PrI" id="tab-IFh0iVg"><label for="tab-IFh0iVg">第四步</label><input type="radio" name="group-X1PrI" id="tab-kBmexxQ"><label for="tab-kBmexxQ">第五步</label><input type="radio" name="group-X1PrI" id="tab-8n-5NIo"><label for="tab-8n-5NIo">第六步</label><input type="radio" name="group-X1PrI" id="tab-5aDrqHL"><label for="tab-5aDrqHL">第七步</label><input type="radio" name="group-X1PrI" id="tab-VhZjgKm"><label for="tab-VhZjgKm">第八步</label></div><div class="blocks"><div class="language-sh active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">git</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">branch</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">-m</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">master</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">main</span></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">git</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">remote</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">rm</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">origin</span></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">git</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">remote</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">add</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">origin</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">https://gitee.com/yoimiya-kokomi/Yunzai-Bot.git</span></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">git</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">fetch</span></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">git</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">branch</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">--set-upstream-to=origin/main</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">main</span></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">git</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">reset</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">--hard</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">origin/main</span></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">pnpm</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">install</span></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark-dimmed"><code><span class="line"><span style="color:#F69D50;">pnpm</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">updata</span></span></code></pre></div></div></div>`,8);function R(e,Z,H,U,K,J){const r=o("ArticleMetadata"),d=o("ClientOnly"),n=o("Badge");return i(),y("div",null,[g,l(d,null,{default:h(()=>{var p,c;return[(((p=e.$frontmatter)==null?void 0:p.aside)??!0)&&(((c=e.$frontmatter)==null?void 0:c.showArticleMetadata)??!0)?(i(),_(r,{key:0,article:e.$frontmatter},null,8,["article"])):b("",!0)]}),_:1}),F,a("nav",A,[a("ul",null,[a("li",null,[a("a",q,[s("icqq的 禁止登录&版本过低"),l(n,{type:"danger",text:"非常重要"})]),a("ul",null,[a("li",null,[a("a",C,[s("1.版本过低 "),l(n,{type:"warning",text:"重要的"})])]),D,k,B,f])]),a("li",null,[a("a",v,[s("登录token过期"),l(n,{type:"danger",text:"非常重要"})])]),x])]),a("h2",P,[s("icqq的 禁止登录&版本过低"),l(n,{type:"danger",text:"非常重要"}),s(),T]),I,a("h3",z,[s("1.版本过低 "),l(n,{type:"warning",text:"重要的"}),s(),V]),S,a("p",null,[s("建议多试几次"),l(n,{type:"tip",text:"建议"})]),N,a("ul",null,[a("li",null,[s("建议使用脚本修复 "),X,l(n,{type:"tip",text:"建议"})])]),M,a("ul",null,[a("li",null,[s("不会用脚本"),Q,l(n,{type:"tip",text:"建议"})])]),w,E,a("p",null,[s("风控，等一段时间（可能一下下，几十分钟，几小时...）就可登录，建议是换号先使用其他小号"),l(n,{type:"tip",text:"建议"})]),$,O,a("h2",Y,[s("登录token过期"),l(n,{type:"danger",text:"非常重要"}),s(),j]),L])}const aa=u(m,[["render",R]]);export{W as __pageData,aa as default};

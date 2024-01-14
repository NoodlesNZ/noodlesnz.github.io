"use strict";(self.webpackChunknoodles=self.webpackChunknoodles||[]).push([[4902],{4629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=n(5893),i=n(1151);const r={title:"Optimized vBulletin (Part 2)"},l=void 0,o={permalink:"/blog/2007/10/30/optimized-vbulletin-part-2",source:"@site/blog/2007-10-30-optimized-vbulletin-part-2.mdx",title:"Optimized vBulletin (Part 2)",description:"I'm just trying out a new method to optimize vBulletin's front end scripts and CSS. It's still a work in progress but these are the results I have seen on my test site (www.wirelessforums.org)",date:"2007-10-30T00:00:00.000Z",formattedDate:"October 30, 2007",tags:[],readingTime:1.315,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Optimized vBulletin (Part 2)"},unlisted:!1,prevItem:{title:"Postcode Database V2 updated",permalink:"/blog/2008/04/20/postcode-database-v2-updated"},nextItem:{title:"New Zealand Postcode Database (V2)",permalink:"/blog/2007/09/14/new-zealand-postcode-database-v2"}},a={authorsImageUrls:[]},d=[];function u(e){const t={a:"a",br:"br",em:"em",p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["I'm just trying out a new method to optimize vBulletin's front end scripts and CSS. It's still a work in progress but these are the results I have seen on my test site (",(0,s.jsx)(t.a,{href:"http://www.wirelessforums.org",children:"www.wirelessforums.org"}),")"]}),"\n","\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Without GZIP"})}),"\n",(0,s.jsx)(t.p,{children:"Base VB (v3.6.8)"}),"\n",(0,s.jsxs)(t.p,{children:["vbulletin_global.js - 43.8KB",(0,s.jsx)(t.br,{}),"\n","vbulletin_menu.js - 17.8KB",(0,s.jsx)(t.br,{}),"\n","vbulletin_read_marker.js - 6.7KB",(0,s.jsx)(t.br,{}),"\n","vbulletin_md5.js - 9.6KB"]}),"\n",(0,s.jsx)(t.p,{children:"JS total - 77.9KB"}),"\n",(0,s.jsx)(t.p,{children:"css - 5.7KB"}),"\n",(0,s.jsx)(t.p,{children:"Using minify"}),"\n",(0,s.jsxs)(t.p,{children:["vbulletin_global.js - 23KB",(0,s.jsx)(t.br,{}),"\n","vbulletin_menu.js - 10.4KB",(0,s.jsx)(t.br,{}),"\n","vbulletin_read_marker.js - 3.3KB",(0,s.jsx)(t.br,{}),"\n","vbulletin_md5.js - 6KB"]}),"\n",(0,s.jsx)(t.p,{children:"JS total - 42.7 (45.1% savings)"}),"\n",(0,s.jsx)(t.p,{children:"css - 4.1K (28% savings)"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"With GZIP"})}),"\n",(0,s.jsx)(t.p,{children:"Base VB (v3.6.8)"}),"\n",(0,s.jsxs)(t.p,{children:["vbulletin_global.js - 12.5KB",(0,s.jsx)(t.br,{}),"\n","vbulletin_menu.js - 4.7KB",(0,s.jsx)(t.br,{}),"\n","vbulletin_read_marker.js - 2KB",(0,s.jsx)(t.br,{}),"\n","vbulletin_md5.js - 3.3KB"]}),"\n",(0,s.jsx)(t.p,{children:"JS total - 22.5KB"}),"\n",(0,s.jsx)(t.p,{children:"css - 1.3KB"}),"\n",(0,s.jsx)(t.p,{children:"Using minify and GZIP"}),"\n",(0,s.jsxs)(t.p,{children:["vbulletin_global.js - 6.9KB",(0,s.jsx)(t.br,{}),"\n","vbulletin_menu.js - 2.7KB",(0,s.jsx)(t.br,{}),"\n","vbulletin_read_marker.js - 1KB",(0,s.jsx)(t.br,{}),"\n","vbulletin_md5.js - 2.1KB"]}),"\n",(0,s.jsx)(t.p,{children:"JS total - 12.7KB"}),"\n",(0,s.jsxs)(t.p,{children:["This is an extra 43.5% savings on top of GZIP. A total of ",(0,s.jsx)(t.em,{children:"65.2KB (83.7%)"})," savings from the original."]}),"\n",(0,s.jsx)(t.p,{children:"css - 1.1KB"}),"\n",(0,s.jsxs)(t.p,{children:["An extra 15.3% savings on top of GZIP. A total of ",(0,s.jsx)(t.em,{children:"4.6KB (80.7%)"})," savings from the original."]}),"\n",(0,s.jsx)(t.p,{children:"This is a huge improvement over the original file sizes and speeds up rendering of the page quite a bit. The new method doesn't require you to download JS replacements for each version of vB, instead it works off the existing files. Hopefully this will silence the people who complained about copyright/piracy issues with me distributing the JS files (even though they're distributed to every browser that downloads the page)."}),"\n",(0,s.jsx)(t.p,{children:"I'm also looking at some other ways to speed up rendering as much as possible. Stay tuned for downloads and a full write up."})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>l});var s=n(7294);const i={},r=s.createContext(i);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
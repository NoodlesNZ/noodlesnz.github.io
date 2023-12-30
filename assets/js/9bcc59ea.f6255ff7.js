"use strict";(self.webpackChunknoodles=self.webpackChunknoodles||[]).push([[4902],{4629:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=s(5893),i=s(1151);const l={slug:"optimized-vbulletin-part-2",title:"Optimized vBulletin (Part 2)"},r=void 0,o={permalink:"/blog/optimized-vbulletin-part-2",source:"@site/blog/2007-10-30-optimized-vbulletin-part-2.mdx",title:"Optimized vBulletin (Part 2)",description:"I'm just trying out a new method to optimize vBulletin's front end scripts and CSS. It's still a work in progress but these are the results I have seen on my test site (www.wirelessforums.org) Without GZIP Base VB (v3.6.8) vbulletinglobal.js &#8211; 43.8KB vbulletinmenu.js &#8211; 17.8KB vbulletinreadmarker.js &#8211; 6.7KB vbulletin_md5.js &#8211; 9.6KB JS total &#8211; 77.9KB [&hellip;]",date:"2007-10-30T00:00:00.000Z",formattedDate:"October 30, 2007",tags:[],readingTime:1.645,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"optimized-vbulletin-part-2",title:"Optimized vBulletin (Part 2)"},unlisted:!1,prevItem:{title:"Postcode Database V2 updated",permalink:"/blog/postcode-database-v2-updated"},nextItem:{title:"New Zealand Postcode Database (V2)",permalink:"/blog/new-zealand-postcode-database-v2"}},a={authorsImageUrls:[]},d=[];function u(e){const t={a:"a",p:"p",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["I'm just trying out a new method to optimize vBulletin's front end scripts and CSS. It's still a work in progress but these are the results I have seen on my test site (",(0,n.jsx)(t.a,{href:"http://www.wirelessforums.org",children:"www.wirelessforums.org"}),") Without GZIP Base VB (v3.6.8) vbulletin_global.js \u2013 43.8KB vbulletin_menu.js \u2013 17.8KB vbulletin_read_marker.js \u2013 6.7KB vbulletin_md5.js \u2013 9.6KB JS total \u2013 77.9KB [\u2026]"]}),"\n",(0,n.jsxs)(t.p,{children:["I'm just trying out a new method to optimize vBulletin's front end scripts and CSS. It's still a work in progress but these are the results I have seen on my test site (",(0,n.jsx)(t.a,{href:"http://www.wirelessforums.org",children:"www.wirelessforums.org"}),")"]}),"\n",(0,n.jsx)("strong",{children:"Without GZIP"}),"\n",(0,n.jsx)(t.p,{children:"Base VB (v3.6.8)"}),"\n",(0,n.jsxs)(t.p,{children:["vbulletin_global.js \u2013 43.8KB",(0,n.jsx)("br",{}),"\nvbulletin_menu.js \u2013 17.8KB",(0,n.jsx)("br",{}),"\nvbulletin_read_marker.js \u2013 6.7KB",(0,n.jsx)("br",{}),"\nvbulletin_md5.js \u2013 9.6KB"]}),"\n",(0,n.jsx)(t.p,{children:"JS total \u2013 77.9KB"}),"\n",(0,n.jsx)(t.p,{children:"css \u2013 5.7KB"}),"\n",(0,n.jsx)(t.p,{children:"Using minify"}),"\n",(0,n.jsxs)(t.p,{children:["vbulletin_global.js \u2013 23KB",(0,n.jsx)("br",{}),"\nvbulletin_menu.js \u2013 10.4KB",(0,n.jsx)("br",{}),"\nvbulletin_read_marker.js \u2013 3.3KB",(0,n.jsx)("br",{}),"\nvbulletin_md5.js \u2013 6KB"]}),"\n",(0,n.jsx)(t.p,{children:"JS total \u2013 42.7 (45.1% savings)"}),"\n",(0,n.jsx)(t.p,{children:"css \u2013 4.1K (28% savings)"}),"\n",(0,n.jsx)("strong",{children:"With GZIP"}),"\n",(0,n.jsx)(t.p,{children:"Base VB (v3.6.8)"}),"\n",(0,n.jsxs)(t.p,{children:["vbulletin_global.js \u2013 12.5KB",(0,n.jsx)("br",{}),"\nvbulletin_menu.js \u2013 4.7KB",(0,n.jsx)("br",{}),"\nvbulletin_read_marker.js \u2013 2KB",(0,n.jsx)("br",{}),"\nvbulletin_md5.js \u2013 3.3KB"]}),"\n",(0,n.jsx)(t.p,{children:"JS total \u2013 22.5KB"}),"\n",(0,n.jsx)(t.p,{children:"css \u2013 1.3KB"}),"\n",(0,n.jsx)(t.p,{children:"Using minify and GZIP"}),"\n",(0,n.jsxs)(t.p,{children:["vbulletin_global.js \u2013 6.9KB",(0,n.jsx)("br",{}),"\nvbulletin_menu.js \u2013 2.7KB",(0,n.jsx)("br",{}),"\nvbulletin_read_marker.js \u2013 1KB",(0,n.jsx)("br",{}),"\nvbulletin_md5.js \u2013 2.1KB"]}),"\n",(0,n.jsx)(t.p,{children:"JS total \u2013 12.7KB"}),"\n",(0,n.jsxs)(t.p,{children:["This is an extra 43.5% savings on top of GZIP. A total of ",(0,n.jsx)("strong",{children:"65.2KB (83.7%) "}),"savings from the original."]}),"\n",(0,n.jsx)(t.p,{children:"css \u2013 1.1KB"}),"\n",(0,n.jsxs)(t.p,{children:["An extra 15.3% savings on top of GZIP. A total of ",(0,n.jsx)("strong",{children:"4.6KB (80.7%) "}),"savings from the original."]}),"\n",(0,n.jsx)(t.p,{children:"This is a huge improvement over the original file sizes and speeds up rendering of the page quite a bit. The new method doesn't require you to download JS replacements for each version of vB, instead it works off the existing files. Hopefully this will silence the people who complained about copyright/piracy issues with me distributing the JS files (even though they're distributed to every browser that downloads the page)."}),"\n",(0,n.jsx)(t.p,{children:"I'm also looking at some other ways to speed up rendering as much as possible. Stay tuned for downloads and a full write up."})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>r});var n=s(7294);const i={},l=n.createContext(i);function r(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);
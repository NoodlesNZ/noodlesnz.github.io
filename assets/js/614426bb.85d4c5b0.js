"use strict";(self.webpackChunknoodles=self.webpackChunknoodles||[]).push([[2479],{7061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var o=n(5893),s=n(1151);const r={slug:"df-not-reporting-correct-disk-usage",title:"df not reporting correct disk usage"},i=void 0,d={permalink:"/blog/df-not-reporting-correct-disk-usage",source:"@site/blog/2011-07-27-df-not-reporting-correct-disk-usage.mdx",title:"df not reporting correct disk usage",description:"I had a problem where df and du disagreed with the amount of disk usage. The cause was processes holding on to unlinked files. Running the following identified the processes: ls -ld /proc//fd/ 2&gt;&amp;1 | fgrep &#8216;(deleted)' I killed the processes and df is now showing the correct information.",date:"2011-07-27T00:00:00.000Z",formattedDate:"July 27, 2011",tags:[],readingTime:.495,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"df-not-reporting-correct-disk-usage",title:"df not reporting correct disk usage"},unlisted:!1,prevItem:{title:"VLC Airplay on Airport Express",permalink:"/blog/vlc-airplay-on-airport-express"},nextItem:{title:"Dreamhost supports ipv6",permalink:"/blog/dreamhost-supports-ipv6"}},a={authorsImageUrls:[]},c=[];function l(e){const t={em:"em",p:"p",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("p",{children:["I had a problem where df and du disagreed with the amount of disk usage. The cause was processes holding on to unlinked files. Running the following identified the processes: ls -ld /proc/",(0,o.jsx)(t.em,{children:"/fd/"})," 2>&1 | fgrep \u2018(deleted)' I killed the processes and df is now showing the correct information."]}),"\n",(0,o.jsx)(t.p,{children:"I had a problem where df and du disagreed with the amount of disk usage. The cause was processes holding on to unlinked files. Running the following identified the processes:"}),"\n",(0,o.jsxs)(t.p,{children:["ls -ld /proc/",(0,o.jsx)(t.em,{children:"/fd/"})," 2>&1 | fgrep \u2018(deleted)'"]}),"\n",(0,o.jsx)(t.p,{children:"I killed the processes and df is now showing the correct information."})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>i});var o=n(7294);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);
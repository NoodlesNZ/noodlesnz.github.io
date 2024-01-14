"use strict";(self.webpackChunknoodles=self.webpackChunknoodles||[]).push([[8274],{5389:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=t(5893),r=t(1151);const s={title:"CVS error"},i=void 0,c={permalink:"/blog/2012/02/10/cvs-error",source:"@site/blog/2012-02-10-cvs-error.mdx",title:"CVS error",description:"I recently changed to using the unix command line for cvs and changed all my cvs roots to instead of (tortoise prefers ssh).",date:"2012-02-10T00:00:00.000Z",formattedDate:"February 10, 2012",tags:[],readingTime:.46,hasTruncateMarker:!1,authors:[],frontMatter:{title:"CVS error"},unlisted:!1,prevItem:{title:"RPM macros",permalink:"/blog/2012/02/17/rpm-macros"},nextItem:{title:"Network Solutions and DNSSEC",permalink:"/blog/2012/01/18/network-solutions-and-dnssec"}},a={authorsImageUrls:[]},d=[];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["I recently changed to using the unix command line for cvs and changed all my cvs roots to ",(0,o.jsx)(n.code,{children:":ext:"})," instead of ",(0,o.jsx)(n.code,{children:":ssh:"})," (tortoise prefers ssh)."]}),"\n",(0,o.jsx)(n.p,{children:"When I made the change, anytime I updated cvs I got this error:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"/CVSROOTccess /cvsroot\nNo such file or directory\n"})}),"\n",(0,o.jsx)(n.p,{children:"This makes no sense. Luckily, after searching around I found this is a problem with DOS line breaks screwing with unix cvs. Running the following fixes the problem:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"dos2unix `find . -name Root`\ndos2unix `find . -name Entries`\ndos2unix `find . -name Repository`  \n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var o=t(7294);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunknoodles=self.webpackChunknoodles||[]).push([[2976],{1785:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(5893),i=n(1151);const r={title:"Yarn audit fix"},a=void 0,s={permalink:"/blog/2020/01/07/yarn-audit-fix",source:"@site/blog/2020-01-07-yarn-audit-fix.mdx",title:"Yarn audit fix",description:"Yarn doesn't have the ability to fix the problems it finds in a security audit (like npm does). There is a workaround that I found on a github thread though:",date:"2020-01-07T00:00:00.000Z",formattedDate:"January 7, 2020",tags:[],readingTime:.285,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Yarn audit fix"},unlisted:!1,nextItem:{title:"Fixing Twig deprecations in Symfony 4.4",permalink:"/blog/2019/11/27/fixing-twig-deprecations-in-symfony-4-4"}},d={authorsImageUrls:[]},c=[];function u(t){const e={code:"code",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"Yarn doesn't have the ability to fix the problems it finds in a security audit (like npm does). There is a workaround that I found on a github thread though:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"npm install\nnpm audit fix --force # breaking changes\nrm yarn.lock\nyarn import\nyarn audit\nrm package-lock.json\n"})}),"\n",(0,o.jsx)(e.p,{children:"It's not pretty but it does the job."})]})}function l(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(u,{...t})}):u(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>s,a:()=>a});var o=n(7294);const i={},r=o.createContext(i);function a(t){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:a(t.components),o.createElement(r.Provider,{value:e},t.children)}}}]);
"use strict";(self.webpackChunknoodles=self.webpackChunknoodles||[]).push([[5582],{7211:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=n(5893),o=n(1151);const a={slug:"yarn-audit-fix",title:"Yarn audit fix"},r=void 0,s={permalink:"/blog/yarn-audit-fix",source:"@site/blog/2020-01-07-yarn-audit-fix.mdx",title:"Yarn audit fix",description:"Yarn doesn't have the ability to fix the problems it finds in a security audit (like npm does). There is a workaround that I found on a github thread though: It's not pretty but it does the job.",date:"2020-01-07T00:00:00.000Z",formattedDate:"January 7, 2020",tags:[],readingTime:.48,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"yarn-audit-fix",title:"Yarn audit fix"},unlisted:!1,nextItem:{title:"Fixing Twig deprecations in Symfony 4.4",permalink:"/blog/fixing-twig-deprecations-in-symfony-4-4"}},d={authorsImageUrls:[]},u=[];function c(t){const e={code:"code",p:"p",pre:"pre",...(0,o.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"Yarn doesn't have the ability to fix the problems it finds in a security audit (like npm does). There is a workaround that I found on a github thread though: It's not pretty but it does the job."}),"\n",(0,i.jsx)(e.p,{children:"Yarn doesn't have the ability to fix the problems it finds in a security audit (like npm does). There is a workaround that I found on a github thread though:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"npm install\nnpm audit fix --force # breaking changes\nrm yarn.lock\nyarn import\nyarn audit\nrm package-lock.json\n"})}),"\n",(0,i.jsx)(e.p,{children:"It's not pretty but it does the job."})]})}function h(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(c,{...t})}):c(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>s,a:()=>r});var i=n(7294);const o={},a=i.createContext(o);function r(t){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:r(t.components),i.createElement(a.Provider,{value:e},t.children)}}}]);
"use strict";(self.webpackChunknoodles=self.webpackChunknoodles||[]).push([[3634],{9268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=n(5893),o=n(1151);const s={slug:"mysql-and-redhat-enterprise-linux-4",title:"MySQL and Redhat Enterprise Linux 4"},i=void 0,a={permalink:"/blog/mysql-and-redhat-enterprise-linux-4",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2006-12-01-mysql-and-redhat-enterprise-linux-4.mdx",source:"@site/blog/2006-12-01-mysql-and-redhat-enterprise-linux-4.mdx",title:"MySQL and Redhat Enterprise Linux 4",description:"I ran into some problems with MySQL on RHEL 4 when SELinux was enabled. When starting MySQL it would come up with this [&hellip;]",date:"2006-12-01T00:00:00.000Z",formattedDate:"December 1, 2006",tags:[],readingTime:.435,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"mysql-and-redhat-enterprise-linux-4",title:"MySQL and Redhat Enterprise Linux 4"},unlisted:!1,prevItem:{title:"Google Sitemap Generator",permalink:"/blog/google-sitemap-generator"},nextItem:{title:"Double byte and PHP (unicode problems)",permalink:"/blog/double-byte-and-php-unicode-problems"}},l={authorsImageUrls:[]},d=[];function c(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"I ran into some problems with MySQL on RHEL 4 when SELinux was enabled. When starting MySQL it would come up with this [\u2026]"}),"\n",(0,r.jsx)(t.p,{children:"I ran into some problems with MySQL on RHEL 4 when SELinux was enabled. When starting MySQL it would come up with this:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Starting MySQL...................................[FAILED]\n"})}),"\n",(0,r.jsx)(t.p,{children:"And the following in /var/log/messages:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'Dec  1 14:02:52 searchdev kernel: audit(1164934972.432:5): avc:  denied  { append } for  pid=3071 comm="mysqld" name="searchdev.err" dev=sda6 ino=1687755 scontext=root:system_r:mysqld_t tcontext=root:object_r:var_lib_t tclass=file[/code]  \n'})}),"\n",(0,r.jsxs)(t.p,{children:["All fixed though thanks to this page: ",(0,r.jsx)(t.a,{href:"http://bugs.mysql.com/bug.php?id=12676",children:"http://bugs.mysql.com/bug.php?id=12676"})]})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(7294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
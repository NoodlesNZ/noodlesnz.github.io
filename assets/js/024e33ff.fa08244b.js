"use strict";(self.webpackChunknoodles=self.webpackChunknoodles||[]).push([[7043],{3430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=n(5893),o=n(1151);const a={slug:"show-mysql-engine-tablespace-size",title:"Show MySQL engine tablespace size"},i=void 0,r={permalink:"/blog/show-mysql-engine-tablespace-size",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2014-10-22-show-mysql-engine-tablespace-size.mdx",source:"@site/blog/2014-10-22-show-mysql-engine-tablespace-size.mdx",title:"Show MySQL engine tablespace size",description:"I have been trying to migrate everything in MySQL to use INNODB (death to all MyISAM), but was unsure of how much data was being stored in each storage engine. You can use the following query to give a total usage for all engines: SELECT ENGINE, CONCAT(FORMAT(RIBPS/POWER(1024,pw),2),SUBSTR(&#8216; KMGT',pw+1,1)) Usage FROM ( SELECT ENGINE,RIBPS,FLOOR(LOG(RIBPS)/LOG(1024)) pw FROM [&hellip;]",date:"2014-10-22T00:00:00.000Z",formattedDate:"October 22, 2014",tags:[],readingTime:.74,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"show-mysql-engine-tablespace-size",title:"Show MySQL engine tablespace size"},unlisted:!1,prevItem:{title:"Speed up Jenkins phpcs (PHP CodeSniffer)",permalink:"/blog/speed-up-jenkins-phpcs-php-codesniffer"},nextItem:{title:"Speeding up percona xtrabackup restores",permalink:"/blog/speeding-up-percona-xtrabackup-restores"}},c={authorsImageUrls:[]},l=[];function u(e){const t={code:"code",...(0,o.a)(),...e.components};return(0,s.jsxs)("p",{children:["I have been trying to migrate everything in MySQL to use INNODB (death to all MyISAM), but was unsure of how much data was being stored in each storage engine. You can use the following query to give a total usage for all engines: SELECT ENGINE, CONCAT(FORMAT(RIBPS/POWER(1024,pw),2),SUBSTR(\u2018 KMGT',pw+1,1)) ",(0,s.jsx)(t.code,{children:"Usage"})," FROM ( SELECT ENGINE,RIBPS,FLOOR(LOG(RIBPS)/LOG(1024)) pw FROM [\u2026]"]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var s=n(7294);const o={},a=s.createContext(o);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);
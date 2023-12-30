"use strict";(self.webpackChunknoodles=self.webpackChunknoodles||[]).push([[2687],{8563:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=t(5893),s=t(1151);const o={slug:"show-mysql-engine-tablespace-size",title:"Show MySQL engine tablespace size"},i=void 0,r={permalink:"/blog/show-mysql-engine-tablespace-size",source:"@site/blog/2014-10-22-show-mysql-engine-tablespace-size.mdx",title:"Show MySQL engine tablespace size",description:"I have been trying to migrate everything in MySQL to use INNODB (death to all MyISAM), but was unsure of how much data was being stored in each storage engine. You can use the following query to give a total usage for all engines: SELECT ENGINE, CONCAT(FORMAT(RIBPS/POWER(1024,pw),2),SUBSTR(&#8216; KMGT',pw+1,1)) Usage FROM ( SELECT ENGINE,RIBPS,FLOOR(LOG(RIBPS)/LOG(1024)) pw FROM [&hellip;]",date:"2014-10-22T00:00:00.000Z",formattedDate:"October 22, 2014",tags:[],readingTime:.74,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"show-mysql-engine-tablespace-size",title:"Show MySQL engine tablespace size"},unlisted:!1,prevItem:{title:"Speed up Jenkins phpcs (PHP CodeSniffer)",permalink:"/blog/speed-up-jenkins-phpcs-php-codesniffer"},nextItem:{title:"Speeding up percona xtrabackup restores",permalink:"/blog/speeding-up-percona-xtrabackup-restores"}},l={authorsImageUrls:[]},c=[];function u(e){const n={code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["I have been trying to migrate everything in MySQL to use INNODB (death to all MyISAM), but was unsure of how much data was being stored in each storage engine. You can use the following query to give a total usage for all engines: SELECT ENGINE, CONCAT(FORMAT(RIBPS/POWER(1024,pw),2),SUBSTR(\u2018 KMGT',pw+1,1)) ",(0,a.jsx)(n.code,{children:"Usage"})," FROM ( SELECT ENGINE,RIBPS,FLOOR(LOG(RIBPS)/LOG(1024)) pw FROM [\u2026]"]}),"\n",(0,a.jsx)(n.p,{children:"I have been trying to migrate everything in MySQL to use INNODB (death to all MyISAM), but was unsure of how much data was being stored in each storage engine. You can use the following query to give a total usage for all engines:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"SELECT ENGINE, CONCAT(FORMAT(RIBPS/POWER(1024,pw),2),SUBSTR(' KMGT',pw+1,1)) `Usage` FROM\n(\n    SELECT ENGINE,RIBPS,FLOOR(LOG(RIBPS)/LOG(1024)) pw\n    FROM\n    (\n        SELECT ENGINE, SUM(data_length+index_length) RIBPS\n\t\tFROM information_schema.tables AAA\n\t\tGROUP BY ENGINE\n\t\tHAVING RIBPS != 0\n    ) AA\n) A;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now I have that information I can adjust my INNODB buffers and reduce MyISAM caches"})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var a=t(7294);const s={},o=a.createContext(s);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);
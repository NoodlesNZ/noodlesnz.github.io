"use strict";(self.webpackChunknoodles=self.webpackChunknoodles||[]).push([[6974],{6408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(5893),r=n(1151);const a={slug:"speeding-up-percona-xtrabackup-restores",title:"Speeding up percona xtrabackup restores"},s=void 0,i={permalink:"/blog/speeding-up-percona-xtrabackup-restores",source:"@site/blog/2014-10-10-speeding-up-percona-xtrabackup-restores.mdx",title:"Speeding up percona xtrabackup restores",description:"I started playing around with using xtrabackup (or more specifically innobackupex) to backup MySQL. Most of our tables are now innodb so it didn't make sense to keep dumping everything out via mysqldump. I had a clone of our master db server in our virtual environment that I was trying to restore the backup onto, [&hellip;]",date:"2014-10-10T00:00:00.000Z",formattedDate:"October 10, 2014",tags:[],readingTime:1.05,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"speeding-up-percona-xtrabackup-restores",title:"Speeding up percona xtrabackup restores"},unlisted:!1,prevItem:{title:"Show MySQL engine tablespace size",permalink:"/blog/show-mysql-engine-tablespace-size"},nextItem:{title:"SSL by default",permalink:"/blog/ssl-by-default"}},u={authorsImageUrls:[]},p=[];function c(e){return(0,o.jsx)("p",{children:"I started playing around with using xtrabackup (or more specifically innobackupex) to backup MySQL. Most of our tables are now innodb so it didn't make sense to keep dumping everything out via mysqldump. I had a clone of our master db server in our virtual environment that I was trying to restore the backup onto, [\u2026]"})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c()}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var o=n(7294);const r={},a=o.createContext(r);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);
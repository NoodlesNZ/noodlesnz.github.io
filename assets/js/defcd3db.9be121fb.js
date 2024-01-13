"use strict";(self.webpackChunknoodles=self.webpackChunknoodles||[]).push([[8648],{4339:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var a=t(5893),o=t(1151);const r={slug:"innodb-recovery",title:"Innodb Recovery"},i=void 0,d={permalink:"/blog/innodb-recovery",source:"@site/blog/2013-01-15-innodb-recovery.mdx",title:"Innodb Recovery",description:"I recently had a database server fail during a large DELETE query, this caused some problems with innodb's ibdata1. The index of this data file was different to what MySQL expected. As this wasn't one of our main servers I hadn't tuned innodb and all the innodb data was in the single ibdata1 file. [&hellip;]",date:"2013-01-15T00:00:00.000Z",formattedDate:"January 15, 2013",tags:[],readingTime:1.08,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"innodb-recovery",title:"Innodb Recovery"},unlisted:!1,prevItem:{title:"Vbulletin 4.2.x and PHP 5.4",permalink:"/blog/vbulletin-4-2-x-and-php-5-4"},nextItem:{title:"Copy changed files from CVS repository",permalink:"/blog/copy-changed-files-from-cvs-repository"}},s={authorsImageUrls:[]},l=[];function c(e){const n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{children:"I recently had a database server fail during a large DELETE query, this caused some problems with innodb's ibdata1. The index of this data file was different to what MySQL expected. As this wasn't one of our main servers I hadn't tuned innodb and all the innodb data was in the single ibdata1 file. [\u2026]"}),"\n",(0,a.jsx)(n.p,{children:"I recently had a database server fail during a large DELETE query, this caused some problems with innodb's ibdata1. The index of this data file was different to what MySQL expected. As this wasn't one of our main servers I hadn't tuned innodb and all the innodb data was in the single ibdata1 file. The only way for me to start MySQL was to add this to my.cnf:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"innodb_force_recovery = 4  \n"})}),"\n",(0,a.jsx)(n.p,{children:"This forced MySQL to ignore all innodb errors and I used mysqldump to extract all the data from the innodb tables. Innodb tables were found using the following query:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"SELECT table_schema, table_name\nFROM INFORMATION_SCHEMA.TABLES\nWHERE engine = 'innodb';  \n"})}),"\n",(0,a.jsx)(n.p,{children:"I stopped MySQL server again, removed the innodb_force_recovery, deleted the ibdata1 file and tuned innodb. I also made sure I added this to my.cnf:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"innodb_file_per_table = 1\ninnodb_log_files_in_group\xa0\xa0\xa0\xa0\xa0 = 2  \n"})}),"\n",(0,a.jsx)(n.p,{children:"All tables were loaded from the mysqldump backup files and everything is all happy again."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>i});var a=t(7294);const o={},r=a.createContext(o);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);
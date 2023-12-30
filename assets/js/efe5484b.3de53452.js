"use strict";(self.webpackChunknoodles=self.webpackChunknoodles||[]).push([[8073],{1692:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=s(5893),n=s(1151);const a={slug:"deny-access-to-website-but-allow-robots-txt",title:"Deny access to website, but allow robots.txt"},i=void 0,r={permalink:"/blog/deny-access-to-website-but-allow-robots-txt",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2011-02-15-deny-access-to-website-but-allow-robots-txt.mdx",source:"@site/blog/2011-02-15-deny-access-to-website-but-allow-robots-txt.mdx",title:"Deny access to website, but allow robots.txt",description:"I had a problem where Googlebot was indexing a development site, so we locked it down using apache basic http auth. Now Googlebot was being served with a 401 when accessing the site, but because it had no stored robots.txt it was persistently trying to crawl the site. Using the following allows anyone to access [&hellip;]",date:"2011-02-15T00:00:00.000Z",formattedDate:"February 15, 2011",tags:[],readingTime:.85,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"deny-access-to-website-but-allow-robots-txt",title:"Deny access to website, but allow robots.txt"},unlisted:!1,prevItem:{title:"Change CVS path",permalink:"/blog/change-cvs-path"},nextItem:{title:"unzip 6 for RHEL 5.6",permalink:"/blog/unzip-6-for-rhel-5-6"}},l={authorsImageUrls:[]},c=[];function b(e){const t={p:"p",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{children:"I had a problem where Googlebot was indexing a development site, so we locked it down using apache basic http auth. Now Googlebot was being served with a 401 when accessing the site, but because it had no stored robots.txt it was persistently trying to crawl the site. Using the following allows anyone to access [\u2026]"}),"\n",(0,o.jsx)(t.p,{children:"I had a problem where Googlebot was indexing a development site, so we locked it down using apache basic http auth. Now Googlebot was being served with a 401 when accessing the site, but because it had no stored robots.txt it was persistently trying to crawl the site."}),"\n",(0,o.jsxs)(t.p,{children:["Using the following allows anyone to access robots.txt but denies access to the rest of the site:",(0,o.jsx)("br",{}),'\n<Directory "/home/username/www">',(0,o.jsx)("br",{}),"\nAuthUserFile /home/username/.htpasswd",(0,o.jsx)("br",{}),'\nAuthName "Client Access"',(0,o.jsx)("br",{}),"\nAuthType Basic",(0,o.jsx)("br",{}),"\nrequire valid-use"]}),"\n",(0,o.jsxs)(t.p,{children:['<Files "robots.txt">',(0,o.jsx)("br",{}),"\nAuthType Basic",(0,o.jsx)("br",{}),"\nsatisfy any",(0,o.jsx)("br",{}),"\n</Files>",(0,o.jsx)("br",{}),"\n</Directory>"]}),"\n",(0,o.jsx)(t.p,{children:"Eventually Googlebot will get the hint and stop indexing the site and we can remove existing content using webmaster tools."})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>i});var o=s(7294);const n={},a=o.createContext(n);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);
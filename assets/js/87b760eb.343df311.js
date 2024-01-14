"use strict";(self.webpackChunknoodles=self.webpackChunknoodles||[]).push([[6425],{4434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var o=n(5893),a=n(1151);const s={title:"Creating Access ODBC datasource under Windows 7 (64bit)"},r=void 0,c={permalink:"/blog/2010/06/01/creating-access-odbc-datasource-under-windows-7-64bit",source:"@site/blog/2010-06-01-creating-access-odbc-datasource-under-windows-7-64bit.mdx",title:"Creating Access ODBC datasource under Windows 7 (64bit)",description:"I had to create an ODBC datasource for an access database on my Windows 7 machine and for some reason the *.mdb driver doesn't show up in the control panel ODBC administrator.",date:"2010-06-01T00:00:00.000Z",formattedDate:"June 1, 2010",tags:[],readingTime:.385,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Creating Access ODBC datasource under Windows 7 (64bit)"},unlisted:!1,prevItem:{title:"Auckland Frost Dates",permalink:"/blog/2010/07/05/auckland-frost-dates"},nextItem:{title:"Google DNS and OpenDNS vs CDNs",permalink:"/blog/2009/12/04/google-dns-and-opendns-vs-cdns"}},d={authorsImageUrls:[]},i=[];function u(e){const t={p:"p",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"I had to create an ODBC datasource for an access database on my Windows 7 machine and for some reason the *.mdb driver doesn't show up in the control panel ODBC administrator."}),"\n",(0,o.jsx)(t.p,{children:"After much swearing and google-ing I found the solution."}),"\n",(0,o.jsx)(t.p,{children:"In C:\\windows\\sysWOW64 there is an executable called odbcad32.exe. You need to run this exe as administrator to gain access to all the ODBC drivers that come with Microsoft Office, etc."}),"\n",(0,o.jsx)(t.p,{children:"Thanks Microsoft for another fine product!"})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var o=n(7294);const a={},s=o.createContext(a);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);
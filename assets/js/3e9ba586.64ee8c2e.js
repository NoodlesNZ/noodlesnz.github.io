"use strict";(self.webpackChunknoodles=self.webpackChunknoodles||[]).push([[7017],{1682:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=t(5893),s=t(1151);const a={title:"Google DNS and OpenDNS vs CDNs"},r=void 0,i={permalink:"/blog/2009/12/04/google-dns-and-opendns-vs-cdns",source:"@site/blog/2009-12-04-google-dns-and-opendns-vs-cdns.mdx",title:"Google DNS and OpenDNS vs CDNs",description:"With more and more people moving towards using a global DNS system (like Google DNS and OpenDNS) the speed advantages of a CDN may be cancelled out.",date:"2009-12-04T00:00:00.000Z",formattedDate:"December 4, 2009",tags:[],readingTime:.62,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Google DNS and OpenDNS vs CDNs"},unlisted:!1,prevItem:{title:"Creating Access ODBC datasource under Windows 7 (64bit)",permalink:"/blog/2010/06/01/creating-access-odbc-datasource-under-windows-7-64bit"},nextItem:{title:"Windows XP 32bit drivers for Dell Studio XPS 435MT",permalink:"/blog/2009/06/10/windows-xp-32bit-drivers-for-dell-studio-xps-435mt"}},l={authorsImageUrls:[]},d=[];function c(e){const o={p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"With more and more people moving towards using a global DNS system (like Google DNS and OpenDNS) the speed advantages of a CDN may be cancelled out."}),"\n",(0,n.jsx)(o.p,{children:"Most of the major CDNs use geotargeting based on where the DNS is being resolved from. For example Facebook's CDN solution (using Akamai) resolves static.ak.fbcdn.net to 210.55.501.200, a 5ms response time. Using Google's public DNS server (8.8.8.8) the same domain resolves to 72.246.43.42, 72.246.43.32, a 200ms response time."}),"\n",(0,n.jsx)(o.p,{children:"So while using Google's DNS/OpenDNS may save a few ms while resolving a domain, it may slow down a site by putting the CDN pops further away from end users. Until CDN's can work with these public DNS providers the internet may become slower for those using these services."})]})}function m(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,o,t)=>{t.d(o,{Z:()=>i,a:()=>r});var n=t(7294);const s={},a=n.createContext(s);function r(e){const o=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:o},e.children)}}}]);
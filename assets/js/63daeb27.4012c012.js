"use strict";(self.webpackChunknoodles=self.webpackChunknoodles||[]).push([[729],{9457:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var s=t(5893),n=t(1151);const o={slug:"apr-utils-1-4-1-rpmbuild-error-seg-fault",title:"apr-utils 1.4.1 rpmbuild error (seg fault)"},a=void 0,i={permalink:"/blog/apr-utils-1-4-1-rpmbuild-error-seg-fault",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2012-02-22-apr-utils-1-4-1-rpmbuild-error-seg-fault.mdx",source:"@site/blog/2012-02-22-apr-utils-1-4-1-rpmbuild-error-seg-fault.mdx",title:"apr-utils 1.4.1 rpmbuild error (seg fault)",description:"When trying to build an rpm for apr-utils on my CentOS 6.2 box I got a nasty error when the rpm was running test [&hellip;]",date:"2012-02-22T00:00:00.000Z",formattedDate:"February 22, 2012",tags:[],readingTime:.555,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"apr-utils-1-4-1-rpmbuild-error-seg-fault",title:"apr-utils 1.4.1 rpmbuild error (seg fault)"},unlisted:!1,prevItem:{title:"Copy changed files from CVS repository",permalink:"/blog/copy-changed-files-from-cvs-repository"},nextItem:{title:"RPM macros",permalink:"/blog/rpm-macros"}},l={authorsImageUrls:[]},u=[];function p(e){const r={a:"a",code:"code",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:"When trying to build an rpm for apr-utils on my CentOS 6.2 box I got a nasty error when the rpm was running test [\u2026]"}),"\n",(0,s.jsx)(r.p,{children:"When trying to build an rpm for apr-utils on my CentOS 6.2 box I got a nasty error when the rpm was running test:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:'testmemcache : |/bin/sh: line 2: 14322 Segmentation fault LD_LIBRARY_PATH="`echo "../crypto/.libs:../dbm/.lib s:../dbd/.libs:../ldap/.libs:$LD_LIBRARY_PATH" | sed -e \'s/::*$//\'`" ./$prog\nPrograms failed: testall\nmake: *** [check] Error 139\n+ exit 1\nerror: Bad exit status from /var/tmp/rpm-tmp.OQddG8 (%check)  \n'})}),"\n",(0,s.jsxs)(r.p,{children:["This relates to this bug: ",(0,s.jsx)("a",{href:"https://issues.apache.org/bugzilla/show_bug.cgi?id=52705",children:(0,s.jsx)(r.a,{href:"https://issues.apache.org/bugzilla/show_bug.cgi?id=52705",children:"https://issues.apache.org/bugzilla/show_bug.cgi?id=52705"})})]}),"\n",(0,s.jsxs)(r.p,{children:["Thanks to Peter Poeml for releasing a patch for this, which I've put into an updated ",(0,s.jsx)("a",{href:"http://www.noodles.net.nz/files/apr-util.spec",children:"apr-util.spec"})]})]})}function c(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>a});var s=t(7294);const n={},o=s.createContext(n);function a(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);
"use strict";(self.webpackChunknoodles=self.webpackChunknoodles||[]).push([[729],{9457:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(5893),s=r(1151);const o={slug:"apr-utils-1-4-1-rpmbuild-error-seg-fault",title:"apr-utils 1.4.1 rpmbuild error (seg fault)"},a=void 0,i={permalink:"/blog/apr-utils-1-4-1-rpmbuild-error-seg-fault",source:"@site/blog/2012-02-22-apr-utils-1-4-1-rpmbuild-error-seg-fault.mdx",title:"apr-utils 1.4.1 rpmbuild error (seg fault)",description:"When trying to build an rpm for apr-utils on my CentOS 6.2 box I got a nasty error when the rpm was running test [&hellip;]",date:"2012-02-22T00:00:00.000Z",formattedDate:"February 22, 2012",tags:[],readingTime:.555,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"apr-utils-1-4-1-rpmbuild-error-seg-fault",title:"apr-utils 1.4.1 rpmbuild error (seg fault)"},unlisted:!1,prevItem:{title:"Copy changed files from CVS repository",permalink:"/blog/copy-changed-files-from-cvs-repository"},nextItem:{title:"RPM macros",permalink:"/blog/rpm-macros"}},l={authorsImageUrls:[]},p=[];function u(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:"When trying to build an rpm for apr-utils on my CentOS 6.2 box I got a nasty error when the rpm was running test [\u2026]"}),"\n",(0,n.jsx)(t.p,{children:"When trying to build an rpm for apr-utils on my CentOS 6.2 box I got a nasty error when the rpm was running test:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'testmemcache : |/bin/sh: line 2: 14322 Segmentation fault LD_LIBRARY_PATH="`echo "../crypto/.libs:../dbm/.lib s:../dbd/.libs:../ldap/.libs:$LD_LIBRARY_PATH" | sed -e \'s/::*$//\'`" ./$prog\nPrograms failed: testall\nmake: *** [check] Error 139\n+ exit 1\nerror: Bad exit status from /var/tmp/rpm-tmp.OQddG8 (%check)  \n'})}),"\n",(0,n.jsxs)(t.p,{children:["This relates to this bug: ",(0,n.jsx)("a",{href:"https://issues.apache.org/bugzilla/show_bug.cgi?id=52705",children:(0,n.jsx)(t.a,{href:"https://issues.apache.org/bugzilla/show_bug.cgi?id=52705",children:"https://issues.apache.org/bugzilla/show_bug.cgi?id=52705"})})]}),"\n",(0,n.jsxs)(t.p,{children:["Thanks to Peter Poeml for releasing a patch for this, which I've put into an updated ",(0,n.jsx)("a",{href:"http://www.noodles.net.nz/files/apr-util.spec",children:"apr-util.spec"})]})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>a});var n=r(7294);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunknoodles=self.webpackChunknoodles||[]).push([[3874],{7031:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=o(5893),r=o(1151);const i={title:"Copy changed files from CVS repository"},s=void 0,c={permalink:"/blog/2012/03/14/copy-changed-files-from-cvs-repository",source:"@site/blog/2012-03-14-copy-changed-files-from-cvs-repository.mdx",title:"Copy changed files from CVS repository",description:"While converting my cvs repositories to git I needed to copy all the changed files from my working directory into a temp directory and then into my git working dir. This was the solution that I came up with:",date:"2012-03-14T00:00:00.000Z",formattedDate:"March 14, 2012",tags:[],readingTime:.595,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Copy changed files from CVS repository"},unlisted:!1,prevItem:{title:"Innodb Recovery",permalink:"/blog/2013/01/15/innodb-recovery"},nextItem:{title:"apr-utils 1.4.1 rpmbuild error (seg fault)",permalink:"/blog/2012/02/22/apr-utils-1-4-1-rpmbuild-error-seg-fault"}},a={authorsImageUrls:[]},l=[];function d(e){const t={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"While converting my cvs repositories to git I needed to copy all the changed files from my working directory into a temp directory and then into my git working dir. This was the solution that I came up with:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"cvs -qn update -d 2>/dev/null | grep '^[M|\\?|P] ' | awk '{print $2}' > files.list while read file; do cp -r -f --parents \"$file\" /tmp/dest/; done < files.list\n"})}),"\n",(0,n.jsx)(t.p,{children:"Basically, cvs -qn update -d does a mock update (doesn't change files), piped to grep to only list the changed files, use awk to exclude the M, P, ? etc, output to a file."}),"\n",(0,n.jsx)(t.p,{children:"Loop over the lines in the new file using the cp --parents to preserve directory structure"})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>c,a:()=>s});var n=o(7294);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
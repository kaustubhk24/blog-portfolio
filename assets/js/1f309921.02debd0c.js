"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[17807],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,g=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},62858:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"Program to creating a thread to print the even numbers from 10 to 20 by using Thread Class",date:new Date("2021-05-22T01:53:18.000Z"),authors:"kaustubh",slug:"/program-to-creating-a-thread-to-print-the-even-numbers-from-10-to-20-by-using-thread-class/"},i=void 0,s={permalink:"/blog/program-to-creating-a-thread-to-print-the-even-numbers-from-10-to-20-by-using-thread-class/",source:"@site/blog/2021-05-22-program-to-creating-a-thread-to-print-the-even-numbers-from-10-to-20-by-using-thread-class.md",title:"Program to creating a thread to print the even numbers from 10 to 20 by using Thread Class",description:"Que > Program to creating a thread to print the even numbers from 10 to 20 by using Thread Class",date:"2021-05-22T01:53:18.000Z",formattedDate:"May 22, 2021",tags:[],readingTime:.37,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Program to creating a thread to print the even numbers from 10 to 20 by using Thread Class",date:"2021-05-22T01:53:18.000Z",authors:"kaustubh",slug:"/program-to-creating-a-thread-to-print-the-even-numbers-from-10-to-20-by-using-thread-class/"},prevItem:{title:"Program to create following threads",permalink:"/blog/program-to-create-following-threads/"},nextItem:{title:"Program to demonstrate the use if else block in Try Except block",permalink:"/blog/program-to-demonstrate-the-use-if-else-block-in-try-except-block/"}},l={authorsImageUrls:[void 0]},u=[],c={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Que > Program to creating a thread to print the even numbers from 10 to 20 by using Thread Class"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="file.py"',title:'"file.py"'},'from _thread import *\nimport threading as thread\ndef even(name,timer):\n for i in range(10,20):\n if i%2==0:\n print(name+" : "+str(i))\ntry:\n thread.start_new_thread( even, ("Thread", 2, ) )\nexcept Exception as e:\n print ("Error: ",e)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Output"',title:'"Output"'},"Thread : 10\nThread : 12\nThread : 14\nThread : 16\nThread : 18\n")))}m.isMDXComponent=!0}}]);
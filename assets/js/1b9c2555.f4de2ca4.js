"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[90804],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(f,u(u({ref:t},s),{},{components:r})):n.createElement(f,u({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,u[1]=i;for(var p=2;p<o;p++)u[p]=r[p];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},54292:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Program to create following threads",date:new Date("2021-05-22T01:54:51.000Z"),authors:"kaustubh",slug:"/program-to-create-following-threads/"},u=void 0,i={permalink:"/blog/program-to-create-following-threads/",source:"@site/blog/2021-05-22-program-to-create-following-threads.md",title:"Program to create following threads",description:"*  First thread to print the square of a number entered by user,",date:"2021-05-22T01:54:51.000Z",formattedDate:"May 22, 2021",tags:[],readingTime:.565,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Program to create following threads",date:"2021-05-22T01:54:51.000Z",authors:"kaustubh",slug:"/program-to-create-following-threads/"},prevItem:{title:"Adding Words",permalink:"/blog/adding-words/"},nextItem:{title:"Program to creating a thread to print the even numbers from 10 to 20 by using Thread Class",permalink:"/blog/program-to-creating-a-thread-to-print-the-even-numbers-from-10-to-20-by-using-thread-class/"}},l={authorsImageUrls:[void 0]},p=[],s={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First thread to print the square of a number entered by user,"),(0,a.kt)("li",{parentName:"ul"},"Second thread to print the cube of a number and show the result. Use start and join operations.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="file.py"',title:'"file.py"'},'from _thread import *\nimport threading as thread\ndef sqr(name,num):\n print(name+" : ",num*num)\ndef cube(name,num):\n print(name+" : ",num*num*num)\ntry:\n no=int(input("enter number : "))\n thread.start_new_thread( sqr, ("\\nThread - 1: Square:", no ) )\n thread.start_new_thread( cube, ("\\nThread - 2: Cube :", no ) )\n #join()\n numTuple = [\'1\', \'2\', \'3\', \'4\']\n print("#".join(numTuple))\nexcept Exception as e:\n print ("Error: ",e)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Output"',title:'"Output"'},"enter number : 9\n1#2#3#4\nThread - 1: Square: : 81\nThread - 2: Cube : : 729\n\n")))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[77264],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):A(A({},t),e)),r},g=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),p=l(r),c=a,h=p["".concat(s,".").concat(c)]||p[c]||u[c]||i;return r?n.createElement(h,A(A({ref:t},g),{},{components:r})):n.createElement(h,A({ref:t},g))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,A=new Array(i);A[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,A[1]=o;for(var l=2;l<i;l++)A[l]=r[l];return n.createElement.apply(null,A)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},82180:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>A,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={title:"Program to reads an image, display image and then represents the image in array",date:new Date("2021-05-31T07:51:21.000Z"),authors:"kaustubh",slug:"/program-to-reads-an-image-display-image-and-then-represents-the-image-in-array/"},A=void 0,o={permalink:"/blog/program-to-reads-an-image-display-image-and-then-represents-the-image-in-array/",source:"@site/blog/2021-05-31-program-to-reads-an-image-display-image-and-then-represents-the-image-in-array.md",title:"Program to reads an image, display image and then represents the image in array",description:"Code >",date:"2021-05-31T07:51:21.000Z",formattedDate:"May 31, 2021",tags:[],readingTime:.72,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Program to reads an image, display image and then represents the image in array",date:"2021-05-31T07:51:21.000Z",authors:"kaustubh",slug:"/program-to-reads-an-image-display-image-and-then-represents-the-image-in-array/"},prevItem:{title:"Read Age From File and check vote eligibility",permalink:"/blog/read-age-from-file-and-check-vote-eligibility/"},nextItem:{title:"Program to Plot List of X, Y Coordinates in Matplotlib",permalink:"/blog/program-to-plot-list-of-x-y-coordinates-in-matplotlib/"}},s={authorsImageUrls:[void 0]},l=[],g={toc:l},p="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," Code > ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="file.py"',title:'"file.py"'},"import matplotlib.pyplot as plt\nimport matplotlib.image as img\ntestImage = img.imread('https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2021/05/python-programming-language-1.png')\nplt.imshow(testImage)\nprint(testImage)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," Output > ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Output"',title:'"Output"'},"[[[1. 1. 1.]\n  [1. 1. 1.]\n  [1. 1. 1.]\n  ...\n  [1. 1. 1.]\n  [1. 1. 1.]\n  [1. 1. 1.]]\n [[1. 1. 1.]\n  [1. 1. 1.]\n  [1. 1. 1.]\n  ...\n  [1. 1. 1.]\n  [1. 1. 1.]\n  [1. 1. 1.]]\n [[1. 1. 1.]\n  [1. 1. 1.]\n  [1. 1. 1.]\n  ...\n  [1. 1. 1.]\n  [1. 1. 1.]\n  [1. 1. 1.]]\n ...\n [[1. 1. 1.]\n  [1. 1. 1.]\n  [1. 1. 1.]\n  ...\n  [1. 1. 1.]\n  [1. 1. 1.]\n  [1. 1. 1.]]\n [[1. 1. 1.]\n  [1. 1. 1.]\n  [1. 1. 1.]\n  ...\n  [1. 1. 1.]\n  [1. 1. 1.]\n  [1. 1. 1.]]\n [[1. 1. 1.]\n  [1. 1. 1.]\n  [1. 1. 1.]\n  ...\n  [1. 1. 1.]\n  [1. 1. 1.]\n  [1. 1. 1.]]]\n\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Python",src:r(56746).Z,title:"Python",width:"264",height:"252"})))}u.isMDXComponent=!0},56746:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);
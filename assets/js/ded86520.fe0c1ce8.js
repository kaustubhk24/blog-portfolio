"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[43669],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),f=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=f(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=f(r),s=a,g=p["".concat(u,".").concat(s)]||p[s]||m[s]||o;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var f=2;f<o;f++)i[f]=r[f];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},29557:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>f});var n=r(87462),a=(r(67294),r(3905));const o={title:"Program for factorial of Number",date:new Date("2020-08-16T11:56:00.000Z"),authors:"kaustubh",slug:"/program-for-factorial-of-number/"},i=void 0,c={permalink:"/blog/program-for-factorial-of-number/",source:"@site/blog/2020-08-16-program-for-factorial-of-number.md",title:"Program for factorial of Number",description:"",date:"2020-08-16T11:56:00.000Z",formattedDate:"August 16, 2020",tags:[],readingTime:.17,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Program for factorial of Number",date:"2020-08-16T11:56:00.000Z",authors:"kaustubh",slug:"/program-for-factorial-of-number/"},prevItem:{title:"Program to Find Length of String in CPP",permalink:"/blog/program-to-find-length-of-string-in-cpp/"},nextItem:{title:"Program for Insertion Sort in CPP",permalink:"/blog/program-for-insertion-sort-in-cpp/"}},u={authorsImageUrls:[void 0]},f=[],l={toc:f},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="factorial.cpp"',title:'"factorial.cpp"'},'#include<iostream>\nusing namespace std;\nint find_factorial(int);\nint main()\n{\n   int num, fact;\n   \n   cout<<"\\nEnter any integer number:";\n  cin>>num;\n \n  \n   fact =find_factorial(num);\n \n\n  cout<<fact;\n   return 0;\n}\nint find_factorial(int n)\n{\n  \n   if(n==0)\n      return(1);\n \n  \n   return(n*find_factorial(n-1));\n}\n')))}m.isMDXComponent=!0}}]);
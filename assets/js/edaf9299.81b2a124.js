"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[73499],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,b=p["".concat(u,".").concat(m)]||p[m]||s[m]||o;return r?n.createElement(b,i(i({ref:t},f),{},{components:r})):n.createElement(b,i({ref:t},f))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},38291:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"Program to Find Factorial of Number",date:new Date("2020-08-16T11:24:00.000Z"),authors:"kaustubh",slug:"/program-to-find-factorial-of-number/"},i=void 0,c={permalink:"/blog/program-to-find-factorial-of-number/",source:"@site/blog/2020-08-16-program-to-find-factorial-of-number.md",title:"Program to Find Factorial of Number",description:"",date:"2020-08-16T11:24:00.000Z",formattedDate:"August 16, 2020",tags:[],readingTime:.245,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Program to Find Factorial of Number",date:"2020-08-16T11:24:00.000Z",authors:"kaustubh",slug:"/program-to-find-factorial-of-number/"},prevItem:{title:"Program to Find Fibonacci Series Upto Given Number",permalink:"/blog/program-to-find-fibonacci-series-upto-given-number/"},nextItem:{title:"How to Create AWS Account?",permalink:"/blog/how-to-create-aws-account/"}},u={authorsImageUrls:[void 0]},l=[],f={toc:l},p="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Factorial.cpp"',title:'"Factorial.cpp"'},'#include   \nusing namespace std;  \nint main()  \n{  \n int a,n;  \n cout<<"Enter Number ";  \n cin>>n;  \n /*if(n==0)  \n {  \n cout<<"The Factorial is 1";  \n }  \n else if(n<0)  \n {  \n cout<<"Factorial of negative numbers can\'t find";  \n }  \n else*/ if(n>0)  \n {  \n int fact=1;  \n for(int i=1;i<=n;i++)  \n {  \n fact=fact*i;  \n   \n }  \n cout<<"The factorial is:";  \n cout<   \n   \n }  \n   \n}  \n  \n  \n\n')))}s.isMDXComponent=!0}}]);
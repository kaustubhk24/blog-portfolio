"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[93973],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),h=a,m=p["".concat(u,".").concat(h)]||p[h]||f[h]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},79480:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"Celsius to Fahrenheit",date:new Date("2021-02-15T07:37:58.000Z"),authors:"kaustubh",slug:"/celsius-to-fahrenheit/"},i=void 0,l={permalink:"/blog/celsius-to-fahrenheit/",source:"@site/blog/2021-02-15-celsius-to-fahrenheit.md",title:"Celsius to Fahrenheit",description:"You are making a Celsius to Fahrenheit converter.",date:"2021-02-15T07:37:58.000Z",formattedDate:"February 15, 2021",tags:[],readingTime:.23,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Celsius to Fahrenheit",date:"2021-02-15T07:37:58.000Z",authors:"kaustubh",slug:"/celsius-to-fahrenheit/"},prevItem:{title:"Book Titles",permalink:"/blog/book-titles/"},nextItem:{title:"Search Engine",permalink:"/blog/search-engine/"}},u={authorsImageUrls:[void 0]},c=[],s={toc:c},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You are making a Celsius to Fahrenheit converter.\nWrite a function to take the Celsius value as an argument and return the corresponding Fahrenheit value. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sample input"),"\n36 "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sample Output"),"\n96.8"),(0,a.kt)("p",null,"Program"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="file.py"',title:'"file.py"'},"celsius = int(input())\ndef conv(c):\n return c*(9/5)+32\nfahrenheit = conv(celsius)\nprint(fahrenheit)\n")))}f.isMDXComponent=!0}}]);
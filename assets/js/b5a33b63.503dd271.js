"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[6171],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,g=u["".concat(p,".").concat(f)]||u[f]||c[f]||o;return r?n.createElement(g,i(i({ref:t},m),{},{components:r})):n.createElement(g,i({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},54859:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"Write a program to implement aggregation",date:new Date("2021-04-24T06:23:50.000Z"),authors:"kaustubh",slug:"/write-a-program-to-implement-aggregation/"},i=void 0,l={permalink:"/blog/write-a-program-to-implement-aggregation/",source:"@site/blog/2021-04-24-write-a-program-to-implement-aggregation.md",title:"Write a program to implement aggregation",description:"output:",date:"2021-04-24T06:23:50.000Z",formattedDate:"April 24, 2021",tags:[],readingTime:.305,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Write a program to implement aggregation",date:"2021-04-24T06:23:50.000Z",authors:"kaustubh",slug:"/write-a-program-to-implement-aggregation/"},prevItem:{title:"Write a program to implement abstraction.",permalink:"/blog/write-a-program-to-implement-abstraction/"},nextItem:{title:"Write a program to implement composition",permalink:"/blog/write-a-program-to-implement-composition/"}},p={authorsImageUrls:[void 0]},s=[],m={toc:s},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="file.py"',title:'"file.py"'},'class Heart:\n def __init__(self, heartValves):\n self.heartValves = heartValves\n def display(self):\n return self.heartValves\nclass Person:\n def __init__(self, fname, heartValves):\n self.fname = fname\n self.heartValves = heartValves # Aggregation\n def display(self):\n print("First Name: ", self.fname)\n print("No of Healthy Valves: ", hv.display())\nhv = Heart(4)\np = Person("ABC", hv)\np.display()\n')),(0,a.kt)("p",null,"output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Output"',title:'"Output"'},"\nFirst Name: ABC\nNo of Healthy Valves: 4\n")))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[96420],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),b=i,f=u["".concat(c,".").concat(b)]||u[b]||m[b]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},35068:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={title:"Write a VB Program to display Fibonacci series up to given term (Accept term using input Box )and display Fibonacci series on to the form.",date:new Date("2020-08-28T14:15:00.000Z"),authors:"kaustubh",slug:"/write-a-vb-program-to-display-fibonacci-series-up-to-given-term-accept-term-using-input-box-and-display-fibonacci-series-on-to-the-form/"},a=void 0,s={permalink:"/blog/write-a-vb-program-to-display-fibonacci-series-up-to-given-term-accept-term-using-input-box-and-display-fibonacci-series-on-to-the-form/",source:"@site/blog/2020-08-28-t1 (21).md",title:"Write a VB Program to display Fibonacci series up to given term (Accept term using input Box )and display Fibonacci series on to the form.",description:"",date:"2020-08-28T14:15:00.000Z",formattedDate:"August 28, 2020",tags:[],readingTime:.255,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Write a VB Program to display Fibonacci series up to given term (Accept term using input Box )and display Fibonacci series on to the form.",date:"2020-08-28T14:15:00.000Z",authors:"kaustubh",slug:"/write-a-vb-program-to-display-fibonacci-series-up-to-given-term-accept-term-using-input-box-and-display-fibonacci-series-on-to-the-form/"},prevItem:{title:"Design an application in VB which has a Drivelistbox, Dirlistbox, Filelistbox control.           The form contains the following command buttons:             All drives: Display all drives in computer (including network drives)             All subdirectories: Display all subfolders of the currently selected directory.  All files : Display a popup menu which contains the following options: a. All document files                             b   All bitmaps c    All files           On selection of option, display the specified type.",permalink:"/blog/design-an-application-in-vb-which-has-a-drivelistbox-dirlistbox-filelistbox-control-the-form-contains-the-following-command-buttons-all-drives-display-all-drives-in-computer/"},nextItem:{title:"Write a VB Program to display the reverse of a given number using function. (Accept number through textbox and display result using message box",permalink:"/blog/write-a-vb-program-to-display-the-reverse-of-a-given-number-using-function-accept-number-through-textbox-and-display-result-using-message-box/"}},c={authorsImageUrls:[void 0]},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'},'  \nPrivate Sub Command1_Click()  \n    n = inputBox("Enter The Term")  \n    a = 0  \n    b = 1  \n    Print "Fibonacci Series is : "  \n    Print a  \n    Print b  \n    For i = 1 To n - 2  \n        c = a + b  \n        a = b  \n        b = c  \n        Print c  \n    Next  \nEnd Sub  \n  \n  \n\n')))}m.isMDXComponent=!0}}]);
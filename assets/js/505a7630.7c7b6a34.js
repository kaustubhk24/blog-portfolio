"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[33018],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),f=n,m=s["".concat(l,".").concat(f)]||s[f]||h[f]||o;return r?a.createElement(m,c(c({ref:t},p),{},{components:r})):a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},92886:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={title:'Write a java program to replace all the "d" characters with "f" characters. input :  The quick brown fox jumps over the lazy dog ',date:new Date("2020-08-28T15:57:00.000Z"),authors:"kaustubh",slug:"/write-a-java-program-to-replace-all-the-d-characters-with-f-characters-input-the-quick-brown-fox-jumps-over-the-lazy-dog/"},c=void 0,i={permalink:"/blog/write-a-java-program-to-replace-all-the-d-characters-with-f-characters-input-the-quick-brown-fox-jumps-over-the-lazy-dog/",source:"@site/blog/2020-08-28-write-a-java-program-to-replace-all-the-d-characters-with-f-characters-input-the-quick-brown-fox-jumps-over-the-lazy-dog.md",title:'Write a java program to replace all the "d" characters with "f" characters. input :  The quick brown fox jumps over the lazy dog ',description:"Output:",date:"2020-08-28T15:57:00.000Z",formattedDate:"August 28, 2020",tags:[],readingTime:.375,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:'Write a java program to replace all the "d" characters with "f" characters. input :  The quick brown fox jumps over the lazy dog ',date:"2020-08-28T15:57:00.000Z",authors:"kaustubh",slug:"/write-a-java-program-to-replace-all-the-d-characters-with-f-characters-input-the-quick-brown-fox-jumps-over-the-lazy-dog/"},prevItem:{title:"Write a java program to find the second smallest element in an array.",permalink:"/blog/write-a-java-program-to-find-the-second-smallest-element-in-an-array/"},nextItem:{title:"Write a java program to find the duplicate values of an array of integer values.",permalink:"/blog/write-a-java-program-to-find-the-duplicate-values-of-an-array-of-integer-values/"}},l={authorsImageUrls:[void 0]},u=[],p={toc:u},s="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="replace.java"',title:'"replace.java"'},'  \n public class replace {  \n      \n   public static void main(String[] args)  \n    {  \n        String str = "The quick brown fox jumps over the lazy dog.";  \n  \n        String new_str = str.replaceAll("d", "f");  \n         \n        System.out.println("Original string: " + str);  \n        System.out.println("New String: " + new_str);  \n    }  \n}  \n  \n\n')),(0,n.kt)("p",null,"Output: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  \nLENOVO@DESKTOP-U7S0DTI MINGW64 /e/H-drive/Practicals/MCA/SEM III/JAVA/Practicals/assignment no1  \n$ java replace_chars.java  \nOriginal string: The quick brown fox jumps over the lazy dog.  \nNew String: The quick brown fox jumps over the lazy fog.  \n  \n  \n\n")))}h.isMDXComponent=!0}}]);
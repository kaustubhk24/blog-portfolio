"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[47665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={title:"User Audio Playlist using HTML",date:new Date("2020-08-16T12:24:00.000Z"),authors:"kaustubh",slug:"/user-audio-playlist-using-html/"},a=void 0,l={permalink:"/blog/user-audio-playlist-using-html/",source:"@site/blog/2020-08-16-user-audio-playlist-using-html.md",title:"User Audio Playlist using HTML",description:"",date:"2020-08-16T12:24:00.000Z",formattedDate:"August 16, 2020",tags:[],readingTime:.265,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"User Audio Playlist using HTML",date:"2020-08-16T12:24:00.000Z",authors:"kaustubh",slug:"/user-audio-playlist-using-html/"},prevItem:{title:"Video Forward-Reverse Controls in HTML",permalink:"/blog/video-forward-reverse-controls-in-html/"},nextItem:{title:"Create User Registration form using HTML",permalink:"/blog/create-user-registration-form-using-html/"}},u={authorsImageUrls:[void 0]},c=[],s={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<!DOCTYPE html>\n<html>\n    <head>\n        <title>Songs Lists</title>\n    </head>\n    <body>\n      <center>\n       <div>\n      <audio id="myAd" controls>\n         <source id="firstAd" src="file.mp3" type="audio/mpeg">\n      </audio><br></div>\n           </center>\n            <H3>Music Play-list!</H3>\n              <ol>\n                    <li onClick="chgAudio(\'1.mp3)">1.mp3</li>\n                    <li onClick="chgAudio(\'2.mp3\')">2.mp3</li>\n                    <li onclick="chgAudio(\'3.mp3\')">3.mp3</li>\n                    <li onclick="chgAudio(\'4.mp3\')">4.mp3</li>\n                    <li onclick="chgAudio(\'5.mp3\')">5.mp3</li>\n             </ol>\n                <script type="text/javascript">\n                  var ad = document.getElementById("myAd");\n                   function chgAudio(path)\n                  {\n                      document.getElementById("firstAd").src=path;\n                      document.getElementById("myAd").load();\n                      document.getElementById("myAd").currentTime=0;\n                      document.getElementById("myAd").play();\n                  }\n               <\/script>\n        </body>\n</html> \n')))}m.isMDXComponent=!0}}]);
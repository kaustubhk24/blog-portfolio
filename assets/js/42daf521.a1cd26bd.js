"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[18010],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,b=p["".concat(u,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},15091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"Write VB program to design following form",date:new Date("2020-08-28T14:41:00.000Z"),authors:"kaustubh",slug:"/write-vb-program-to-design-following-form/"},i=void 0,l={permalink:"/blog/write-vb-program-to-design-following-form/",source:"@site/blog/2020-08-28-t1 (9).md",title:"Write VB program to design following form",description:"User will select color from option button and style from check boxes that should apply to text in text boxes. When user press on Display button that image should be displayed in the picture box.",date:"2020-08-28T14:41:00.000Z",formattedDate:"August 28, 2020",tags:[],readingTime:.94,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Write VB program to design following form",date:"2020-08-28T14:41:00.000Z",authors:"kaustubh",slug:"/write-vb-program-to-design-following-form/"},prevItem:{title:"Write a VB program to load picture box at a runtime",permalink:"/blog/write-a-vb-program-to-load-picture-box-at-a-runtime/"},nextItem:{title:"Write a menu driven program in VB for i. Addition ii. Subtraction iii. Multiplication iv. Division",permalink:"/blog/write-a-menu-driven-program-in-vb-for-i-addition-ii-subtraction-iii-multiplication-iv-division/"}},u={authorsImageUrls:[void 0]},c=[],s={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://1.bp.blogspot.com/-O5Xd__AGE84/X0kXemr1PWI/AAAAAAAAfgw/fe9-18WRlnsga64NDQPt8TuP8NsMhL5ZQCLcBGAsYHQ/s314/1.png"},(0,o.kt)("img",{parentName:"a",src:"https://1.bp.blogspot.com/-O5Xd__AGE84/X0kXemr1PWI/AAAAAAAAfgw/fe9-18WRlnsga64NDQPt8TuP8NsMhL5ZQCLcBGAsYHQ/s400/1.png",alt:null}))),(0,o.kt)("p",null,"User will select color from option button and style from check boxes that should apply to text in text boxes. When user press on Display button that image should be displayed in the picture box. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'},'  \nPrivate Sub Command1_Click()  \n    If Option1(0).Value Then  \n        Text1.ForeColor = vbRed  \n        Text2.ForeColor = vbRed  \n    ElseIf Option1(1).Value Then  \n        Text1.ForeColor = vbGreen  \n        Text2.ForeColor = vbGreen  \n    ElseIf Option1(2).Value Then  \n        Text1.ForeColor = vbBlue  \n        Text2.ForeColor = vbBlue  \n    Else  \n        Text1.ForeColor = vbBlack  \n        Text2.ForeColor = vbBlack  \n    End If  \n    If Check1.Value = 1 Then  \n        Text1.Font.Bold = True  \n        Text2.Font.Bold = True  \n    Else  \n        Text1.Font.Bold = False  \n        Text2.Font.Bold = False  \n    End If  \n    If Check2.Value = 1 Then  \n        Text1.Font.Italic = True  \n        Text2.Font.Italic = True  \n    Else  \n        Text1.Font.Italic = False  \n        Text2.Font.Italic = False  \n    End If  \n    If Check3.Value = 1 Then  \n        Text1.Font.Underline = True  \n        Text2.Font.Underline = True  \n    Else  \n        Text1.Font.Underline = False  \n        Text2.Font.Underline = False  \n    End If  \nEnd Sub  \n  \nPrivate Sub Command2_Click()  \nText1.Text = ""  \nText2.Text = ""  \nCheck1.Value = 0  \nCheck2.Value = 0  \nCheck3.Value = 0  \nFor i = 0 To 3  \nOption1(i).Value = False  \nNext  \nPicture1.Picture = LoadPicture("")  \n  \nEnd Sub  \n  \nPrivate Sub Command3_Click()  \nUnload Me  \nEnd Sub  \n  \nPrivate Sub Image1_Click()  \nPicture1.Picture = Image1.Picture  \nEnd Sub                            \n  \n  \n  \n\n')))}m.isMDXComponent=!0}}]);
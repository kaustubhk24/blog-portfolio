"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[77381],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(r),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(m,u(u({ref:t},s),{},{components:r})):n.createElement(m,u({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,u[1]=i;for(var c=2;c<a;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},74576:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"Write a VB program for currency conversion. The program should input the amount in any currency and the output should be displayed in the desire currency as selected by the user. An input form should accept all the currency rates. The various currencies are rupee, dollar, pound and euro. (Use textbox control for input and to display output also)",date:new Date("2020-08-28T14:25:00.000Z"),authors:"kaustubh",slug:"/write-a-vb-program-for-currency-conversion-the-program-should-input-the-amount-in-any-currency-and-the-output-should-be-displayed-in-the-desire-currency-as-selected-by-the-user/"},u=void 0,i={permalink:"/blog/write-a-vb-program-for-currency-conversion-the-program-should-input-the-amount-in-any-currency-and-the-output-should-be-displayed-in-the-desire-currency-as-selected-by-the-user/",source:"@site/blog/2020-08-28-t1 (46).md",title:"Write a VB program for currency conversion. The program should input the amount in any currency and the output should be displayed in the desire currency as selected by the user. An input form should accept all the currency rates. The various currencies are rupee, dollar, pound and euro. (Use textbox control for input and to display output also)",description:"",date:"2020-08-28T14:25:00.000Z",formattedDate:"August 28, 2020",tags:[],readingTime:.5,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Write a VB program for currency conversion. The program should input the amount in any currency and the output should be displayed in the desire currency as selected by the user. An input form should accept all the currency rates. The various currencies are rupee, dollar, pound and euro. (Use textbox control for input and to display output also)",date:"2020-08-28T14:25:00.000Z",authors:"kaustubh",slug:"/write-a-vb-program-for-currency-conversion-the-program-should-input-the-amount-in-any-currency-and-the-output-should-be-displayed-in-the-desire-currency-as-selected-by-the-user/"},prevItem:{title:"Write a VB Program to accept the number from the user in text box and display multiplication table of that number into the list box.",permalink:"/blog/write-a-vb-program-to-accept-the-number-from-the-user-in-text-box-and-display-multiplication-table-of-that-number-into-the-list-box/"},nextItem:{title:"Write a VB program to convert temperature in Celsius to Fahrenheit and result should display into message box. (Accept input through input box)",permalink:"/blog/write-a-vb-program-to-convert-temperature-in-celsius-to-fahrenheit-and-result-should-display-into-message-box-accept-input-through-input-box/"}},l={authorsImageUrls:[void 0]},c=[],s={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'},'Dim pound As Integer  \n  \nDim dollar As Integer  \nDim euro As Integer  \n  \nPrivate Sub cmdConvert_Click()  \n      \n    If Option1.Value = True Then  \n        Label2.Caption = "Dollar"  \n        Text2.Text = Val(Text1.Text) / dollar  \n    ElseIf Option2.Value = True Then  \n        Label2.Caption = "Pound"  \n        Text2.Text = Val(Text1.Text) / pound  \n    ElseIf Option3.Value = True Then  \n        Label2.Caption = "Euro"  \n        Text2.Text = Val(Text1.Text) / euro  \n    Else  \n        MsgBox ("Select Conversion type")  \n    End If  \n      \nEnd Sub  \nPrivate Sub cmdRates_Click()  \n      \n    pound = Val(inputBox("Enter Rate of pound"))  \n    dollar = Val(inputBox("Enter Rate of Dollar"))  \n    euro = Val(inputBox("Enter Rate of euro"))  \n    cmdConvert.Enabled = True  \n      \nEnd Sub  \nPrivate Sub Form_Load()  \n    cmdConvert.Enabled = False  \nEnd Sub  \n  \n  \n  \n\n')))}d.isMDXComponent=!0}}]);
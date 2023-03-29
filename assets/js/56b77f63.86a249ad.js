"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[27821],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),f=a,g=c["".concat(l,".").concat(f)]||c[f]||m[f]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},95983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Create java AWT GUI Program to Swap strings",date:new Date("2020-09-14T05:06:00.000Z"),authors:"kaustubh",slug:"/create-java-awt-gui-program-to-swap-strings/"},i=void 0,s={permalink:"/blog/create-java-awt-gui-program-to-swap-strings/",source:"@site/blog/2020-09-14-create-java-awt-gui-program-to-swap-strings.md",title:"Create java AWT GUI Program to Swap strings",description:"Output:",date:"2020-09-14T05:06:00.000Z",formattedDate:"September 14, 2020",tags:[],readingTime:.33,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"Create java AWT GUI Program to Swap strings",date:"2020-09-14T05:06:00.000Z",authors:"kaustubh",slug:"/create-java-awt-gui-program-to-swap-strings/"},prevItem:{title:"Write an implementation of hash tables from scratch. Define the following methods: get(key), put( key, value ), remove(key), containsKey (key), and size()",permalink:"/blog/write-an-implementation-of-hash-tables-from-scratch-define-the-following-methods-getkey-put-key-value-removekey-containskey-key-and-size/"},nextItem:{title:"Write a java program to get the number of elements in a hash set.",permalink:"/blog/write-a-java-program-to-get-the-number-of-elements-in-a-hash-set/"}},l={authorsImageUrls:[void 0]},p=[],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  \nimport java.awt.*;  \nimport java.awt.event.*;  \n  \n  \n  \n  \npublic class me {  \n  \n    public static void main(String[] args) {  \n  \n        Frame f=new Frame("Swap");  \n  \n        Label l=new Label("Enter First Number");  \n        Label l1=new Label("Enter Second Number");  \n  \n        TextField t1=new TextField(10);  \n        TextField t2=new TextField(10);  \n  \n        Button b=new Button("Swap");  \n  \n  \n        b.addActionListener(new ActionListener()  \n        {  \n  \n  \n            public void actionPerformed(ActionEvent ae)  \n            {  \n                String tmp=t1.getText();  \n                t1.setText(t2.getText());  \n                t2.setText(tmp);  \n  \n  \n            }  \n  \n        }        );  \n  \n  \n        f.add(l);  \n        f.add(l1);  \n  \n           f.add(t2);  \n           f.add(t1);  \n  \n           f.add(b);  \n  \n  \n   f.setLayout(new FlowLayout());  \n   f.setSize(300,300);  \n   f.setVisible(true);  \n  \n          \n  \n  \n  \n    }  \n}  \n  \n  \n\n')),(0,a.kt)("p",null,"Output: "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/09/Screenshot-2Bfrom-2B2020-09-14-2B10-33-44.png"},(0,a.kt)("img",{parentName:"a",src:"https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/09/Screenshot-2Bfrom-2B2020-09-14-2B10-33-44-300x169.png",alt:null}))))}m.isMDXComponent=!0}}]);
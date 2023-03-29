"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[103],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),k=a,g=c["".concat(p,".").concat(k)]||c[k]||m[k]||r;return n?o.createElement(g,i(i({ref:t},u),{},{components:n})):o.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},23050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={title:"How To Make Setup File in VB.NET?",date:new Date("2021-01-07T06:50:47.000Z"),authors:"kaustubh",slug:"/how-to-make-setup-file-in-vb-net/"},i=void 0,l={permalink:"/blog/how-to-make-setup-file-in-vb-net/",source:"@site/blog/2020-08-28-t1 (2).md",title:"How To Make Setup File in VB.NET?",description:"If you have created Project and Now you want to distribute project to your customer or friends, you need to Create setup.msi or setup.exe file, So they can install it on there Windows computer and use same.",date:"2021-01-07T06:50:47.000Z",formattedDate:"January 7, 2021",tags:[],readingTime:2.945,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"How To Make Setup File in VB.NET?",date:"2021-01-07T06:50:47.000Z",authors:"kaustubh",slug:"/how-to-make-setup-file-in-vb-net/"},prevItem:{title:"How To Make Fastest Blog in WordPress 5 Easy Steps ?",permalink:"/blog/how-to-make-fastest-blog-in-wordpress/"},nextItem:{title:"Mini Project : Tic Tac Toe Game in VB.NET With FREE Source Code",permalink:"/blog/mini-project-tic-tac-toe-game-in-vb-net-with-free-source-code/"}},p={authorsImageUrls:[void 0]},s=[{value:"Installing Required Extension",id:"installing-required-extension",level:2},{value:"Creating Installer",id:"creating-installer",level:2},{value:"Locating Setup Files",id:"locating-setup-files",level:2},{value:"Installing Setup File",id:"installing-setup-file",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you have created Project and Now you want to distribute project to your customer or friends, you need to Create ",(0,a.kt)("strong",{parentName:"p"},"setup.msi")," or ",(0,a.kt)("strong",{parentName:"p"},"setup.exe")," file, So they can install it on there Windows computer and use same."),(0,a.kt)("p",null,"Now in this tutorial , we are making setup file of our recent Project ",(0,a.kt)("a",{parentName:"p",href:"https://blog.kaustubh.codes/mini-project-tic-tac-toe-game-in-vb-net-with-free-source-code/"},"Tic Tac Toe"),", If you don't have your project and Just want to follow this tutorial , you can download this project for free, ",(0,a.kt)("a",{parentName:"p",href:"https://blog.kaustubh.codes/mini-project-tic-tac-toe-game-in-vb-net-with-free-source-code/"},"Download Now"),"."),(0,a.kt)("h2",{id:"installing-required-extension"},"Installing Required Extension"),(0,a.kt)("p",null,"Open Visual Studio ( We are using 2019 for this tutorial ) , Click on ",(0,a.kt)("strong",{parentName:"p"},"Extension")," and in ",(0,a.kt)("strong",{parentName:"p"},"Search Box")," type ",(0,a.kt)("strong",{parentName:"p"},"Installer"),", You will see option ",(0,a.kt)("strong",{parentName:"p"},"Microsoft Visual Studio Installer Projects")," , click on ",(0,a.kt)("strong",{parentName:"p"},"Download")," button Next to it.\n",(0,a.kt)("img",{parentName:"p",src:"https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2021/01/image-10.png",alt:"How To Make Setup File in VB.NET"})," "),(0,a.kt)("p",null,"You need to Close All Visual Studio windows to start installtion. Once installation is completed you can Open Visual Studio Again."),(0,a.kt)("h2",{id:"creating-installer"},"Creating Installer"),(0,a.kt)("p",null,"Click on ",(0,a.kt)("strong",{parentName:"p"},"View")," tab and Select ",(0,a.kt)("strong",{parentName:"p"},"Solution explorer"),", In ",(0,a.kt)("strong",{parentName:"p"},"Solution Explorer")," right ",(0,a.kt)("strong",{parentName:"p"},"click")," on solution name , Click on ",(0,a.kt)("strong",{parentName:"p"},"Add -> New Projec"),"t from Next window select ",(0,a.kt)("strong",{parentName:"p"},"Setup Project"),",\n",(0,a.kt)("img",{parentName:"p",src:"https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2021/01/image-12.png",alt:"How To Make Setup File in VB.NET"})," "),(0,a.kt)("p",null,"Now Click on ",(0,a.kt)("strong",{parentName:"p"},"Next")," Button, Enter Setup Project Name and Click on ",(0,a.kt)("strong",{parentName:"p"},"Create")," Button."),(0,a.kt)("p",null,"You will see file System, as below\n",(0,a.kt)("img",{parentName:"p",src:"https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2021/01/image-13.png",alt:"How To Make Setup File in VB.NET"})," "),(0,a.kt)("p",null,"You need Open Application Folder First and and right Click on Right window, select ",(0,a.kt)("strong",{parentName:"p"},"Add -> Project Output")," and select Option ",(0,a.kt)("strong",{parentName:"p"},"Primary Output"),"."),(0,a.kt)("p",null,"Now click ",(0,a.kt)("strong",{parentName:"p"},"ok")," button, next you need to you right click on ",(0,a.kt)("strong",{parentName:"p"},"primary output")," option we just added and select ",(0,a.kt)("strong",{parentName:"p"},"create shortcut to primary output and project name now"),", by right clicking on shortcut you can change name of shortcut. we need to create ",(0,a.kt)("strong",{parentName:"p"},"two")," shortcuts one for user's desktop and another for user's program menu,\n",(0,a.kt)("img",{parentName:"p",src:"https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2021/01/image-14.png",alt:"How To Make Setup File in VB.NET"})," "),(0,a.kt)("p",null,"When we create shortcut we can right click on shortcut select ",(0,a.kt)("strong",{parentName:"p"},"properties")," select ",(0,a.kt)("strong",{parentName:"p"},"icon")," and set .ico as icon file. now move that shortcuts to user's desktop and user's programs menu."),(0,a.kt)("p",null,"Download image .ico file for icon"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2021/01/tic-tac-toe-1.png"},"Download Free")," "),(0,a.kt)("p",null,"Right click on solution name and select option ",(0,a.kt)("strong",{parentName:"p"},"rebuild")," it will start rebuilding you may see "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1.\nrebuild all 1 success 1 failed or 0 skipped\nor\n2.\nrebuild all 1 success 0 failed or 1 skipped\nor\n3.\nrebuild all 2 success 0 failed or 0 skipped\n")),(0,a.kt)("p",null,"If you see option ",(0,a.kt)("strong",{parentName:"p"},"3 rebuild all 2 success 0 failed or 0 skipped"),", then your setup.msi and setup.exe is ready,"),(0,a.kt)("p",null,"but if not , then must be ",(0,a.kt)("strong",{parentName:"p"},"error ,message"),"or ",(0,a.kt)("strong",{parentName:"p"},"warning"),", here we have warning, see image below,\n",(0,a.kt)("img",{parentName:"p",src:"https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2021/01/image-15.png",alt:"How To Make Setup File in VB.NET"})," "),(0,a.kt)("p",null,"After fixing this message / warning, click rebuild again. & Done , You just created ",(0,a.kt)("strong",{parentName:"p"},"Setup.msi")," and ",(0,a.kt)("strong",{parentName:"p"},"Setup.exe")),(0,a.kt)("h2",{id:"locating-setup-files"},"Locating Setup Files"),(0,a.kt)("p",null,"To locate the file Open ",(0,a.kt)("strong",{parentName:"p"},"Solution Explorer")," -> Right click on ",(0,a.kt)("strong",{parentName:"p"},"Setup Project")," -> and See ",(0,a.kt)("strong",{parentName:"p"},"Open in Explorer")," , Check debug folder there you can see your setup files.\n",(0,a.kt)("img",{parentName:"p",src:"https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2021/01/image-16.png",alt:"How To Make Setup File in VB.NET"})," "),(0,a.kt)("p",null,"If you are NOT able to access this option , Open ",(0,a.kt)("strong",{parentName:"p"},"Windows File Explorer")," and Open Path below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb",metastring:'title="file.vb"',title:'"file.vb"'},"C:\\Users\\username\\source\\repos\\Tic Tac Toe\\Setup1\\Debug\n{select your username and project name correctly.}\n")),(0,a.kt)("h2",{id:"installing-setup-file"},"Installing Setup File"),(0,a.kt)("p",null,"Installing setup is very easy , Double click on ",(0,a.kt)("strong",{parentName:"p"},"setup.msi")," or ",(0,a.kt)("strong",{parentName:"p"},"setup.exe")," and just click next,next and done."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2021/01/image-17.png",alt:"How To Make Setup File in VB.NET"})," "),(0,a.kt)("p",null,"or You can install easily by Right Clicking Setup in solution explorer and select install button, that's it."),(0,a.kt)("p",null,"Congrats! You just created setup. If you have any issues just comment here, we will reply asap."))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkkaustubh=self.webpackChunkkaustubh||[]).push([[75671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(n),p=a,m=f["".concat(i,".").concat(p)]||f[p]||d[p]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[f]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},70739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"function to search and display details of student whose rollno is '11' from the binary file student.dat having structure [rollno, name, class and fees].",date:new Date("2021-03-21T06:16:21.000Z"),authors:"kaustubh",slug:"/function-to-search-and-display-details-of-student-whose-rollno-is-11-from-the-binary-file-student-dat-having-structure-rollno-name-class-and-fees/"},l=void 0,s={permalink:"/blog/function-to-search-and-display-details-of-student-whose-rollno-is-11-from-the-binary-file-student-dat-having-structure-rollno-name-class-and-fees/",source:"@site/blog/2021-03-21-function-to-search-and-display-details-of-student-whose-rollno-is-11-from-the-binary-file-student-dat-having-structure-rollno-name-class-and-fees.md",title:"function to search and display details of student whose rollno is '11' from the binary file student.dat having structure [rollno, name, class and fees].",description:"output:",date:"2021-03-21T06:16:21.000Z",formattedDate:"March 21, 2021",tags:[],readingTime:.41,hasTruncateMarker:!1,authors:[{name:"Kaustubh Kulkarni",title:"ServiceNow Developer",url:"https://github.com/kaustubhk24",imageURL:"https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200",key:"kaustubh"}],frontMatter:{title:"function to search and display details of student whose rollno is '11' from the binary file student.dat having structure [rollno, name, class and fees].",date:"2021-03-21T06:16:21.000Z",authors:"kaustubh",slug:"/function-to-search-and-display-details-of-student-whose-rollno-is-11-from-the-binary-file-student-dat-having-structure-rollno-name-class-and-fees/"},prevItem:{title:"Program to read line number 4 from the following file",permalink:"/blog/program-to-read-line-number-4-from-the-following-file/"},nextItem:{title:'function in Python to count words in a text file those are ending with alphabet "e"',permalink:"/blog/python-to-count-words-in-a-text-file-those-are-ending-with-alphabet-e/"}},i={authorsImageUrls:[void 0]},u=[],c={toc:u},f="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="file.py"',title:'"file.py"'},"import pickle\nfilename=\"student.dat\"\nf=open(filename,\"wb\")\ndata=[\n {\n 'rollno':11,\n 'name':'RM',\n 'class':'MCA',\n 'fees':54554\n },\n {\n 'rollno':12,\n 'name':'USER1',\n 'class':'MCA',\n 'fees':54554\n },\n {\n 'rollno':13,\n 'name':'USER2',\n 'class':'MCA',\n 'fees':54554\n }\n]\npickle.dump(data,f)\nf.close()\nprint(\"success\")\ninfile = open(filename,'rb')\ndictlist = pickle.load(infile)\ninfile.close()\nfor dict1 in dictlist:\n if (dict1[\"rollno\"]==11):\n print(\"Student found with Roll No 11 , Name : {} | Class : {} | Fees {}\".format((dict1[\"name\"]),(dict1[\"class\"]),(dict1[\"fees\"])))\n")),(0,a.kt)("p",null,"output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Output"',title:'"Output"'},"success\nStudent found with Roll No 11 , Name : RM | Class : MCA | Fees 54554\n")))}d.isMDXComponent=!0}}]);
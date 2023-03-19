---
title: Write HTML and CSS code to design a web page. Divide the browser screen into two frames. The first frame will display the heading. The second frame contains a menu consisting of hyperlinks. Clicking on any one of these hyperlinks will display related information in a new page as shown below. Use Internal style sheet with appropriate attributes to display information of each frame
date: 2020-08-28T15:47:00+00:00
authors: kaustubh

slug: /write-html-and-css-code-to-design-a-web-page-divide-the-browser-screen-into-two-frames-the-first-frame-will-display-the-heading-the-second-frame-contains-a-menu-consisting-of-hyperlinks-clicking-o/
---
Write HTML and CSS code to design a web page. Divide the browser screen into two frames. The first frame will display the heading. The second frame contains a menu consisting of hyperlinks. Clicking on any one of these hyperlinks will display related information in a new page as shown below. Use Internal style sheet with appropriate attributes to display information of each frame 


[![](https://1.bp.blogspot.com/-mVPacr4VnGQ/X0klCW9Y9DI/AAAAAAAAfhY/d2WRJv0SOJs26cgaJPdeF7M5FJWdpfX3wCLcBGAsYHQ/s400/1.png)](https://1.bp.blogspot.com/-mVPacr4VnGQ/X0klCW9Y9DI/AAAAAAAAfhY/d2WRJv0SOJs26cgaJPdeF7M5FJWdpfX3wCLcBGAsYHQ/s735/1.png)


[![](https://1.bp.blogspot.com/-L4l47fCcAuA/X0klCRT9ZYI/AAAAAAAAfhc/O9ejLyPmGNoGa1cllgOdqhKWQwldO1LAwCLcBGAsYHQ/s400/2.png)](https://1.bp.blogspot.com/-L4l47fCcAuA/X0klCRT9ZYI/AAAAAAAAfhc/O9ejLyPmGNoGa1cllgOdqhKWQwldO1LAwCLcBGAsYHQ/s734/2.png)


```html title="file1.html" 
<html>
<head><title></title></head>
<body>
<table border="1">
<caption style="color:red";font-family:arial>F.Y.B.C.A. Exam Time Table </font></caption>
<tr>
<th>Date</th>
<th>Time</th>
<th>Subject Code</th>
<th>Subject Name</th>
</tr>
<tr>
<td>10/10/2018</td>
<td>10:30am-01:30pm</td>
<td>101</td>
<td>PPA</td>
</tr>
<tr>
<td>13/10/2018</td>
<td>10:30am-01:30pm</td>
<td>102</td>
<td>MOE</td>
</tr>
<tr>
<td>14/10/2018</td>
<td>10:30am-01:30pm</td>
<td>103</td>
<td>BC</td>
</tr>
<tr>
<td>15/10/2018</td>
<td>10:30am-01:30pm</td>
<td>104</td>
<td>PM</td>
</tr>
<tr>
<td>16/10/2018</td>
<td>10:30am-01:30pm</td>
<td>105</td>
<td>FA</td>
</tr>
</table>
</body>
</html>

```
|Date|Time|Subject Code|Subject Name|
|--- |--- |--- |--- |
|10/10/2018|10:30am-01:30pm|101|PPA|
|13/10/2018|10:30am-01:30pm|102|MOE|
|14/10/2018|10:30am-01:30pm|103|BC|
|15/10/2018|10:30am-01:30pm|104|PM|
|16/10/2018|10:30am-01:30pm|105|FA|



```html title="file2.html" 
<html>
<head><title></title></head>
<body>
<table border="1">
<caption style="color:blue";font-family:arial> S.Y.B.C.A. Exam Time Table </caption>
<tr>
<th>Date</th>
<th>Time</th>
<th>Subject Code</th>
<th>Subject Name</th>
</tr>
<tr>
<td>10/10/2018</td>
<td>10:30am-01:30pm</td>
<td>201</td>
<td>RD</td>
</tr>
<tr>
<td>13/10/2018</td>
<td>10:30am-01:30pm</td>
<td>202</td>
<td>DS</td>
</tr>
<tr>
<td>14/10/2018</td>
<td>10:30am-01:30pm</td>
<td>203</td>
<td>OS</td>
</tr>
<tr>
<td>15/10/2018</td>
<td>10:30am-01:30pm</td>
<td>204</td>
<td>BM</td>
</tr>
<tr>
<td>16/10/2018</td>
<td>10:30am-01:30pm</td>
<td>205</td>
<td>SE</td>
</tr>
</table>
</body>
</html>

```

|Date|Time|Subject Code|Subject Name|
|--- |--- |--- |--- |
|10/10/2018|10:30am-01:30pm|201|RD|
|13/10/2018|10:30am-01:30pm|202|DS|
|14/10/2018|10:30am-01:30pm|203|OS|
|15/10/2018|10:30am-01:30pm|204|BM|
|16/10/2018|10:30am-01:30pm|205|SE|

```html title="file3.html" 
<html>
<head><title> </title></head>
<body>
<a href="file1.html">FYBCA</a><br>
<a href="file2.html">SYBCA</a>
</body>
</html>
```
```html title="file4.html" 

<html>
<head>
</head>
<body>
<h1 style="color:red";font-family:arial><b>COMPUTER SCIENCE <br>DEPARTMENT </b></h1>
</body>
</html>
```
```html title="file5.html" 

<html>
<frameset cols="30%,70%">
<frame src=comp_sci.html>
<frame src=menu.html>
</frameset>
</html>
```
Output: 


[![](https://1.bp.blogspot.com/-JES1P4VuIjY/X0km9jYO-hI/AAAAAAAAfhs/kvKD7PVuOEA64RRTHvndl0P1iaplnVkqgCLcBGAsYHQ/s400/1.png)](https://1.bp.blogspot.com/-JES1P4VuIjY/X0km9jYO-hI/AAAAAAAAfhs/kvKD7PVuOEA64RRTHvndl0P1iaplnVkqgCLcBGAsYHQ/s734/1.png)

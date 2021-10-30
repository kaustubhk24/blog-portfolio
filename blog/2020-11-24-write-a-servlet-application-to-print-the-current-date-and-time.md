---
title: Write A Servlet Application To Print The Current Date And Time.
date: 2020-11-24T10:51:35+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-servlet-application-to-print-the-current-date-and-time/
---
Article has been moved to
Create New [Dynamic Web Project](https://en.wikipedia.org/wiki/Dynamic_web_page), Create below files and copy paste this content.

Make sure your file structure looks like image below.
![](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/11/image-22.png) 


```html title="index.html"
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Current Date and Time</title>
</head>
<body>
<form action="Date" method="get">
<input type="submit" value="Click Here">
</form>
</body>
</html>
```


```java title="Date1.java"
package com.practical;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
public class Date1 extends HttpServlet{
 public void doGet(HttpServletRequest req,HttpServletResponse res) throws IOException
 {
 Date today=new Date();
 PrintWriter out =res.getWriter();
 out.println("Today is :"+today.toString());
 }
}

```


```xml title="web.xml"
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://xmlns.jcp.org/xml/ns/javaee" xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd" id="WebApp_ID" version="4.0">
<servlet>
<servlet-name>abc</servlet-name>
<servlet-class>com.practical.Date1</servlet-class>
</servlet>
<servlet-mapping>
<servlet-name>abc</servlet-name>
<url-pattern>/Date</url-pattern>
</servlet-mapping>
</web-app>


```

Output:

![](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/11/image-23.png) 
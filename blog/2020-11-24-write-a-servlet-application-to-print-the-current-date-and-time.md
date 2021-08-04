---
title: Write A Servlet Application To Print The Current Date And Time.
date: 2020-11-24T10:51:35+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-servlet-application-to-print-the-current-date-and-time/
---
Create New [Dynamic Web Project](https://en.wikipedia.org/wiki/Dynamic_web_page), Create below files and copy paste this content.

Make sure your file structure looks like image below.
![](http://blog.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-22.png) 

**index.html**

```vb title="file.vb"




Current Date and Time







```

**Date1.java**

```vb title="file.vb"
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

**web.xml**

```vb title="file.vb"
xml version="1.0" encoding="UTF-8"?


abc
com.practical.Date1


abc
/Date



```

Output:
![](http://blog.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-23.png) 
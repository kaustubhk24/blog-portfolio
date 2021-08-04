---
title: 'Create a Registration form using JSP & Servlet which includes following'
date: 2020-11-23T17:11:33+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /create-a-registration-form-using-jsp-servlet-which-includes-following/
---
 

Create a Registration form using JSP & Servlet which includes following 
field:

 1. First Name
 2. Last Name
 3. Username
 4. Password
 5. Address
 6. Contact Number 
 After filling all these details we have submit button, on click of that button all 
 the details will be stored. 
 Now, create one more JSP page, where all details will be verified and after 
 verification it will display one WELCOME message.

```vb title="file.vb"
register.jsp
```

```vb title="file.vb"
<%@ page language="java" contentType="text/html;
charset=ISO-8859-1"
 pageEncoding="ISO-8859-1"%>




Registration Page


Registration form
=================



 First Name:    

 Last Name:    

 Address:   

 Contact number:   

 Email:   

 User Name:   

 Password:   

  





```

```vb title="file.vb"
register_valid.java
```

```vb title="file.vb"
package javaAssignmen10;
import java.io.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
@WebServlet("/registervalid")//used as an annotation(To
substitute the use of web.xml)
public class Register_Valid extends HttpServlet {
private static final long serialVersionUID = 1L;
protected void doPost(HttpServletRequest req,
HttpServletResponse res) throws ServletException,
IOException {
res.setContentType("text/html");
PrintWriter out=res.getWriter();
String first_name = req.getParameter("fsNm");
String last_name = req.getParameter("lsNm");
String username = req.getParameter("usNm");
String password = req.getParameter("pass");
String address = req.getParameter("add");
String contact = req.getParameter("mob");
String email = req.getParameter("eml");
if(first_name.isEmpty() || last_name.isEmpty() ||
username.isEmpty() ||
 password.isEmpty() || address.isEmpty() ||
contact.isEmpty() || email.isEmpty())
{
res.sendRedirect("Register.jsp");//if one or
more fields are blank it will reopen register page
}
else
{
HttpSession
session=req.getSession();//creating a session
session.setAttribute("firstName",
first_name);//setting an attribute to session
//using JDBC to store database
try {
Connection
con=DriverManager.getConnection("jdbc:mysql://localhost:33
0/assignment","root","psk180898");
String insert_data="Insert into
Userdata values(?,?,?,?,?,?,?)";
PreparedStatement
ps=con.prepareStatement(insert_data);
ps.setString(1,first_name);
ps.setString(2,last_name);
ps.setString(3,username);
ps.setString(4,password);
ps.setString(5,address);
ps.setString(6,contact);
ps.setString(7,email);
ps.executeUpdate();
}
catch(Exception e)
{
e.printStackTrace();
}
res.sendRedirect("Welcome.jsp");//open
welcome page after success
}
}
}

```

```vb title="file.vb"
welcome.jsp
```

```vb title="file.vb"
<%@ page language="java" contentType="text/html;
charset=ISO-8859-1"
 pageEncoding="ISO-8859-1"%>




Welcome


<%
 if(session.getAttribute("firstName")==null)
{
response.sendRedirect("Register.jsp");//This is to prevent
users from directly accessing webpage
}
%>
Welcome ${firstName}
====================


### You have successfully registered for
Competition!




```
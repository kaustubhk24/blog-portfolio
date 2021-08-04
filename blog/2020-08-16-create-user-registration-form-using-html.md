---
title: Create User Registration form using HTML
slug: /create-user-registration-form-using-html/
date: 2020-08-16T12:21:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200
---


```html title="register.html"
<!DOCTYPE html>
<html>
<head>
    <title>User Registration Form</title>
</head>
<body>
    <h1 align="center"> User Registration form</h1>
    <form id="Registration" title="User Registration form">
        <table align="center" title="User Registration form">
            <tr>
                <td>
                      First Name 
                </td>
                <td>
                    <input type="text" name="FirstName" style="width: 200px" pattern="[A-Za-z]{3,10}">
                </td>
            </tr>
             <tr>
                <td>
                     Last Name  
                </td>
                <td>
                    <input type="text" name="LastName" style="width: 200px" pattern="[A-Za-z]{3,10}">
                </td>
            </tr>
             <tr>
                <td>
                     Location 
                </td>
                <td>
                    <select style="width: 200px" name="location">
                        <option name="pune" id="pune">Pune</option><br>
                        <option name="Mumbai" id="mumbai"> Mumbai</option>
                        <option name="Chennai" id="Chennai">Chennai</select>
                   </select>
                </td>
            </tr>
             <tr>
                <td>
                     Email
                </td>
                <td>
                    <input type="Email" name="Email" style="width: 200px">
                </td>
            </tr>
             <tr>
                <td>
                    Mobile Number
                </td>
                <td>
                    <input type="tel" name="MobileNo" style="width: 200px"  required >
                </td>
            </tr>
            <tr></tr>
            <tr>
                <td  colspan="2">
                    <input type="Submit" name="Submit" style="width: 200px">
                </td>
            </tr>
        </table>
    </form>
</body>
</html>


```

### Preview

[View Here](https://kaustubh.codes/imgs/preview/create-user-registration-form-using.html) 
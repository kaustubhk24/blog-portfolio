---
title: Data Types in VB.NET
date: 2021-01-04T05:06:46+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /data-types-in-vb-net/
---
## Declaration of Data type

To declare Datatype, we use following syntax, For example

```vb title="file.vb"
Dim str As String
```

Now let us see Data types in VB.NET

## Data Types in VB.NET

What are the data types available in VB?

### **String** 

String Data types used to Save words in varible Like  abc', Its size depends on platform implementation. example

```vb title="file.vb"
Dim str As String= "PQR"
```

### **Boolean**

Boolean is used to store values like **true** or **false**, You can also use 1 for true and 0 for false.

```vb title="file.vb"
Dim flag As Boolean= false
```

### **Integer** 

Integer data type is used to store numbers between -2,147,483,648 and 2,147,483,647 (signed), Size of Integer variable is 4 bytes

```vb title="file.vb"
Dim a As Integer=55
```

### **Byte**

Byte data type is used for 0 to 255 (unsigned), it takes 1 byte of storage.

```vb title="file.vb"
Dim a As Byte=0
```

### **Char**

Char is used for defining single character

```vb title="file.vb"
Dim c As Char = "a"

```

### **Date**

As name suggest date is used to save Date values , it's size is 8 bytes.

```vb title="file.vb"
Dim dt As Date = Today

```

### **Single**

single data type size is 4 bytes. 1.401298E-45 to 3.4028235E+38 for positive values and -3.4028235E+38 to -1.401298E-45 for negative values

```vb title="file.vb"
Dim r As Single = 2
```

### **Long**

Long data type is used to store 8 bytes data types

```vb title="file.vb"
Dim d as Long = 2
```

### **Double**

Double used to store decimal values, size is 8 bytes

```vb title="file.vb"
Dim dbl as Double =3.22
```

These are most commonly used data types in Visual Basic .NET 

### **How do you declare in VB?**


![Data Types in VB.NET](https://www.kaustubh.codes/imgs/wp-content/uploads/2021/01/image-6.png) 



```vb title="file.vb"
Public Class Form1
 Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
 Dim str As String = "PQR"
 Dim flag As Boolean = False
 Dim a As Integer = 55
 Dim b As Byte = 0
 Dim c As Char = "a"
 Dim dt As Date = Today
 Dim r As Single = 2
 End Sub
End Class
```



[Visit Index](https://blog.kaustubh.codes/index-complete-visual-basic-net-series/) 
---
title: Mini Project in VB.NET Denomination With Source Code
date: 2021-01-02T14:46:37+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /mini-project-in-vb-net-denomination/



---
In this tutorial we will make Mini Project VB.NET for denomination. User will enter data and we will show the total to user.

## Making UI

First you need to make UI, Now make UI like below, name textbox like t2000,t500,t200 upto t1.
![Mini Project in VB.NET Denomination](https://www.kaustubh.codes/imgs/wp-content/uploads/2021/01/image-4.png) 

## Code

Write Code below in Code of the file

```vb title="file.vb"
Public Class Form1
 Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
 End Sub
 Public Function calculate()
 Dim n2000 As Integer = Integer.Parse(t2000.Text.ToString())
 Dim n500 As Integer = Integer.Parse(t500.Text.ToString())
 Dim n200 As Integer = Integer.Parse(t200.Text.ToString())
 Dim n100 As Integer = Integer.Parse(t100.Text.ToString())
 Dim n50 As Integer = Integer.Parse(t50.Text.ToString())
 Dim n20 As Integer = Integer.Parse(t20.Text.ToString())
 Dim n10 As Integer = Integer.Parse(t10.Text.ToString())
 Dim n5 As Integer = Integer.Parse(t5.Text.ToString())
 Dim n2 As Integer = Integer.Parse(t2.Text.ToString())
 Dim n1 As Integer = Integer.Parse(t1.Text.ToString())
 Dim answer As Integer
 answer = n2000 * 2000 +
 n500 * 500 +
 n200 * 200 +
 n100 * 100 +
 n50 * 50 +
 n20 * 20 +
 n10 * 10 +
 n5 * 5 +
 n2 * 2 +
 n1 * 1
 ' MsgBox(answer.ToString)
 amt.Text = answer.ToString
 End Function
 Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
 calculate()
 End Sub
End Class

```





## Download

Download Project Source Code for FREE from here,



[Download Source Code](https://github.com/JustInClicks-com/static-cdn/raw/main/Downloads/Desktop/Denomination.rar)


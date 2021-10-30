---
title: VB.NET Program to Distribute Amount in Notes
date: 2020-12-08T15:51:41+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /vb-net-program-to-distribute-amount-in-notes/



---
Article has been moved to
We are going to write VB.NET Program to Distribute Amount in Notes.

Design screen like below
![VB.NET Program to Distribute Amount in Notes ](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/12/image-2.png) 

Now double click on screen and Add this code in **form1.vb**

```vb title="file.vb"
/**
 * This program will distribute amount in currency notes
 * In India we have 2000,500,100,50,20,10,5,2,1 Notes for program
 *
 * For Example if we enter amount 365 Then output will be
 *
 * 200 X 1=200
 * 100 X 1=100
 * 50 X 1=50
 * 10 X 1=10
 * 5 X 1=5
 * ---
Article has been moved to---
Article has been moved to---
Article has been moved to---
Article has been moved to---
Article has been moved to-
 * Total : 365
 *
 *
 */
Public Class Form1
 Dim n2000, n500, n200, n100, n50, n20, n10, n5, n2, n1 As Integer
 Dim Number As Integer
 Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
 Number = Integer.Parse(TextBox1.Text)
 start(Number)
 Dim Message As String = Number.ToString + " can be distributed as " + vbNewLine + "2000 X " + n2000.ToString + " = " + (n2000 * 2000).ToString + vbNewLine + "500 X " + n500.ToString + " = " + (n500 * 500).ToString + vbNewLine + "200 X " + n200.ToString + " = " + (n200 * 200).ToString + vbNewLine + "100 X " + n100.ToString + " = " + (n100 * 100).ToString + vbNewLine + "50 X " + n50.ToString + " = " + (n50 * 50).ToString + vbNewLine + "20 X " + n20.ToString + " = " + (n20 * 20).ToString + vbNewLine + "10 X " + n10.ToString + " = " + (n10 * 10).ToString + vbNewLine + "5 X " + n5.ToString + " = " + (n5 * 5).ToString + vbNewLine + "2 X " + n2.ToString + " = " + (n2 * 2).ToString + vbNewLine + "1 X " + n1.ToString + " = " + (n1 * 1).ToString
 MsgBox(Message)
 End Sub
 Public Function start(ByVal amount As Integer)
 If amount >= 2000 Then
 amount = amount - 2000
 n2000 += 1
 start(amount)
 ElseIf amount >= 500 Then
 amount = amount - 500
 n500 += 1
 start(amount)
 ElseIf amount >= 200 Then
 amount = amount - 200
 n200 += 1
 start(amount)
 ElseIf amount >= 100 Then
 amount = amount - 100
 n100 += 1
 start(amount)
 ElseIf amount >= 50 Then
 amount = amount - 50
 n50 += 1
 start(amount)
 ElseIf amount >= 20 Then
 amount = amount - 20
 n20 += 1
 start(amount)
 ElseIf amount >= 5 Then
 amount = amount - 5
 n5 += 1
 start(amount)
 ElseIf amount >= 2 Then
 amount = amount - 2
 n2 += 1
 start(amount)
 ElseIf amount >= 1 Then
 amount = amount - 1
 n1 += 1
 start(amount)
 End If
 End Function
End Class
```

Output:
![VB.NET Program to Distribute Amount in Notes ](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/12/image-3-1024x460.png) 

Get same program in [Java here.](https://blog.kaustubh.codes/distribute-amount-in-notes/)
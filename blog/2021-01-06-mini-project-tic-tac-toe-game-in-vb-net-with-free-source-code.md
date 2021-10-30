---
title: 'Mini Project : Tic Tac Toe Game in VB.NET With FREE Source Code'
date: 2021-01-06T13:09:12+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /mini-project-tic-tac-toe-game-in-vb-net-with-free-source-code/
---
Article has been moved to
 

## How do you make a tic tac toe game in VB net? 

In this tutorial we are going to make complete mini project VB.NET game named tic tac toe,

### **Making UI**

Now Let's get started, first open your Visual Studio and drag 10 Buttons and 1 label and 1 image view and arrange all of them like design below. You can download image assets from here.
![Tic Tac Toe Game in VB.NET](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2021/01/tic-tac-toe.png) 

### **Code**

We will rename buttons as b1,b2,b3,b4,b5,b6,b8,b9 and label as lblnext and copy paste code as below.

First writing function to **restart** game 

```vb title="file.vb"
 Public Function restart()
 b1.Text = ""
 b2.Text = ""
 b3.Text = ""
 b4.Text = ""
 b5.Text = ""
 b6.Text = ""
 b7.Text = ""
 b8.Text = ""
 b9.Text = ""
 Return True
 End Function
```

Now Let's define next function to **shownext ,**

```vb title="file.vb"
 Public Function showNext()
 If (nextPlayer = "X") Then
 nextPlayer = "O"
 ElseIf (nextPlayer = "O") Then
 nextPlayer = "X"
 End If
 lblnext.Text = "Next is :" + nextPlayer
 Return nextPlayer
 End Function
```

Next will be for Printing Correct value i.e **X** or **O**

```vb title="file.vb"
 Public Function PrintButtonText(ByVal btn As Button)
 If btn.Text = "" Then
 btn.Text = nextPlayer
 checkWinner()
 showNext()
 End If
 Return True
 End Function
```

Below function will be used to check **winner** of game

```vb title="file.vb"
 Public Function checkWinner()
 If b1.Text = b2.Text And b2.Text = b3.Text Then
 winner(b1, b2, b3)
 ElseIf b1.Text = b5.Text And b5.Text = b9.Text Then
 winner(b1, b5, b9)
 ElseIf b4.Text = b5.Text And b5.Text = b6.Text Then
 winner(b4, b5, b6)
 ElseIf b7.Text = b8.Text And b8.Text = b9.Text Then
 winner(b7, b8, b9)
 ElseIf b1.Text = b4.Text And b4.Text = b7.Text Then
 winner(b1, b4, b7)
 ElseIf b2.Text = b5.Text And b5.Text = b8.Text Then
 winner(b2, b5, b8)
 ElseIf b3.Text = b6.Text And b6.Text = b9.Text Then
 winner(b3, b6, b9)
 ElseIf b3.Text = b5.Text And b5.Text = b9.Text Then
 winner(b3, b5, b9)
 End If
 End Function
```

This last function will be used to Print winner that we found in Previous function.

```vb title="file.vb"
 Public Function winner(ByVal btn1 As Button, ByVal btn2 As Button, ByVal btn3 As Button)
 If btn1.Text = "" Or btn2.Text = "" Or btn3.Text = "" Then
 Else
 MsgBox(btn1.Text.ToString + " is Winner")
 End If
 End Function
```

Now Let's Combine all code and it will look like below

```vb title="file.vb"
Public Class Form1
 Dim nextPlayer As Char = "X"
 Private Sub Button2_Click(sender As Object, e As EventArgs) Handles Button2.Click
 restart()
 showNext()
 End Sub
 Public Function restart()
 b1.Text = ""
 b2.Text = ""
 b3.Text = ""
 b4.Text = ""
 b5.Text = ""
 b6.Text = ""
 b7.Text = ""
 b8.Text = ""
 b9.Text = ""
 Return True
 End Function
 Public Function showNext()
 If (nextPlayer = "X") Then
 nextPlayer = "O"
 ElseIf (nextPlayer = "O") Then
 nextPlayer = "X"
 End If
 lblnext.Text = "Next is :" + nextPlayer
 Return nextPlayer
 End Function
 Private Sub b1_Click(sender As Object, e As EventArgs) Handles b1.Click
 PrintButtonText(b1)
 End Sub
 Public Function PrintButtonText(ByVal btn As Button)
 If btn.Text = "" Then
 btn.Text = nextPlayer
 checkWinner()
 showNext()
 End If
 Return True
 End Function
 Private Sub b2_Click(sender As Object, e As EventArgs) Handles b2.Click
 PrintButtonText(b2)
 End Sub
 Private Sub b3_Click(sender As Object, e As EventArgs) Handles b3.Click
 PrintButtonText(b3)
 End Sub
 Private Sub b4_Click(sender As Object, e As EventArgs) Handles b4.Click
 PrintButtonText(b4)
 End Sub
 Private Sub b5_Click(sender As Object, e As EventArgs) Handles b5.Click
 PrintButtonText(b5)
 End Sub
 Private Sub b6_Click(sender As Object, e As EventArgs) Handles b6.Click
 PrintButtonText(b6)
 End Sub
 Private Sub b7_Click(sender As Object, e As EventArgs) Handles b7.Click
 PrintButtonText(b7)
 End Sub
 Private Sub b8_Click(sender As Object, e As EventArgs) Handles b8.Click
 PrintButtonText(b8)
 End Sub
 Private Sub b9_Click(sender As Object, e As EventArgs) Handles b9.Click
 PrintButtonText(b9)
 End Sub
 Public Function checkWinner()
 If b1.Text = b2.Text And b2.Text = b3.Text Then
 winner(b1, b2, b3)
 ElseIf b1.Text = b5.Text And b5.Text = b9.Text Then
 winner(b1, b5, b9)
 ElseIf b4.Text = b5.Text And b5.Text = b6.Text Then
 winner(b4, b5, b6)
 ElseIf b7.Text = b8.Text And b8.Text = b9.Text Then
 winner(b7, b8, b9)
 ElseIf b1.Text = b4.Text And b4.Text = b7.Text Then
 winner(b1, b4, b7)
 ElseIf b2.Text = b5.Text And b5.Text = b8.Text Then
 winner(b2, b5, b8)
 ElseIf b3.Text = b6.Text And b6.Text = b9.Text Then
 winner(b3, b6, b9)
 ElseIf b3.Text = b5.Text And b5.Text = b9.Text Then
 winner(b3, b5, b9)
 End If
 End Function
 Public Function winner(ByVal btn1 As Button, ByVal btn2 As Button, ByVal btn3 As Button)
 If btn1.Text = "" Or btn2.Text = "" Or btn3.Text = "" Then
 Else
 MsgBox(btn1.Text.ToString + " is Winner")
 End If
 End Function
End Class

```

### **Video Guide**



### **Download** 

if you want to Download complete Project with source code or want to download assets , Click Link Below, 

**Its FREE**



[Download Now FREE](https://github.com/JustInClicks-com/static-cdn/raw/main/Downloads/Desktop/Tic%20Tac%20Toe.rar)



want to send Game to friends? Family ? Read [Making Setup File here.](https://blog.kaustubh.codes/how-to-make-setup-file-in-vb-net/)
---
title: 'Creating Tic Tac Toe VB.NET With Source Code'
date: 2020-11-24T05:05:33+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /tic-tac-toe-vb-net-with-source-code/



---
 

Let's see How to make Tic Tac Toe VB.NET With Source Code?



# Creating Project

First Create a Project and make design like below
![Tic  Tac Toe VB.NET With Source Code](http://www.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-21.png) 

Enter code below 

```vb title="file.vb"
Public Class Form1
 Dim player As Integer = 0
 Dim isGameStarted As Boolean = False
 Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
 If Button1.Text = "" Then
 If player = 0 Then
 Button1.Text = "X"
 player = 1
 Else
 Button1.Text = "0"
 player = 0
 End If
 End If
 isGameStarted = True
 printCurrentPlayer()
 Call win()
 End Sub
 Private Sub Button2_Click(sender As Object, e As EventArgs) Handles Button2.Click
 If Button2.Text = "" Then
 If player = 0 Then
 Button2.Text = "X"
 player = 1
 Else
 Button2.Text = "0"
 player = 0
 End If
 End If
 isGameStarted = True
 printCurrentPlayer()
 Call win()
 End Sub
 Private Sub Button3_Click(sender As Object, e As EventArgs) Handles Button3.Click
 If Button3.Text = "" Then
 If player = 0 Then
 Button3.Text = "X"
 player = 1
 Else
 Button3.Text = "0"
 player = 0
 End If
 End If
 isGameStarted = True
 printCurrentPlayer()
 Call win()
 End Sub
 Private Sub Button4_Click(sender As Object, e As EventArgs) Handles Button4.Click
 If Button4.Text = "" Then
 If player = 0 Then
 Button4.Text = "X"
 player = 1
 Else
 Button4.Text = "0"
 player = 0
 End If
 End If
 isGameStarted = True
 printCurrentPlayer()
 Call win()
 End Sub
 Private Sub Button5_Click(sender As Object, e As EventArgs) Handles Button5.Click
 If Button5.Text = "" Then
 If player = 0 Then
 Button5.Text = "X"
 player = 1
 Else
 Button5.Text = "0"
 player = 0
 End If
 End If
 isGameStarted = True
 printCurrentPlayer()
 Call win()
 End Sub
 Private Sub Button6_Click(sender As Object, e As EventArgs) Handles Button6.Click
 If Button6.Text = "" Then
 If player = 0 Then
 Button6.Text = "X"
 player = 1
 Else
 Button6.Text = "0"
 player = 0
 End If
 End If
 isGameStarted = True
 printCurrentPlayer()
 Call win()
 End Sub
 Private Sub Button7_Click(sender As Object, e As EventArgs) Handles Button7.Click
 If Button7.Text = "" Then
 If player = 0 Then
 Button7.Text = "X"
 player = 1
 Else
 Button7.Text = "0"
 player = 0
 End If
 End If
 isGameStarted = True
 printCurrentPlayer()
 Call win()
 End Sub
 Private Sub Button8_Click(sender As Object, e As EventArgs) Handles Button8.Click
 If Button8.Text = "" Then
 If player = 0 Then
 Button8.Text = "X"
 player = 1
 Else
 Button8.Text = "0"
 player = 0
 End If
 End If
 isGameStarted = True
 printCurrentPlayer()
 Call win()
 End Sub
 Private Sub Button9_Click(sender As Object, e As EventArgs) Handles Button9.Click
 If Button9.Text = "" Then
 If player = 0 Then
 Button9.Text = "X"
 player = 1
 Else
 Button9.Text = "0"
 player = 0
 End If
 End If
 isGameStarted = True
 printCurrentPlayer()
 Call win()
 End Sub
 Private Sub Button11_Click(sender As Object, e As EventArgs) Handles Button11.Click
 Button1.Text = ""
 Button2.Text = ""
 Button3.Text = ""
 Button4.Text = ""
 Button5.Text = ""
 Button6.Text = ""
 Button7.Text = ""
 Button8.Text = ""
 Button9.Text = ""
 printCurrentPlayer()
 isGameStarted = False
 End Sub
 Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
 printCurrentPlayer()
 End Sub
 Public Function printCurrentPlayer()
 If player = 0 Then
 Label3.Text = "X"
 Else
 Label3.Text = "0"
 End If
 End Function
 Private Sub Button12_Click(sender As Object, e As EventArgs)
 printCurrentPlayer()
 End Sub
 Private Sub Button13_Click(sender As Object, e As EventArgs)
 printCurrentPlayer()
 End Sub
 Private Sub win()
 'Possible wins
 'horizontal 123 465 789
 'vertical 147 258 369
 'Diagonal 159 357
 If Button1.Text = "X" And Button2.Text = "X" And Button3.Text = "X" Or Button4.Text = "X" And Button6.Text = "X" And Button5.Text = "X" Or Button7.Text = "X" And Button8.Text = "X" And Button9.Text = "X" Then
 MsgBox("X Wins!")
 End If
 If Button1.Text = "X" And Button4.Text = "X" And Button7.Text = "X" Or Button2.Text = "X" And Button5.Text = "X" And Button8.Text = "X" Or Button3.Text = "X" And Button6.Text = "X" And Button9.Text = "X" Then
 MsgBox("Congratulations! X", vbInformation + MsgBoxStyle.OkOnly, "X won the Match")
 End If
 If Button1.Text = "X" And Button5.Text = "X" And Button9.Text = "X" Or Button3.Text = "X" And Button5.Text = "X" And Button7.Text = "X" Then
 MsgBox("Congratulations! X", vbInformation + MsgBoxStyle.OkOnly, "X won the Match")
 End If
 If Button1.Text = "0" And Button2.Text = "0" And Button3.Text = "0" Or Button4.Text = "0" And Button6.Text = "0" And Button5.Text = "0" Or Button7.Text = "0" And Button8.Text = "0" And Button9.Text = "0" Then
 MsgBox("Congratulations! 0", vbInformation + MsgBoxStyle.OkOnly, "0 won the Match")
 End If
 If Button1.Text = "0" And Button4.Text = "0" And Button7.Text = "0" Or Button2.Text = "0" And Button5.Text = "0" And Button8.Text = "0" Or Button3.Text = "0" And Button6.Text = "0" And Button9.Text = "0" Then
 MsgBox("Congratulations! 0", vbInformation + MsgBoxStyle.OkOnly, "0 won the Match")
 End If
 If Button1.Text = "0" And Button5.Text = "0" And Button9.Text = "0" Or Button3.Text = "0" And Button5.Text = "0" And Button7.Text = "0" Then
 MsgBox("Congratulations! 0", vbInformation + MsgBoxStyle.OkOnly, "0 won the Match")
 End If
 End Sub
 Private Sub LinkLabel1_LinkClicked(sender As Object, e As LinkLabelLinkClickedEventArgs) Handles LinkLabel1.LinkClicked
 Process.Start("https://blog.kaustubh.codes")
 End Sub
End Class

```

# Output:


# Download Source

Download complete source code from below link



[Download Now](https://github.com/JustInClicks-com/static-cdn/raw/main/Downloads/Desktop/Tic%20Tac%20Toe.rar) 


---
title: Write a VB program to create screen saver on the form.
date: 2020-08-28T14:44:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-to-create-screen-saver-on-the-form/
---

```vb title="file.vb"
 Dim n As Integer  
   Private Sub Form_Load()  
                Label1.Top = Me.Height / 2  
                Label1.Left = Me.Width  
                Timer1.Interval = 1  
                Timer1.Enabled = True  
                 
End Sub  
Private Sub Timer1_Timer()  
                 
                If n < 200 Then  
                                n = n + 1  
                                Label1.Left = Label1.Left + Val(10)  
                ElseIf n < 400 Then  
                                n = n + 1  
                                Label1.Left = Label1.Left - Val(10)  
                Else  
                                n = 0  
                End If  
End Sub  
  
  
  
  

```

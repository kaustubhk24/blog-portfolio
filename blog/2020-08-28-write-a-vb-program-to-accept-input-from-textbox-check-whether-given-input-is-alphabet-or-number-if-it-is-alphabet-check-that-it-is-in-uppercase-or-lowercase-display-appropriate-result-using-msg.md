---
title: 'Write a VB program to accept Input from Textbox. Check whether given input is alphabet or number. If it is alphabet check that it is in uppercase or lowercase. Display appropriate result using msgbox.'
date: 2020-08-28T14:44:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-to-accept-input-from-textbox-check-whether-given-input-is-alphabet-or-number-if-it-is-alphabet-check-that-it-is-in-uppercase-or-lowercase-display-appropriate-result-using-msg/
---

```
  
Private Sub Command1_Click()  
                Dim no As String  
                no = Text1.Text  
                If Asc(no) < 91 And Asc(no) > 64 Then  
                MsgBox ("The given character is alphabet in UppercasLetter")  
                ElseIfAsc(no) < 123 And Asc(no) > 96 Then  
                MsgBox ("The given character is alphabet in Lowercaseletter")  
                ElseIfAsc(no) < 58 And Asc(no) > 47 Then  
                                MsgBox ("The given character is number")  
                Else  
                                MsgBox ("Enter Valid Input")  
                End If                     
End Sub  
  
  

```

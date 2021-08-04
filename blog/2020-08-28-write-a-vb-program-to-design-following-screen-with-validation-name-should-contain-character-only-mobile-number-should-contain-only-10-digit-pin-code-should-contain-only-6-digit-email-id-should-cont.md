---
title: Write a VB program to design following screen with validation name should contain character only, mobile number should contain only 10 digit, Pin code should contain only 6 digit, email id should contain @, . symbol
date: 2020-08-28T14:30:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-to-design-following-screen-with-validation-name-should-contain-character-only-mobile-number-should-contain-only-10-digit-pin-code-should-contain-only-6-digit-email-id-should-cont/
---

[![](https://1.bp.blogspot.com/-nineOD0gr_A/X0kU3_8x8fI/AAAAAAAAfgY/DMPeqqbhjBo0uBGUMWCbFViT0SMa1BuWQCLcBGAsYHQ/s400/1.png)](https://1.bp.blogspot.com/-nineOD0gr_A/X0kU3_8x8fI/AAAAAAAAfgY/DMPeqqbhjBo0uBGUMWCbFViT0SMa1BuWQCLcBGAsYHQ/s442/1.png)


```vb title="file.vb"
Private Sub Command1_Click()  
                Dim str As String  
                str = Text4.Text  
                If Not InStr(1, "@", str) And Text4.Text <> "" Then  
                                If Not InStr(1, ".", str) Then  
                                                MsgBox ("All data validated")  
                                Else  
                                                MsgBox ("Email not contain .")  
                                End If  
                Else  
                                MsgBox ("Email withoun @")  
                End If  
End Sub  
  
Private Sub Text1_KeyPress(KeyAscii As Integer)  
                Print KeyAscii  
                Select Case Chr(KeyAscii)  
    	      Case 0 To 9  
                                MsgBox ("Only Characters are allowed")  
                                KeyAscii = 0  
                End Select  
                 
End Sub  
  
Private Sub Text2_KeyPress(KeyAscii As Integer)  
                If Not IsNumeric(Text2.Text &Chr(KeyAscii)) And Not KeyAscii = 8 Then  
                                MsgBox ("only Numbers are allowed")  
                                KeyAscii = 0 '8 for backspace  
                End If  
                 
End Sub  
  
  
  
  

```

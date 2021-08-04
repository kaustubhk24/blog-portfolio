---
title: 'Write a VB Program to accept a number from user and check whether it is palindrome or not (Accept number using input box ) and display result using message box.'
date: 2020-08-28T14:21:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-to-accept-a-number-from-user-and-check-whether-it-is-palindrome-or-not-accept-number-using-input-box-and-display-result-using-message-box/
---

```vb title="file.vb"
Private Sub Command1_Click()  
  
	Dim no As Integer  
	Dim no2 As Integer  
	Dim sum As Integer  
	no = Val(Text1.Text)  
	no2 = no  
	While no  
		r = no Mod 10  
		sum = sum * 10 + r  
		no = no  10  
	Wend  
	If no2 = sum Then  
		MsgBox ("Number is palindrome")  
	Else  
		MsgBox ("Number is not palindrome")  
	End If  
	  
End Sub  
  
  

```

---
title: 'Write a VB Program to display the reverse of a given number using function. (Accept number through textbox and display result using message box'
date: 2020-08-28T14:13:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-to-display-the-reverse-of-a-given-number-using-function-accept-number-through-textbox-and-display-result-using-message-box/
---
Article has been moved to

```vb title="file.vb"
Private Sub Command1_Click()  
	Dim n As Integer  
n = Val(Text1.Text)  
	Dim a As Integer  
	Dim r As Integer  
	  
	While n <> 0  
		a = n Mod 10  
		r = r * 10 + a  
		n = n  10  
	Wend  
	MsgBox ("revers is" & r)  
End Sub  
  
  

```

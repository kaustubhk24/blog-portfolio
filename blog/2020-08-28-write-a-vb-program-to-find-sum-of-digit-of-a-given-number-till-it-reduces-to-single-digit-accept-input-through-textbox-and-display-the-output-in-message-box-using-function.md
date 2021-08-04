---
title: 'Write a VB Program to find sum of digit of a given number till it reduces to single digit. Accept input through textbox and Display the output in Message Box (using function)'
date: 2020-08-28T14:06:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-to-find-sum-of-digit-of-a-given-number-till-it-reduces-to-single-digit-accept-input-through-textbox-and-display-the-output-in-message-box-using-function/
---

```vb title="file.vb"
Private Sub Command1_Click()  
  
	ans = display()  
	MsgBox ("Ansis "&ans)  
End Sub  
Public Function display() As Integer  
	s = 0  
	n = Val(Text1.Text)  
	While n > 9  
		s = 0  
		While n > 0  
			r = n Mod 10  
			s = s + r  
			n = n  10  
		Wend  
		n = s  
	Wend  
	display = s  
End Function  
  
  
  

```

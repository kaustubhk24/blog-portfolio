---
title: 'Write a VB Program to display Fibonacci series up to given term (Accept term using Input Box )and display Fibonacci series on to the form.'
date: 2020-08-28T14:15:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-to-display-fibonacci-series-up-to-given-term-accept-term-using-input-box-and-display-fibonacci-series-on-to-the-form/
---

```vb title="file.vb"
  
Private Sub Command1_Click()  
	n = InputBox("Enter The Term")  
	a = 0  
	b = 1  
	Print "Fibonacci Series is : "  
	Print a  
	Print b  
	For i = 1 To n - 2  
		c = a + b  
		a = b  
		b = c  
		Print c  
	Next  
End Sub  
  
  

```
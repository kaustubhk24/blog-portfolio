---
title: Write a VB Program to find transpose of given matrix.
date: 2020-08-28T14:18:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-to-find-transpose-of-given-matrix/
---

```vb title="file.vb"
Private Sub cmdMatrix_Click()  
	Dim a(1, 1) As Integer  
	For i = 0 To 1  
		For j = 0 To 1  
			a(i, j) = InputBox("Enter element" &ij)  
		Next  
	Next  
	Print "Given matrix is"  
  
	For i = 0 To 1  
		For j = 0 To 1  
			Print a(i, j);  
		Next  
		Print ""  
	Next  
	Print ""  
	Print "Transpose of Given matrix is"  
	For i = 0 To 1  
		For j = 0 To 1  
			Print a(j, i);  
		Next  
		Print ""  
	Next  
End Sub  
  
  

```
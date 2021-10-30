---
title: Write a VB Program to accept birth date through textbox from user and calculate age. (Use Message box to display result)
date: 2020-08-28T14:22:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-to-accept-birth-date-through-textbox-from-user-and-calculate-age-use-message-box-to-display-result/
---
Article has been moved to

```vb title="file.vb"
Private Sub Command1_Click()  
	BirthDate = Text1.Text  
	MsgBox ("Age :" &ExactAge(BirthDate))  
	  
End Sub  
  
Public Function ExactAge(BirthDate As Variant) As String  
	  
	Dim yer As Integer, mon As Integer, d As Integer  
	Dim dt As Date  
	Dim sAns  As String  
	  
	dt = CDate(BirthDate)  
	If dt> Now Then Exit Function  
	  
	yer = Year(dt)  
	Print yer  
	mon = Month(dt)  
	Print mon  
	d = Day(dt)  
	Print d  
	yer = Year(Date) - yer  
	mon = Month(Date) - mon  
	d = Day(Date) - d  
	sAns = yer& " year(s) " &mon& " month(s) " & d & " day(s) old."  
	ExactAge = sAns  
	  
End Function  
  
  

```

---
title: 'Write a VB program to convert temperature in Celsius to Fahrenheit and result should display into message box. (Accept input through input box)'
date: 2020-08-28T14:24:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-to-convert-temperature-in-celsius-to-fahrenheit-and-result-should-display-into-message-box-accept-input-through-input-box/
---

```vb title="file.vb"
Private Sub Command1_Click()  
	temp = Val(InputBox("Enter Temperature in celcius"))  
	Dim F As Integer  
  
	F = temp * 9 / 5 + 32  
	MsgBox ("Temp in F is "& F)  
End Sub  
  

```

---
title: Write a VB Program to create status bar and display it on onto the form. Status bar should have five panels to display any text, date, time, CAPS ON/OFF, Num ON/OFF.
date: 2020-08-28T14:32:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-to-create-status-bar-and-display-it-on-onto-the-form-status-bar-should-have-five-panels-to-display-any-text-date-time-caps-on-off-num-on-off/
---
Article has been moved to

```vb title="file.vb"  
Private Declare Function GetKeyState Lib "user32" (ByValnVirtKey As Long) As Integer  
Private Sub Form_Load()  
	StatusBar1.Panels(1) = "HI"  
  
	StatusBar1.Panels(2) = Date  
	StatusBar1.Panels(3) = Time  
End Sub  
  
Private Sub Timer1_Timer()  
If GetKeyState(vbKeyCapital) = 0 Then  
		StatusBar1.Panels(4) = "CAPS OFF"  
	Else  
		StatusBar1.Panels(4) = "CAPS ON"  
	End If  
	If GetKeyState(vbKeyNumlock) = 0 Then  
		StatusBar1.Panels(5) = "NUM LOCK OFF"  
	Else  
		StatusBar1.Panels(5) = "NUM LOCK ON"  
	End If  
	  
End Sub  
  
  
  

```

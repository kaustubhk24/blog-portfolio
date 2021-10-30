---
title: Write a VB program to create a Stop Watch. It contains buttons Start, Stop, Pause and Reset. It should display time in hours, minute, second, millisecond
date: 2020-08-28T14:19:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-to-create-a-stop-watch-it-contains-buttons-start-stop-pause-and-reset-it-should-display-time-in-hours-minute-second-millisecond/
---
Article has been moved to

```vb title="file.vb" 
Private Sub Command1_Click()  
  
	Timer1.Enabled = True  
	  
End Sub  
  
Private Sub Command2_Click()  
	Timer1.Enabled = False  
	  
	Label1.Caption = 0  
	Label2.Caption = 0  
	Label3.Caption = 0  
	Label4.Caption = 0  
End Sub  
  
Private Sub Command3_Click()  
	If Command3.Caption = "Pause" Then  
		Command3.Caption = "Resume"  
		Timer1.Enabled = False  
	Else  
		Command3.Caption = "Pause"  
		Timer1.Enabled = True  
	End If  
End Sub  
  
Private Sub Command4_Click()  
	Label1.Caption = 0  
	Label2.Caption = 0  
	Label3.Caption = 0  
	Label4.Caption = 0  
	  
End Sub  
  
Private Sub Form_Load()  
'	Timer1.Enabled = False  
'Timer1.Enabled = True  
	  
'Label4.Caption = Time  
	  
End Sub  
  
Private Sub Timer1_Timer()  
	Label4.Caption = Val(Label4.Caption) + Val(1)  
	If Label4.Caption = 100 Then  
		Label3.Caption = Val(Label3.Caption) + Val(1)  
		Label4.Caption = 0  
	ElseIf Label3.Caption = 59 Then  
		Label2.Caption = Val(Label2.Caption) + Val(1)  
		Label3.Caption = 0  
	ElseIf Label2.Caption = 59 Then  
		Label1.Caption = Val(Label1.Caption) + Val(1)  
		Label2.Caption = 0  
	End If  
End Sub  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

```

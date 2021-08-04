---
title: Write a VB Program to move a command button by using timer control.
date: 2020-08-28T14:37:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-to-move-a-command-button-by-using-timer-control/
---

```vb title="file.vb"
Private Sub Form_Load()  
  
	Timer1.Interval = 1  
	Timer1.Enabled = True  
	  
End Sub  
  
Private Sub Timer1_Timer()  
	Command1.Left = Command1.Left + 2  
End Sub  
  
  
  
  
  
  
  

```

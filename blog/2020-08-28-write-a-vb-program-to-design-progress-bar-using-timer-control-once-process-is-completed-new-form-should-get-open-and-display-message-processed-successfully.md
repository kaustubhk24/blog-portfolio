---
title: 'Write a VB program to design progress bar using Timer control. Once process is completed new form should get open and display message �Processed Successfully�'
date: 2020-08-28T14:37:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-to-design-progress-bar-using-timer-control-once-process-is-completed-new-form-should-get-open-and-display-message-processed-successfully/
---
Write a VB program to design progress bar using Timer control. Once process is completed new form should get open and display message �Processed Successfully� 


```vb title="file.vb"
Private Sub Timer1_Timer()  
  
	ProgressBar1.Value = ProgressBar1.Value + 10  
	If ProgressBar1.Value = 100 Then  
		Form2.Show  
		Timer1.Enabled = False  
	End If  
End Sub  
  
  
  

```

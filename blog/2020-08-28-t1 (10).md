---
title: Write a VB program which accepts First name and last name from user into two textboxes and three command buttons Concatenate, Uppercase, Lowercase respectively. After clicking on command button appropriate result should get display into third textbox.
date: 2020-08-28T14:38:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-which-accepts-first-name-and-last-name-from-user-into-two-textboxes-and-three-command-buttons-concatenate-uppercase-lowercase-respectively-after-clicking-on-command-button-approp/
---
Write a VB program which accepts First name and last name from user into two textboxes and three command buttons Concatenate, Uppercase, Lowercase respectively. After clicking on command button appropriate result should get display into third textbox. 


```vb title="file.vb" 
Private Sub Command1_Click()  
  
	Text3.Text = Text1.Text + Text2.Text  
	  
End Sub  
Private Sub Command2_Click()  
	Text3.Text = UCase(Text3.Text)  
End Sub  
  
Private Sub Command3_Click()  
	Text3.Text = LCase(Text3.Text)  
	  
End Sub	  
   
  
  

```

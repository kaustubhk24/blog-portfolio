---
title: Write a VB Program to place three text boxes onto the form at run time. Enter different strings in first and second textbox. On clicking to command button, concatenation of two strings should be displayed in the third text box.
date: 2020-08-28T14:10:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-to-place-three-text-boxes-onto-the-form-at-run-time-enter-different-strings-in-first-and-second-textbox-on-clicking-to-command-button-concatenation-of-two-strings-should-be-displ/
---

```
  
Dim WithEvents text1 As TextBox  
Dim WithEvents text2 As TextBox  
Dim WithEvents text3 As TextBox  
Dim WithEventscmd As CommandButton  
  
Private Sub Form_Load()  
	Set cmd = Controls.Add("vb.CommandButton", "cmd")  
	cmd.Left = 600  
	cmd.Top = 1000  
	cmd.Caption = "Concat"  
	cmd.Visible = True  
	Set text1 = Controls.Add("vb.textbox", "text1")  
	text1.Left = 100  
	text1.Top = 100  
	text1.Visible = True  
	  
	Set text2 = Controls.Add("vb.textbox", "text2")  
	text2.Left = 1500  
	text2.Top = 100  
	text2.Visible = True  
	  
	Set text3 = Controls.Add("vb.textbox", "text3")  
	text3.Left = 3000  
	text3.Top = 100  
	text3.Visible = True  
End Sub  
Private Sub cmd_click()  
	text3.Text = text1.Text + text2.Text  
End Sub  
  
   
  
  

```

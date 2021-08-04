---
title: Write a Vb.net program to add two TextBoxes, two Labels and one button at runtime. Accept two numbers in textboxes and handle DivideByZeroException.
date: 2020-08-28T15:10:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-net-program-to-add-two-textboxes-two-labels-and-one-button-at-runtime-accept-two-numbers-in-textboxes-and-handle-dividebyzeroexception/
---

```vb title="file.vb" 
PublicClass Form1  
Dim text1 AsNew TextBox  
Dim text2 AsNew TextBox  
DimWithEvents btn AsNew Button  
PrivateSub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs)  
HandlesMyBase.Load  
'text3(i) = New TextBox  
 text1.Visible = True  
 text1.Location = New Point(20, 20)  
 text1.Size = New Size(150, 15)  
Me.Controls.Add(text1)  
 text2.Visible = True  
 text2.Location = New Point(20, 40)  
 text2.Size = New Size(150, 15)  
Me.Controls.Add(text2)  
 btn.Visible = True  
 btn.Location = New Point(20, 70)  
 btn.Size = New Size(150, 40)  
 btn.Text = "Click"  
Me.Controls.Add(btn)  
EndSub  
PrivateSub btn_click(ByVal sender As System.Object, ByVal e As System.EventArgs)  
Handles btn.Click  
 MsgBox("Hi")  
Dim a AsInteger  
Try  
 a = CInt(text1.Text)  CInt(text2.Text)  
 MsgBox("Result "& a)  
Catch ex As DivideByZeroException  
 MsgBox(ex.Message)  
EndTry  
EndSub  
EndClass  
  

```

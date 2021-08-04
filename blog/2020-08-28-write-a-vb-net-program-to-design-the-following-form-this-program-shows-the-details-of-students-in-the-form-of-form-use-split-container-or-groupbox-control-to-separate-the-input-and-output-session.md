---
title: Write a Vb.net program to design the following form, this program shows the details of students in the form of form (use split container or Groupbox control to separate the input and output session).
date: 2020-08-28T15:20:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-net-program-to-design-the-following-form-this-program-shows-the-details-of-students-in-the-form-of-form-use-split-container-or-groupbox-control-to-separate-the-input-and-output-session/
---

```vb title="file.vb"
  
PublicClass Form1  
PrivateSub btnSubmit_Click(ByVal sender As System.Object, ByVal e As  
System.EventArgs) Handles btnSubmit.Click  
 Label1.Text = txtName.Text  
 Label2.Text = txtFathersName.Text  
 Label3.Text = txtMothersName.Text  
 Label4.Text = cmbCourse.Text  
If optMale.Checked = TrueThen  
 Label5.Text = "Male"  
Else  
 Label5.Text = "Female"  
EndIf  
 Label6.Text = DateTimePicker1.Value  
 Label7.Text = txtHobbies.Text  
 Label8.Text = txtContact.Text  
 EndSub  
EndClass  

```

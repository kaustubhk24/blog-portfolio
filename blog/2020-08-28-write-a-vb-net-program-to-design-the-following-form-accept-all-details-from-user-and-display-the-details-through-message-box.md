---
title: Write a Vb.net program to design the following form, accept all details from user and display the details through message box
date: 2020-08-28T15:21:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-net-program-to-design-the-following-form-accept-all-details-from-user-and-display-the-details-through-message-box/
---

```vb title="file.vb"
PublicClass Form1
PrivateSub btnOk_Click(ByVal sender As System.Object, ByVal e As
System.EventArgs) Handles btnOk.Click
Dim nm AsString
Dim post AsString
Dim qual AsString = ""
 nm = TextBox1.Text
If opManager.Checked = TrueThen
 post = "Manager"
ElseIf opEng.Checked = TrueThen
 post = "Engineer"
ElseIf opAcc.Checked = TrueThen
 post = "Accountant"
Else
 post = "Clerk"
EndIf
If chkBE.Checked Then
 qual = qual &"BE, "
EndIf
If chkMBA.Checked Then
 qual = qual &"MBA, "
EndIf
If chkCA.Checked Then
 qual = qual &"CA, "
EndIf
If chkGraduate.Checked Then
 qual = qual &"Graduate"
EndIf
 MessageBox.Show("Name: "& nm &" Post: "& post &" Qualification: "& qual,
"Details", MessageBoxButtons.OK, MessageBoxIcon.Information)
EndSub
EndClass
```
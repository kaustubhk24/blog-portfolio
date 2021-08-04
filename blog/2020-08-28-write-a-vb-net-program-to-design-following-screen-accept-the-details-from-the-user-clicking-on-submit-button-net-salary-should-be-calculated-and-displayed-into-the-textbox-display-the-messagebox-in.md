---
title: Write a Vb.net program to design following screen, accept the details from the user. Clicking on Submit button Net Salary should be calculated and displayed into the TextBox. Display the MessageBox informing the Name and Net Salary of employee.
date: 2020-08-28T15:12:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-net-program-to-design-following-screen-accept-the-details-from-the-user-clicking-on-submit-button-net-salary-should-be-calculated-and-displayed-into-the-textbox-display-the-messagebox-in/
---

```vb title="file.vb"
PublicClass Form1
PrivateSub Button1_Click(ByVal sender As System.Object, ByVal e As
System.EventArgs) Handles Button1.Click
 txtNetSal.Text = CInt(txtBasic.Text) + CInt(txtDA.Text) +
CInt(txtHRA.Text) + CInt(txtMA.Text) + CInt(txtPF.Text) - CInt(txtPT.Text) -
CInt(txtIT.Text)
 MsgBox(txtName.Text & txtNetSal.Text)
 EndSub
EndClass
```
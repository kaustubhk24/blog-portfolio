---
title: Design a Vb.net form to pick a date from DateTimePicker Control and display day, month and year in separate text boxes.
date: 2020-08-28T15:13:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /design-a-vb-net-form-to-pick-a-date-from-datetimepicker-control-and-display-day-month-and-year-in-separate-text-boxes/
---

```
  
Public Class Form1  
PrivateSub Button2_Click(ByVal sender As System.Object, ByVal e As  
System.EventArgs) Handles Button2.Click  
 TextBox2.Text = Format(DateTimePicker1.Value, "dd")  
 TextBox3.Text = DateTimePicker1.Value.Month  
 TextBox4.Text = DateTimePicker1.Value.Year  
EndSub  
EndClass  
  
  

```

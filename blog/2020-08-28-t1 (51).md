---
title: Write a Vb.net program to design the following form, select the question number from combo box that question will be displayed into textbox and the options for that question will be displayed on four radio buttons, select option and click on submit button result should be displayed in another textbox
date: 2020-08-28T15:18:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-net-program-to-design-the-following-form-select-the-question-number-from-combo-box-that-question-will-be-displayed-into-textbox-and-the-options-for-that-question-will-be-displayed-on-four/
---

```vb title="file.vb"
  
PublicClass Form1  
PrivateSub ComboBox1_SelectedIndexChanged(ByVal sender As System.Object, ByVal e  
As System.EventArgs) Handles ComboBox1.SelectedIndexChanged  
If ComboBox1.Text = "Question 1"Then  
 RichTextBox1.Text = "Which is capital of India?"  
 RadioButton1.Text = "Delhi"  
 RadioButton2.Text = "Mumbai"  
 RadioButton3.Text = "Pune"  
 RadioButton4.Text = "Chennai"  
 ElseIf ComboBox1.Text = "Question 2"Then  
 RichTextBox1.Text = "Which is capital of Maharashtra?"  
 RadioButton1.Text = "Delhi"  
 RadioButton2.Text = "Mumbai"  
 RadioButton3.Text = "Nagpur"  
 RadioButton4.Text = "Chennai"  
EndIf  
EndSub  
PrivateSub Button1_Click(ByVal sender As System.Object, ByVal e As  
System.EventArgs) Handles Button1.Click  
'MsgBox(RadioButton1.Checked)  
 MsgBox(ComboBox1.SelectedItem)  
If ComboBox1.Text = "Question 1"And RadioButton1.Checked Then  
 TextBox1.Text = "Answer is correct"  
ElseIf ComboBox1.Text = "Question 2"And RadioButton3.Checked Then  
 TextBox1.Text = "Answer is correct"  
Else  
 TextBox1.Text = "Answer is Wrong"  
EndIf  
EndSub  
EndClass  
  
  

```

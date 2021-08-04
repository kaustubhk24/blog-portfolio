---
title: 'Write a VB program for currency conversion. The program should input the amount in any currency and the output should be displayed in the desire currency as selected by the user. An input form should accept all the currency rates. The various currencies are rupee, dollar, pound and euro. (Use textbox control for input and to display output also)'
date: 2020-08-28T14:25:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-for-currency-conversion-the-program-should-input-the-amount-in-any-currency-and-the-output-should-be-displayed-in-the-desire-currency-as-selected-by-the-user/
---

```
  
Dim pound As Integer  
  
Dim dollar As Integer  
Dim euro As Integer  
  
Private Sub cmdConvert_Click()  
	  
	If Option1.Value = True Then  
		Label2.Caption = "Dollar"  
		Text2.Text = Val(Text1.Text) / dollar  
	ElseIf Option2.Value = True Then  
		Label2.Caption = "Pound"  
		Text2.Text = Val(Text1.Text) / pound  
	ElseIf Option3.Value = True Then  
		Label2.Caption = "Euro"  
		Text2.Text = Val(Text1.Text) / euro  
	Else  
		MsgBox ("Select Conversion type")  
	End If  
	  
End Sub  
Private Sub cmdRates_Click()  
	  
	pound = Val(InputBox("Enter Rate of pound"))  
	dollar = Val(InputBox("Enter Rate of Dollar"))  
	euro = Val(InputBox("Enter Rate of euro"))  
	cmdConvert.Enabled = True  
	  
End Sub  
Private Sub Form_Load()  
	cmdConvert.Enabled = False  
End Sub  
  
  
  

```

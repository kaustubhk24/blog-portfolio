---
title: Write a VB Program for Dental Payment Form. Calculate total on selected options from check boxes.
date: 2020-08-28T14:09:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-for-dental-payment-form-calculate-total-on-selected-options-from-check-boxes/
---

[![](https://1.bp.blogspot.com/-9tOY8WBDRFc/X0kP6uZf5LI/AAAAAAAAffw/m5k1N-KmDsAs9bO0cPmTPRbvt7Etf1gUgCLcBGAsYHQ/s320/1.png)](https://1.bp.blogspot.com/-9tOY8WBDRFc/X0kP6uZf5LI/AAAAAAAAffw/m5k1N-KmDsAs9bO0cPmTPRbvt7Etf1gUgCLcBGAsYHQ/s499/1.png)


```
  
Private Sub Command1_Click()  
	Dim sum As Integer  
	If Check1.Value = 1 Then  
		sum = sum + 35  
	End If  
	If Check2.Value = 1 Then  
		sum = sum + 150  
	End If  
	If Check3.Value = 1 Then  
		sum = sum + 800  
	End If  
	If Check5.Value = 1 Then  
		sum = sum + 50  
	End If  
	If Check6.Value = 1 Then  
		sum = sum + 85  
	End If  
	If Check4.Value = 1 Then  
		sum = sum + Val(Text1.Text)  
	End If  
	  
	Label5.Caption = sum  
End Sub  
  
  
  
  
  

```

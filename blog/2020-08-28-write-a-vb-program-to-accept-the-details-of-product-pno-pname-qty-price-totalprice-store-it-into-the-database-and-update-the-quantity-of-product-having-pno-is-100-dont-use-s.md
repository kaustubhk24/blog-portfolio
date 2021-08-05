---
title: Write a VB program to accept the details of product (pno, pname, qty, price totalprice) store it into the database and update the quantity of product having pno is 100. (Don't use Standard Data controls)
date: 2020-08-28T14:31:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-to-accept-the-details-of-product-pno-pname-qty-price-totalprice-store-it-into-the-database-and-update-the-quantity-of-product-having-pno-is-100-dont-use-s/
---

```vb title="file.vb" 
Private Sub Command1_Click()  
	Dim str As String  
	str = Text4.Text  
	If Not InStr(1, "@", str) And Text4.Text <> "" Then  
		If Not InStr(1, ".", str) Then  
			MsgBox ("All data validated")  
		Else  
			MsgBox ("Email not contain .")  
		End If  
	Else  
		MsgBox ("Email withoun @")  
	End If  
End Sub  
  
Private Sub Text1_KeyPress(KeyAscii As Integer)  
	Print KeyAscii  
	Select Case Chr(KeyAscii)  
	Case 0 To 9  
		MsgBox ("Only Characters are allowed")  
		KeyAscii = 0  
	End Select  
	  
End Sub  
  
Private Sub Text2_KeyPress(KeyAscii As Integer)  
	If Not IsNumeric(Text2.Text &Chr(KeyAscii)) And Not KeyAscii = 8 Then  
		MsgBox ("only Numbers are allowed")  
		KeyAscii = 0 '8 for backspace  
	End If  
	  
End Sub  
  
  
  
  
  

```

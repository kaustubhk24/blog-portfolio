---
title: 'Write a VB a program to enter �Voters details and on next form disply Voter�s Information and check proper validation for(name, age,nationality) as � Name should be in upper case letters � Age should not be less than 18 yrs. � Natinality should be Indian.'
date: 2020-08-28T14:36:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-a-program-to-enter-voters-details-and-on-next-form-disply-voters-information-and-check-proper-validation-forname-agenationality-as-name-should-b/
---
Write a VB a program to enter �Voters details and on next form disply Voter�s Information and check proper validation for(name, age,nationality) as � Name should be in upper case letters � Age should not be less than 18 yrs. � Natinality should be Indian. 


```
  
Dim age As Integer  
Dim vname As String  
  
Private Sub Command1_Click()  
	age = Text2.Text  
	vname = Text1.Text  
	  
	If Val(Text2.Text) < 18 Then  
		MsgBox ("Age should be greater than 18")  
	ElseIf Text3.Text <> "Indian" Then  
		MsgBox ("Nationality must be Indian")  
	Else  
		Form2.Show  
  
		Form2.Label4.Caption = vname  
		Form2.Label5.Caption = age  
	End If  
End Sub  
  
Private Sub Text1_KeyPress(KeyAscii As Integer)  
  
	Select Case Chr(KeyAscii)  
	Case "a" To "z"  
		MsgBox ("Only Capital letters are allowed")  
		KeyAscii = 0  
	Case 0 To 9  
		MsgBox ("Only Characters are allowed")  
		KeyAscii = 0  
	End Select  
End Sub  
  
  

```

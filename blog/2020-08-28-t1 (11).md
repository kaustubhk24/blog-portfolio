---
title: Write a VB program to store the details of players into the database and display that details using ADODC.
date: 2020-08-28T14:32:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-to-store-the-details-of-players-into-the-database-and-display-that-details-using-adodc/
---

```vb title="file.vb"
Private Sub Command1_Click()  
	lblTotal.Caption = Val(Text4.Text) + Val(Text5.Text) + Val(Text6.Text)  
	lblPer.Caption = Val(lblTotal.Caption) / 3  
	total = Val(lblTotal.Caption)  
	If total < 100 Then  
		lblGrade.Caption = "D"  
	ElseIf total < 150 Then  
		lblGrade.Caption = "C"  
	ElseIf total < 200 Then  
		lblGrade.Caption = "B"  
	ElseIf total < 250 Then  
		lblGrade.Caption = "A"  
	ElseIf total < 300 Then  
		lblGrade.Caption = "A+"  
	End If  
	Command1.Enabled = False  
	Command2.Enabled = True  
End Sub  
  
Private Sub Command2_Click()  
	With Adodc1.Recordset  
		.AddNew  
  
		!roll = Val(Text1.Text)  
		!sname = Text2.Text  
		!sclass = Text3.Text  
		!sub1 = Text4.Text  
		!sub2 = Text5.Text  
		!sub3 = Text6.Text  
		!total = lblTotal.Caption  
		!per = lblPer.Caption  
		!grade = lblGrade.Caption  
		.Update  
		.Requery  
	End With  
	MsgBox ("Marks Inserted")  
	Text1.Text = ""  
	Text2.Text = ""  
End Sub  
				  
  
  
  

```

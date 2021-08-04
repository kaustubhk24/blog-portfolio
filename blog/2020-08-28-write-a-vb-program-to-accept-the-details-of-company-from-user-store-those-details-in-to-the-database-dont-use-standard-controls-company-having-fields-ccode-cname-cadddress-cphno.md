---
title: 'Write a VB Program to accept the details of Company from user & store those details in to the database. (Don�t use Standard controls) Company having fields ccode, cname, cadddress, cphno'
date: 2020-08-28T14:22:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-to-accept-the-details-of-company-from-user-store-those-details-in-to-the-database-dont-use-standard-controls-company-having-fields-ccode-cname-cadddress-cphno/
---

```
  
Dim ad As ADODB.Connection  
Dim rst As ADODB.Recordset  
Dim sql As String  
  
Private Sub Command1_Click()    'Add New   
  
	Text1.Text = ""  
	Text2.Text = ""  
	Text3.Text = ""  
	Text4.Text = ""  
End Sub  
Private Sub Command2_Click()       'Save   
	rst.AddNew  
	rst!empcode = CInt(Text1.Text)  
	rst!empname = Text2.Text  
	rst!salary = CDbl(Text3.Text)  
	rst!doj = CDate(Text4.Text)  
	rst.Update  
	rst.Requery  
	MsgBox ("Data Inserted")  
End Sub  
  
Private Sub Command3_Click()  
	rst.MoveFirst  
	Call loadData  
End Sub  
  
Private Sub Command4_Click()  
	rst.MoveLast  
	Call loadData  
End Sub  
  
Private Sub Form_Load()  
	Set ad = New ADODB.Connection  
	  
	ad.ConnectionString = "DSN=DBemp"   'must be created before use from control panel  
	ad.Open  
	MsgBox ("Open")  
  
  
  
  
  
  
  
  

```

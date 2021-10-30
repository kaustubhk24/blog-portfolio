---
title: Write a program in VB for Login screen validation.(use ADODC Control)
date: 2020-08-28T14:52:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-program-in-vb-for-login-screen-validation-use-adodc-control/
---
Article has been moved to

[![](https://1.bp.blogspot.com/-YnfOMnS5bjw/X0kaBOpuYdI/AAAAAAAAfhE/Ca-tRJoqtt4vRZ5UPN5aYm1hNCqd6bEIQCLcBGAsYHQ/s400/1.png)](https://1.bp.blogspot.com/-YnfOMnS5bjw/X0kaBOpuYdI/AAAAAAAAfhE/Ca-tRJoqtt4vRZ5UPN5aYm1hNCqd6bEIQCLcBGAsYHQ/s316/1.png)


```vb title="file.vb" 
Private Sub cmdok_Click()  
Static y As Integer  
 Adodc1.Refresh  
	With Adodc1.Recordset  
	  
	If .RecordCount > 0 Then  
		 If .EOF = False Then  
		.MoveFirst  
		If !UserName = txtUsername And !Password = txtPassword Then  
		MsgBox "Login Successful!"  
		frmMenu.Show  
		Unload Me  
  
	Else  
		MsgBox "Invalid username/password!", vbOKOnly + vbCritical, "Access denied!"  
		txtUsername.Text = ""  
		txtPassword.Text = ""  
		txtUsername.SetFocus  
	End If  
	End If  
	End If  
	End With  
End Sub  
  
  
  
  
  
  
  
  

```

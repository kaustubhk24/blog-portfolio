---
title: 'Write a VB Program to accept the details of employee from user & store those details in to the database. (Don t use Standard controls) Employee having fields e_\_code, e_\_name, salary, dateofjoining.'
date: 2020-08-28T14:20:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-to-accept-the-details-of-employee-from-user-store-those-details-in-to-the-database-dont-use-standard-controls-employee-having-fields-emp_code-emp_name-salary-dateof/
---
Article has been moved to

```vb title="file.vb"
Dim C As New Connection  
Dim R As New Recordset  
Dim S As String  
Private Sub cmdAdd_Click()  
        txtEmpCode.Text = ""  
        txtEmpName.Text = ""  
        txtEmpSal.Text = ""  
        txtDOJ.Text = ""  
        
        txtEmpCode.SetFocus  
End Sub  
Private Sub cmdNext_Click()  
    R.MoveNext  
    If Not R.EOF Then  
          
        txtEmpCode.Text = R.Fields(0).Value  
        txtEmpName.Text = R.Fields(1).Value  
        txtEmpSal.Text = R.Fields(2).Value  
        txtDOJ.Text = R.Fields(3).Value  
    Else  
        MsgBox "No More Records!", vbInformation, "Employee"  
    End If  
End Sub  
Private Sub cmdPrev_Click()  
    R.MovePrevious  
    If Not R.BOF Then  
        txtEmpCode.Text = R.Fields(0).Value  
        txtEmpName.Text = R.Fields(1).Value  
        txtEmpSal.Text = R.Fields(2).Value  
        txtDOJ.Text = R.Fields(3).Value  
    Else  
        MsgBox "No More Records!", vbInformation, "Employee"  
    End If  
End Sub  
Private Sub cmdSave_Click()  
        R.Close  
        S = "Insert Into tblEmp Values(" & Val(txtEmpCode.Text) & ",'" & txtEmpName.Text & "'," & Val(txtEmpSal.Text) & ", '" & txtDOJ.Text & "')"  
        R.Open S, C, adOpenDynamic, adLockOptimistic  
        S = "Select * From tblEmp"  
        R.Open S, C, adOpenDynamic, adLockOptimistic  
        If Not R.BOF And Not R.EOF Then  
            R.MoveFirst  
            txtEmpCode.Text = R.Fields(0).Value  
            txtEmpName.Text = R.Fields(1).Value  
            txtEmpSal.Text = R.Fields(2).Value  
            txtDOJ.Text = R.Fields(3).Value  
        End If  
            MsgBox "Employee Added Successfully!", vbInformation, "Employee"  
End Sub  
Private Sub Form_Load()  
    S = "Select * From tblEmp"  
    C.Open "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=E:VBSlipSolSlip04Ques-2emp.mdb;Persist Security Info=False"  
    R.Open S, C, adOpenDynamic, adLockOptimistic  
              
    If Not R.BOF And Not R.EOF Then  
        R.MoveFirst  
        txtEmpCode.Text = R.Fields(0).Value  
        txtEmpName.Text = R.Fields(1).Value  
        txtEmpSal.Text = R.Fields(2).Value  
        txtDOJ.Text = R.Fields(3).Value  
    End If  
End Sub  
  
  
  
  
  
  
  
  

```

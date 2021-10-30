---
title: 'Write a VB program to accept the details of book, store those details into the database and delete the particular record of given book id. (Use InputBox)'
date: 2020-08-28T14:45:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-to-accept-the-details-of-book-store-those-details-into-the-database-and-delete-the-particular-record-of-given-book-id-use-inputbox/
---
Article has been moved to

```vb title="file.vb" 
Dim C As New Connection  
Dim R As New Recordset  
Dim S As String  
Private Sub cmdAdd_Click()  
                txtBno.Text = ""  
                txtBname.Text = ""  
                txtAuthor.Text = ""  
                txtPrice.Text = ""  
                 
                txtBno.SetFocus  
End Sub  
  
Private Sub cmdDelete_Click()  
                Dim id As Integer  
                 
                id = Val(InputBox("Enter Book Number"))  
                 
                R.Close  
                S = "delete from book where bno like '" & id & "'"  
                R.Open S, C, adOpenDynamic, adLockOptimistic  
                S = "select * from book"  
                R.Open S, C, adOpenDynamic, adLockOptimistic  
                If Not R.BOF And Not R.EOF Then  
                                R.MoveFirst  
                                txtBno.Text = R.Fields(0).Value  
                                txtBname.Text = R.Fields(1).Value  
                                txtAuthor.Text = R.Fields(2).Value  
                                txtPrice.Text = R.Fields(3).Value  
                End If  
                 
                MsgBox ("Record Deleted Successfully")  
End Sub  
Private Sub cmdNext_Click()  
                R.MoveNext  
                If Not R.EOF Then  
                                txtBno.Text = R.Fields(0)  
                                txtBname.Text = R.Fields(1).Value  
                                txtAuthor.Text = R.Fields(2).Value  
                                txtPrice.Text = R.Fields(3).Value  
                Else  
                                MsgBox "No More Records!",vbInformation, "Book"  
                End If  
End Sub  
Private Sub cmdSave_Click()  
                R.Close  
                S = "Insert Into book Values(" & Val(txtBno.Text) & ",'" &txtBname.Text& "','" &txtAuthor.Text& "', " & Val(txtPrice.Text) & ")"  
                R.Open S, C, adOpenDynamic, adLockOptimistic  
                S = "Select * From book"  
                R.Open S, C, adOpenDynamic, adLockOptimistic  
                If Not R.BOF And Not R.EOF Then  
                                R.MoveFirst  
                                txtBno.Text = R.Fields(0).Value  
                                txtBname.Text = R.Fields(1).Value  
                                txtAuthor.Text = R.Fields(2).Value  
                                txtPrice.Text = R.Fields(3).Value  
                End If  
                MsgBox "Book Added Successfully!",vbInformation, "Book"  
End Sub  
Private Sub Form_Load()  
                S = "Select * From book"  
                C.Open "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:UsersRamdasDocumentsbook.mdb;Persist Security Info=False"  
                R.Open S, C, adOpenDynamic, adLockOptimistic  
                If Not R.BOF And Not R.EOF Then  
                                R.MoveFirst  
                                txtBno.Text = R.Fields(0).Value  
                                txtBname.Text = R.Fields(1).Value  
                                txtAuthor.Text = R.Fields(2).Value  
                                txtPrice.Text = R.Fields(3).Value  
                End If  
End Sub  
  
  
  

```

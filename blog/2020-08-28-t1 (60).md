---
title: Write a VB.NET program to create a table Patient (Pid,PName,Contact_No, Disease). Insert records into table and display appropriate message in message box. (Use MS Access to create db)
date: 2020-08-28T15:23:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-net-program-to-create-a-table-patient-pidpnamecontact_no-disease-insert-records-into-table-and-display-appropriate-message-in-message-box-use-ms-access-to-create-db/
---

```vb title="file.vb"
PublicClass Form1  
Dim con AsNew OleDb.OleDbConnection  
Dim da AsNew OleDb.OleDbDataAdapter  
Dim ds AsNew DataSet  
Dim DbProvider AsString  
Dim DbSource AsString  
Dim query AsString  
Dim cmd AsNew OleDb.OleDbCommand  
PrivateSub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs)  
HandlesMyBase.Load  
 DbProvider = "PROVIDER=Microsoft.Jet.OLEDB.4.0;"  
 DbSource = "Data Source = D:Documents_backuppatient.mdb"  
 con.ConnectionString = DbProvider & DbSource  
 con.Open()  
 query = "Select * from pat"  
 da = New OleDb.OleDbDataAdapter(query, con)  
 da.Fill(ds, "pat")  
 DataGridView1.DataSource = ds.Tables("pat")  
EndSub  
PrivateSub btnInsert_Click(ByVal sender As System.Object, ByVal e As  
System.EventArgs) Handles btnInsert.Click  
Dim x AsInteger  
Try  
 query = "insert into pat values("&CInt(TextBox4.Text) &",'"&  
TextBox1.Text &" ',' "& TextBox2.Text &" ', ' "& TextBox3.Text &" ')"  
 cmd = New OleDb.OleDbCommand(query, con)  
 x = cmd.ExecuteNonQuery()  
If (x) Then  
 MsgBox("Data Inserted")  
Else  
 MsgBox("data Not inserted")  
EndIf  
Catch ex As Exception  
 MsgBox(ex)  
EndTry  
 ds.Tables.Clear()  
 query = "Select * from pat"  
 da = New OleDb.OleDbDataAdapter(query, con)  
 da.Fill(ds, "pat")  
 DataGridView1.DataSource = ds.Tables("pat")  
EndSub  
EndClass  

```

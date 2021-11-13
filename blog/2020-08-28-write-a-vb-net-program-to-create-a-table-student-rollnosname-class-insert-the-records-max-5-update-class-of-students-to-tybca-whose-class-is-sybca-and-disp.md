---
title: 'Write a VB.NET program to create a table student (RollNo,SName, Class). Insert the records (Max: 5). Update class of students to „TYBCA‟ whose class is „SYBCA‟ and display updated records in GridView. (Use MS Access to create db)'
date: 2020-08-28T15:24:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-net-program-to-create-a-table-student-rollnosname-class-insert-the-records-max-5-update-class-of-students-to-tybca-whose-class-is-sybca-and-disp/
---
Write a VB.NET program to create a table student (RollNo,SName, Class). Insert the records (Max: 5). Update class of students to „TYBCA‟ whose class is „SYBCA‟ and display updated records in GridView. (Use MS Access to create db) 

<pre><br />PublicClass Form1<br />Dim con AsNew OleDb.OleDbConnection<br />Dim da AsNew OleDb.OleDbDataAdapter<br />Dim ds AsNew DataSet<br />Dim cmd AsNew OleDb.OleDbCommand<br />Dim query AsString<br />Dim dbProvider AsString<br />Dim dbSource AsString<br />PrivateSub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs)<br />HandlesMyBase.Load<br /> dbProvider = "PROVIDER=Microsoft.Jet.OLEDB.4.0;"<br /> dbSource = "Data Source=C:UserstestDocumentsstudentmdb.mdb"<br /> con.ConnectionString = dbProvider & dbSource<br /> con.Open()<br /> da = New OleDb.OleDbDataAdapter("select * from std", con)<br /> da.Fill(ds, "st")<br /> DataGridView1.DataSource = ds.Tables("st")<br />EndSub<br />PrivateSub btnUpdate_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles btnUpdate.Click<br />Dim x AsInteger<br /> query = "update std set sclass='tybca' where sclass='sybca'"<br /> cmd = New OleDb.OleDbCommand(query, con)<br />Try<br /> x = cmd.ExecuteNonQuery()<br />If (x) Then<br /> MsgBox("Data Updated")<br />Else<br /> MsgBox("No data to update")<br />EndIf<br /> ds.Tables.Clear()<br /> da = New OleDb.OleDbDataAdapter("select * from std", con)<br /> da.Fill(ds, "st")<br /> DataGridView1.DataSource = ds.Tables("st")<br />Catch ex As Exception<br /> MsgBox("Exception Occured")<br />EndTry<br />EndSub<br />EndClass<br /><br /></pre>
---
title: Write a VB.NET program to create movie table (Mv_Name,Release_year, Director). Insert the records
date: 2020-08-28T15:25:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-net-program-to-create-movie-table-mv_namerelease_year-director-insert-therecordsmax-5-delete-the-records-of-movies-whose-release-year-is-2015-and-display-appropriate-message-in-mes/
---
Write a VB.NET program to create movie table (Mv_Name,Release_year, Director). Insert therecords(Max: 5). Delete the records of movies whose release year is 2015 and display appropriate message in messagebox.(Use MS Access to create db) 
```vb title="file.vb"
PublicClass Form1
PrivateSub MovBindingNavigatorSaveItem_Click(ByVal sender As System.Object, ByVal
e As System.EventArgs) Handles MovBindingNavigatorSaveItem.Click
Me.Validate()
Me.MovBindingSource.EndEdit()
Me.TableAdapterManager.UpdateAll(Me.MovDataSet)
EndSub
PrivateSub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs)
HandlesMyBase.Load
'TODO: This line of code loads data into the 'MovDataSet.mov' table. You can
move, or remove it, as needed.
Me.MovTableAdapter.Fill(Me.MovDataSet.mov)
EndSub
PrivateSub bttn_del_Click(ByVal sender As System.Object, ByVal e As
System.EventArgs) Handles bttn_del.Click
IfMe.MovTableAdapter.DeleteQuery() Then
 MsgBox("Deleted")
Me.MovTableAdapter.Fill(Me.MovDataSet.mov)
Else
 MsgBox("No record to be deleted")
EndIf
EndSub
EndClass
```
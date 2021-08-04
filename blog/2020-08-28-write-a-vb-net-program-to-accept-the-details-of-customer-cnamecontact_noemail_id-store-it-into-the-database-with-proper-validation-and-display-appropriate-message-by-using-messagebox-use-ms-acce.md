---
title: Write a VB.NET program to accept the details of customer (CName,Contact_No,Email_id). Store it into the database with proper validation and display appropriate message by using Messagebox.(Use MS Access )
date: 2020-08-28T15:25:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-net-program-to-accept-the-details-of-customer-cnamecontact_noemail_id-store-it-into-the-database-with-proper-validation-and-display-appropriate-message-by-using-messagebox-use-ms-acce/
---
Write a VB.NET program to accept the details of customer (CName,Contact_No,Email_id). Store it into the database with proper validation and display appropriate message by using Messagebox.(Use MS Access ) 


```
  
PublicClass Form1  
PrivateSub CustomerBindingNavigatorSaveItem_Click(ByVal sender As System.Object,  
ByVal e As System.EventArgs) Handles CustomerBindingNavigatorSaveItem.Click  
Me.Validate()  
Me.CustomerBindingSource.EndEdit()  
Me.TableAdapterManager.UpdateAll(Me.CustDataSet)  
EndSub  
PrivateSub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs)  
HandlesMyBase.Load  
'TODO: This line of code loads data into the 'CustDataSet.customer' table. You  
can move, or remove it, as needed.  
Me.CustomerTableAdapter.Fill(Me.CustDataSet.customer)  
EndSub  
PrivateSub btninsert_Click(ByVal sender As System.Object, ByVal e As  
System.EventArgs) Handles btninsert.Click  
IfMe.CustomerTableAdapter.InsertQuery(txtname.Text, txtcontact.Text,  
txtemail.Text) Then  
 MsgBox("Data inserted")  
Me.CustomerTableAdapter.Fill(Me.CustDataSet.customer)  
Else  
 MsgBox("Data not inserted")  
EndIf  
EndSub  
EndClass  

```

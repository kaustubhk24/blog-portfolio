---
title: 'Write a VB program to accept the details of students from user & store details in to the database. Using data environment create report. (Use standard ADODC controls) Student (S_Rollno, S_Name, S_Class, S_Address )'
date: 2020-08-28T14:43:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-to-accept-the-details-of-students-from-user-store-details-in-to-the-database-using-data-environment-create-report-use-standard-adodc-controls-student-s_rollno/
---

```
  
  
Private Sub cmdadd_Click()  
  
Adodc1.Recordset.AddNew  
  
Text1.SetFocus  
  
End Sub  
  
Private Sub cmdcancel_Click()  
  
Unload Me  
  
End Sub  
  
Private Sub cmdreport_Click()  
  
DataReport1.Show  
  
End SubEnd Sub  
		  
  
  
  

```

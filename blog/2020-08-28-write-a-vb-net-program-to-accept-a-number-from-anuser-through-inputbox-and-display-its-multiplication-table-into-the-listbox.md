---
title: Write a Vb.net program to accept a number from anuser through InputBox and display its multiplication table into the ListBox
date: 2020-08-28T15:08:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-net-program-to-accept-a-number-from-anuser-through-inputbox-and-display-its-multiplication-table-into-the-listbox/
---

```
  
PublicClass Form1  
PrivateSub Button1_Click(ByVal sender As System.Object, ByVal e As  
System.EventArgs) Handles Button1.Click  
Dim no AsInteger  
Dim i AsInteger  
 no = CInt(InputBox("Enter Number "))  
For i = 1 To 10  
 ListBox1.Items.Add(no * i)  
Next  
EndSub  
EndClass  
  

```

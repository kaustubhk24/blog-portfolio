---
title: Write a Vb.net program to design the following form, accept the numbers through textbox and add them into the ListBoxe1by clicking on Add button. When user click on Prime button then all the prime numbers from ListBox1 should get added into ListBox2.
date: 2020-08-28T15:15:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-net-program-to-design-the-following-form-accept-the-numbers-through-textbox-and-add-them-into-the-listboxe1by-clicking-on-add-button-when-user-click-on-prime-button-then-all-the-prime-num/
---
```vb title="file.vb"
PublicClass Form1
PrivateSub btnAdd_Click(ByVal sender As System.Object, ByVal e As
System.EventArgs) Handles btnAdd.Click
 ListBox1.Items.Add(CInt(TextBox1.Text))
 TextBox1.Text = ""
EndSub
PrivateSub btnPrime_Click(ByVal sender As System.Object, ByVal e As
System.EventArgs) Handles btnPrime.Click
Dim i AsInteger
Dim cnt AsInteger
Dim num AsInteger
Dim f AsInteger
Dim j AsInteger
 cnt = ListBox1.Items.Count
 Try
For i = 0 To cnt - 1
 num = ListBox1.Items(i)
 f = 0
For j = 2 To num  2
If num Mod j = 0 Then
 f = 1
EndIf
Next
If f = 0 Then
 ListBox2.Items.Add(ListBox1.Items(i))
ListBox1.Items.RemoveAt(i)
cnt = cnt - 1
 i = i - 1
EndIf
Next
Catch ex As Exception
EndTry
EndSub
EndClass
```
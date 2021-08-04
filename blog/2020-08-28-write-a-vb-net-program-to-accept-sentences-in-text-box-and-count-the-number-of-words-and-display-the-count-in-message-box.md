---
title: Write a Vb.net program to accept sentences in text box and count the number of words and display the count in message box
date: 2020-08-28T15:14:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-net-program-to-accept-sentences-in-text-box-and-count-the-number-of-words-and-display-the-count-in-message-box/
---

```
  
PublicClass Form1  
PrivateSub Button1_Click(ByVal sender As System.Object, ByVal e As  
System.EventArgs) Handles Button1.Click  
Dim sentence AsString  
Dim i AsInteger  
Dim wc AsInteger  
 sentence = TextBox1.Text  
Dim arr() AsChar = sentence.ToCharArray()  
For i = 0 To arr.Length - 1  
If arr(i) = " "Then  
 wc = wc + 1  
EndIf  
Next  
 MsgBox("Total Words "& wc + 1)  
EndSub  
EndClass  
  

```

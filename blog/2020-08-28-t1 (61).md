---
title: Write a Vb.net program to check whether entered string is palindrome or not.
date: 2020-08-28T15:06:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-net-program-to-check-whether-entered-string-is-palindrome-or-not/
---

```vb title="file.vb"
PublicClass Form1  
PrivateSub Button1_Click(ByVal sender As System.Object, ByVal e As  
System.EventArgs) Handles Button1.Click  
Dim str1 AsString  
 str1 = TextBox1.Text  
If str1 = StrReverse(str1) Then  
 MsgBox("String is palindrome")  
Else  
 MsgBox("String is not palindrome")  
EndIf  
EndSub  
EndClass  
  

```

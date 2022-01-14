---
title: Write a Vb.net program to accept number from user into the TextBox.Calculate the square root of that number also convert the entered number into binary number and display result into the Message Box
date: 2020-08-28T15:12:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-net-program-to-accept-number-from-user-into-the-textbox-calculate-the-square-root-of-that-number-also-convert-the-entered-number-into-binary-number-and-display-result-into-the-message-box/
---

```vb title="file.vb"
PublicClass Form1  
PrivateSub Button1_Click(ByVal sender As System.Object, ByVal e As  
System.EventArgs) Handles Button1.Click  
Dim no AsInteger  
Dim sqr AsDouble  
Dim rm AsInteger  
Dim str1 AsString  
 no = CInt(TextBox1.Text)  
 sqr = Math.Sqrt(no)  
While no  
 rm = no Mod 2  
 str1 = str1 & rm  
 no = no  2  
EndWhile  
 MsgBox(sqr &" and"& StrReverse(str1))  
EndSub  
End Class  
  

```

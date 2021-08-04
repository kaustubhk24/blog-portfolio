---
title: Write a Vb.net program to accept a character from keyboard and check whether it is vowel or not. Also display the case of that character.
date: 2020-08-28T15:14:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-net-program-to-accept-a-character-from-keyboard-and-check-whether-it-is-vowel-or-not-also-display-the-case-of-that-character/
---

```
  
PublicClass Form1  
PrivateSub Button1_Click(ByVal sender As System.Object, ByVal e As  
System.EventArgs) Handles Button1.Click  
Dim c AsString  
Dim asc1 AsInteger  
 c = TextBox1.Text  
 asc1 = Asc(c)  
' MsgBox(asc1)  
  
If c = "a"Or c = "A"Or c = "e"Or c = "E"Or c = "i"Or c = "I"Or c = "o"Or c =  
"O"Or c = "u"Or c = "U"Then  
If asc1 <= 122 And asc1 >= 97 Then  
 MsgBox("vowel in Lowercase")  
Else  
 MsgBox("vowel in Uppercase")  
EndIf  
ElseIf asc1 <= 122 And asc1 >= 97 Then  
 MsgBox("Not Vowel in Lowercase")  
Else  
 MsgBox("Not Vowel in Uppercase")  
EndIf  
EndSub  
EndClass  
  
  

```

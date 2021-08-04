---
title: Write a Vb.net program to accept n numbers through InputBox and count the number of Armstrong and Perfect numbers among them and display their count by using messagebox.
date: 2020-08-28T15:10:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-net-program-to-accept-n-numbers-through-inputbox-and-count-the-number-of-armstrong-and-perfect-numbers-among-them-and-display-their-count-by-using-messagebox/
---

```
  
  
PublicClass Form1  
PrivateSub Button1_Click(ByVal sender As System.Object, ByVal e As  
System.EventArgs) Handles Button1.Click  
Dim no(10) AsInteger  
Dim i AsInteger  
Dim num AsInteger  
Dim num2 AsInteger  
Dim r AsInteger  
Dim armno AsInteger  
Dim perfct AsInteger  
Dim cntarm AsInteger  
Dim cntperfct AsInteger  
Dim nm AsInteger  
For i = 0 To 10 - 1  
 no(i) = CInt(InputBox("Enter Number"))  
Next  
For i = 0 To 10 - 1  
 num = no(i)  
 armno = 0  
 perfct = 0  
 num2 = num  
While num  
 r = num Mod 10  
 armno = armno + r * r * r  
 num = num  10  
EndWhile  
If armno = num2 Then  
 cntarm = cntarm + 1  
EndIf  
 num = num2  
 nm = 1  
While nm <= num2  2  
If num2 Mod nm = 0 Then  
 perfct = perfct + nm  
EndIf  
 nm = nm + 1  
EndWhile  
If perfct = num Then  
 cntperfct = cntperfct + 1  
EndIf  
Next  
 MsgBox("Armstrong numbers "& cntarm)  
NR Classes (8796064387 / 90) Page 3  
 MsgBox("Perfect numbers "& cntperfct)  
EndSub  
EndClass  
  
  

```

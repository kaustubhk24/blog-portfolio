---
title: Write a Vb.net program for blinking an image
date: 2020-08-28T15:07:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-net-program-for-blinking-an-image/
---
Article has been moved to

```vb title="file.vb"
  
PublicClass Form1  
PrivateSub Timer1_Tick(ByVal sender As System.Object, ByVal e As  
System.EventArgs) Handles Timer1.Tick  
If PictureBox1.Visible = TrueThen  
 PictureBox1.Visible = False  
Else  
 PictureBox1.Visible = True  
EndIf  
EndSub  
EndClass  
  

```

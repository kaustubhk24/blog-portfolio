---
title: Write a Vb.Net program to move the Text “Kaustubh K..com” continuously from Left to Right.
date: 2020-08-28T15:08:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-net-program-to-move-the-text-justinclicks-com-continuously-from-left-to-right/


---
```vb title="file.vb"
PublicClass Form1
PrivateSub Timer1_Tick(ByVal sender As System.Object, ByVal e As
System.EventArgs) Handles Timer1.Tick
If Label1.Left &gt; 400 Then
 Label1.Left = 10
EndIf
 Label1.Left = Label1.Left + 15
EndSub
EndClass
```
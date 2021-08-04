---
title: Write a VB program to design Traffic signal using shape control.
date: 2020-08-28T14:50:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-to-design-traffic-signal-using-shape-control/
---

```
  
  
Private Sub Timer1_Timer()  
If Shape3.BackColor = vbGreen Then  
Shape2.BackColor = vbYellow  
Shape3.BackColor = vbWhite  
Timer1.Interval = 500  
ElseIf Shape2.BackColor = vbYellow Then  
Shape1.BackColor = vbRed  
Shape2.BackColor = vbWhite  
Timer1.Interval = 5000  
Else  
Shape3.BackColor = vbGreen  
Shape1.BackColor = vbWhite  
Timer1.Interval = 3500  
End If  
End Sub  
  
  

```

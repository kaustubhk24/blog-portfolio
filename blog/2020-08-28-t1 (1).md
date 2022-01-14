---
title: 'Write a menu driven program in VB for i. Addition ii. Subtraction iii. Multiplication iv. Division'
date: 2020-08-28T14:40:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-menu-driven-program-in-vb-for-i-addition-ii-subtraction-iii-multiplication-iv-division/
---
Write a menu driven program in VB for i. Addition ii. Subtraction iii. Multiplication iv. Division 


```vb title="file.vb"
Private Sub cmdClear_Click()  
Text1.Text =     
Text2.Text =     
Text3.Text =     
Text1.SetFocus  
End Sub  
Private Sub cmdExit_Click()  
Unload Me  
End Sub  
Private Sub mnuadd_Click()  
Text3.Text = Val(Text1.Text) + Val(Text2.Text)  
End Sub  
Private Sub mnuDiv_Click()  
Text3.Text = Val(Text1.Text) / Val(Text2.Text)  
End Sub  
Private Sub mnuMult_Click()  
Text3.Text = Val(Text1.Text) * Val(Text2.Text)  
End Sub  
Private Sub mnusub_Click()  
Text3.Text = Val(Text1.Text)   Val(Text2.Text)  
End Sub  
  
  
  
  

```

---
title: 'Write a VB program for dragging and dropping multiple objects. (Take two command buttons RESET and EXIT, and four image controls). When user click on reset button then all images will go to original position.'
date: 2020-08-28T14:50:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-for-dragging-and-dropping-multiple-objects-take-two-command-buttons-reset-and-exit-and-four-image-controls-when-user-click-on-reset-button-then-all-images-will-go-to-origin/
---

```vb title="file.vb"
Private Sub Command1_Click()  
For i = 1 To 4  
Image1(i).Visible = True  
Next  
End Sub  
  
Private Sub Command1_DragDrop(Source As Control, X As Single, Y As Single)  
BadDrop Source  
  
End Sub  
  
Private Sub Command2_Click()  
Unload Me  
End Sub  
  
Private Sub Command2_DragDrop(Source As Control, X As Single, Y As Single)  
BadDrop Source  
End Sub  
  
Private Sub Command2_DragOver(Source As Control, X As Single, Y As Single, State As Integer)  
Source.Visible = False  
End Sub  
  
Private Sub Form_DragDrop(Source As Control, X As Single, Y As Single)  
Dim i As Integer  
For i = 1 To 4  
Image1(i).DragIcon = Image1(i).Picture  
Next  
End Sub  
  
Private Sub Form_DragOver(Source As Control, X As Single, Y As Single, State As Integer)  
Source.Visible = False  
End Sub  
  
Private Sub Picture1_DragDrop(Source As Control, X As Single, Y As Single)  
Picture1.Picture = Source.Picture  
End Sub  
Private Sub BadDrop(Source)  
Source.Visible = True  
End Sub  
  

```

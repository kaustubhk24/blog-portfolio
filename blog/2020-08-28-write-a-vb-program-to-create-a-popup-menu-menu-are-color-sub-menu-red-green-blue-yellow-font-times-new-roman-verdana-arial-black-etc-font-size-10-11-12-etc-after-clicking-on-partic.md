---
title: 'Write a VB Program to create a POPUP menu. Menu are Color (sub menu- red, green, blue, yellow), Font (Times New Roman, Verdana, Arial Black etc), Font Size (10, 11, 12 etc) after clicking on particular menu changes should reflect on Label control'
date: 2020-08-28T14:31:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-to-create-a-popup-menu-menu-are-color-sub-menu-red-green-blue-yellow-font-times-new-roman-verdana-arial-black-etc-font-size-10-11-12-etc-after-clicking-on-partic/
---
Article has been moved to

```vb title="file.vb" 
Private Sub Form_MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)  
	If Button AndvbRightButton Then  
		PopupMenumnuMenu  
	End If  
  
  
End Sub  
  
Private Sub mnuArial_Click()  
	Label1.FontName = "Arial Black"  
End Sub  
  
Private Sub mnuGreen_Click()  
	Label1.ForeColor = vbGreen  
End Sub  
  
Private Sub mnuRed_Click()  
	Label1.ForeColor = vbRed  
End Sub  
  
Private Sub mnuSize10_Click()  
	Label1.FontSize = 10  
End Sub  
  
Private Sub mnuSize12_Click()  
	Label1.FontSize = 12  
End Sub  
  
Private Sub mnuTNR_Click()  
	Label1.FontName = "Times New Roman"  
End Sub  
  
Private Sub mnuVer_Click()  
	Label1.FontName = "Verdana"  
End Sub  
  
  

```

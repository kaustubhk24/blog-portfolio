---
title: 'Create the following application in VB. The form should contain the following menu Draw Modify Exit Circle Shrink Expand Erase On selection of the menu option ‘Circle’, a circle should be drawn on the screen. The user can Shrink, Expand or Erase the circle by selecting the menu option or by displaying a popup menu after the right mouse button is clicked or pressed. The popup menu should contain the option Shrink, Expand or Erase which should perform the same operation as the menu option.'
date: 2020-08-28T14:05:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /create-the-following-application-in-vb-the-form-should-contain-the-following-menu-draw-modify-exit-circle-shrink-expand-erase-on-selection-of-the-menu-option-circle/
---
Article has been moved to

```cpp title="file.vb"
Private Sub Form_MouseDown(Button As Integer, Shift As Integer, X As Single, Y As    Single)  
	If Button AndvbRightButton Then  
		PopupMenumnuModify  
	End If  
End Sub  
  
Private Sub mnuCircle_Click()  
	Shape1.Visible = True  
End Sub  
  
Private Sub mnuErase_Click()  
	Shape1.Visible = False  
	Shape2.Visible = False  
	  
  
End Sub  
  
Private Sub mnuExpand_Click()  
	Shape2.Visible = False  
	Shape1.Visible = True  
	  
End Sub  
  
Private Sub mnuShrink_Click()  
	Shape2.Visible = True  
	Shape1.Visible = False  
End Sub  
  

```

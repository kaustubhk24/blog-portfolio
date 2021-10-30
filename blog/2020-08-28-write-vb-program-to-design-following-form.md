---
title: Write VB program to design following form
date: 2020-08-28T14:41:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-vb-program-to-design-following-form/
---
Article has been moved to

[![](https://1.bp.blogspot.com/-O5Xd__AGE84/X0kXemr1PWI/AAAAAAAAfgw/fe9-18WRlnsga64NDQPt8TuP8NsMhL5ZQCLcBGAsYHQ/s400/1.png)](https://1.bp.blogspot.com/-O5Xd__AGE84/X0kXemr1PWI/AAAAAAAAfgw/fe9-18WRlnsga64NDQPt8TuP8NsMhL5ZQCLcBGAsYHQ/s314/1.png)


User will select color from option button and style from check boxes that should apply to text in text boxes. When user press on Display button that image should be displayed in the picture box. 


```vb title="file.vb" 
  
Private Sub Command1_Click()  
    If Option1(0).Value Then  
        Text1.ForeColor = vbRed  
        Text2.ForeColor = vbRed  
    ElseIf Option1(1).Value Then  
        Text1.ForeColor = vbGreen  
        Text2.ForeColor = vbGreen  
    ElseIf Option1(2).Value Then  
        Text1.ForeColor = vbBlue  
        Text2.ForeColor = vbBlue  
    Else  
        Text1.ForeColor = vbBlack  
        Text2.ForeColor = vbBlack  
    End If  
    If Check1.Value = 1 Then  
        Text1.Font.Bold = True  
        Text2.Font.Bold = True  
    Else  
        Text1.Font.Bold = False  
        Text2.Font.Bold = False  
    End If  
    If Check2.Value = 1 Then  
        Text1.Font.Italic = True  
        Text2.Font.Italic = True  
    Else  
        Text1.Font.Italic = False  
        Text2.Font.Italic = False  
    End If  
    If Check3.Value = 1 Then  
        Text1.Font.Underline = True  
        Text2.Font.Underline = True  
    Else  
        Text1.Font.Underline = False  
        Text2.Font.Underline = False  
    End If  
End Sub  
  
Private Sub Command2_Click()  
Text1.Text = ""  
Text2.Text = ""  
Check1.Value = 0  
Check2.Value = 0  
Check3.Value = 0  
For i = 0 To 3  
Option1(i).Value = False  
Next  
Picture1.Picture = LoadPicture("")  
  
End Sub  
  
Private Sub Command3_Click()  
Unload Me  
End Sub  
  
Private Sub Image1_Click()  
Picture1.Picture = Image1.Picture  
End Sub						       
  
  
  

```

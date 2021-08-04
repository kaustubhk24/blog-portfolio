---
title: Write a VB Program to accept the number from the user in text box and display multiplication table of that number into the list box.
date: 2020-08-28T14:25:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-to-accept-the-number-from-the-user-in-text-box-and-display-multiplication-table-of-that-number-into-the-list-box/
---

```vb title="file.vb"
Private Sub cmdShow_Click()  
  
no = Val(Text1.Text)  
For i = 1 To 10 Step 1  
List1.AddItem (no &" x " & i & " = " & no * i)  
Next  
End Sub  
  
  

```

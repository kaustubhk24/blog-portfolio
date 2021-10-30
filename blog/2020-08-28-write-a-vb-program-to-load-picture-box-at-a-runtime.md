---
title: Write a VB program to load picture box at a runtime
date: 2020-08-28T14:42:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-to-load-picture-box-at-a-runtime/
---
Article has been moved to

```vb title="file.vb" 
Private Sub Form_Load()  
                 
                Dim pc As Control  
                Set pc = Controls.Add("VB.PictureBox", "MyPicture")  
                pc.Left = 100  
                pc.Top = 100  
                pc.Width = 10000  
                pc.Height = 6000  
                pc.Picture = LoadPicture("C:UsersRamdasPicturesnr_visiting_card0002.jpg")  
               pc.Visible = True  
                 
End Sub  
  
  

```

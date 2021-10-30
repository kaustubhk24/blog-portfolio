---
title: 'Write a VB a program to accept a string from user if the string contain any integer number that get replaced by *.'
date: 2020-08-28T14:49:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-a-program-to-accept-a-string-from-user-if-the-string-contain-any-integer-number-that-get-replaced-by/
---
Article has been moved to

```vb title="file.vb"
  
Private Sub Command1_Click()  
  
                Dim str As String  
                Dim str1 As String  
                str = Text1.Text  
                str1 = Replace(str, "9", "*")  
                str1 = Replace(str1, "8", "*")  
                str1 = Replace(str1, "7", "*")  
                str1 = Replace(str1, "6", "*")  
                str1 = Replace(str1, "5", "*")  
                str1 = Replace(str1, "4", "*")  
                str1 = Replace(str1, "3", "*")  
                str1 = Replace(str1, "2", "*")  
                str1 = Replace(str1, "1", "*")  
                str1 = Replace(str1, "0", "*")  
                Text1.Text = str1  
End Sub  
    
            
  
  

```

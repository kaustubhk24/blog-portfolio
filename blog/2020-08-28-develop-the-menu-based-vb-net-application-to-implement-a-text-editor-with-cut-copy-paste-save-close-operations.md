---
title: Develop the menu based Vb.net application to implement a text editor with cut, copy, paste, save, close operations.
date: 2020-08-28T15:21:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /develop-the-menu-based-vb-net-application-to-implement-a-text-editor-with-cut-copy-paste-save-close-operations/
---
Article has been moved to

```vb title="file.vb"
Imports System.IO  
PublicClass Form1  
Dim s AsNew SaveFileDialog  
Dim sw As StreamWriter  
Dim filename AsString  
PrivateSub CloseToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As  
System.EventArgs) Handles CloseToolStripMenuItem.Click  
End  
EndSub  
PrivateSub CutToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As  
System.EventArgs) Handles CutToolStripMenuItem.Click  
 RichTextBox1.Cut()  
EndSub  
  
  
PrivateSub PasteToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As  
System.EventArgs) Handles PasteToolStripMenuItem.Click  
 RichTextBox2.Paste()  
EndSub  
PrivateSub CopyToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As  
System.EventArgs) Handles CopyToolStripMenuItem.Click  
 RichTextBox1.Copy()  
EndSub  
PrivateSub SaveToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As  
System.EventArgs) Handles SaveToolStripMenuItem.Click  
If s.ShowDialog = Windows.Forms.DialogResult.OK Then  
 filename = s.FileName  
 sw = New StreamWriter(filename)  
 sw.Write(RichTextBox1.Text)  
 sw.Close()  
EndIf  
EndSub  
EndClass  

```

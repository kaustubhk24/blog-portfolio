---
title: Write a VB.NET program to do the following operations on RichTextBox values i) Font Style ii) Font Color iii) Save iv) Open
date: 2020-08-28T15:22:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-net-program-to-do-the-following-operations-on-richtextbox-values-i-font-style-ii-font-color-iii-save-iv-open/
---
Article has been moved to
Write a VB.NET program to do the following operations on RichTextBox values i) Font Style ii) Font Color iii) Save iv) Open 


```vb title="file.vb"
  
Imports System.IO  
PublicClass Form1  
Dim f AsNew FontDialog  
Dim c AsNew ColorDialog  
Dim s AsNew SaveFileDialog  
Dim op AsNew OpenFileDialog  
Dim filename AsString  
Dim searh AsString  
Dim sw As StreamWriter  
Dim sr As StreamReader  
PrivateSub Form1_Resize(ByVal sender AsObject, ByVal e As System.EventArgs)  
HandlesMe.Resize  
 RichTextBox1.Size = Me.Size  
EndSub  
PrivateSub FontStyleToolStripMenuItem_Click(ByVal sender As System.Object, ByVal  
e As System.EventArgs) Handles FontStyleToolStripMenuItem.Click  
If f.ShowDialog() = Windows.Forms.DialogResult.OK Then  
 RichTextBox1.Font = f.Font  
EndIf  
EndSub  
PrivateSub FontColorToolStripMenuItem_Click(ByVal sender As System.Object, ByVal  
e As System.EventArgs) Handles FontColorToolStripMenuItem.Click  
If c.ShowDialog() = Windows.Forms.DialogResult.OK Then  
 RichTextBox1.ForeColor = c.Color  
EndIf  
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
PrivateSub OpenToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As  
System.EventArgs) Handles OpenToolStripMenuItem.Click  
If op.ShowDialog = Windows.Forms.DialogResult.OK Then  
'Process.Start(op.FileName)  
 sr = New StreamReader(op.OpenFile)  
 RichTextBox1.Text = sr.ReadToEnd()  
 sr.Close()  
EndIf  
EndSub  
EndClass  

```

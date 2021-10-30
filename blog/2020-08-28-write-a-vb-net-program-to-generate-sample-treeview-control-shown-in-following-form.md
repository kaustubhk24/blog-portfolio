---
title: Write a Vb.net program to generate Sample TreeView control shown in following form
date: 2020-08-28T15:18:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-net-program-to-generate-sample-treeview-control-shown-in-following-form/
---
Article has been moved to

```vb title="file.vb"
public class Form1  
Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As  
System.EventArgs) Handles Button1.Click  
 TreeView2.Nodes.Add("Computer Science")  
 TreeView2.Nodes(0).Nodes.Add("BCA")  
 TreeView2.Nodes(0).Nodes.Add("BCS")  
 TreeView2.Nodes(0).Nodes.Add("MCA")  
 TreeView2.Nodes(0).Nodes(0).Nodes.Add("FYBCA")  
 TreeView2.Nodes(0).Nodes(0).Nodes.Add("SYBCA")  
 TreeView2.Nodes(0).Nodes(0).Nodes.Add("TYBCA")  
 TreeView2.Nodes(0).Nodes(1).Nodes.Add("FYBCS")  
 TreeView2.Nodes(0).Nodes(1).Nodes.Add("SYBCS")  
 TreeView2.Nodes(0).Nodes(1).Nodes.Add("TYBCS")  
 TreeView2.Nodes(0).Nodes(2).Nodes.Add("MCA(I)")  
 TreeView2.Nodes(0).Nodes(2).Nodes.Add("MCA(II)")  
 TreeView2.Nodes(0).Nodes(2).Nodes.Add("MCA(III)")  
 'TreeView2.Nodes.Add("2Main Menu")  
 'TreeView2.Nodes(1).Nodes.Add("Submenu")  
 End Sub  
End Class  

```

---
title: Write a Vb.net program to design the following form, it contains the three menus Color (Red,Blue,Green) ,Window(Maximize, Minimize, Restore) and Exit. On Selection of any menu or submenu result should affect the form control( for example if user selected Red color from Color menu back color of form should get changed to Red and if user selected Maximize from Window Menu then form should get maximized).
date: 2020-08-28T15:19:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-net-program-to-design-the-following-form-it-contains-the-three-menus-color-redbluegreen-windowmaximize-minimize-restore-and-exit-on-selection-of-any-menu-or-submenu-result-should/
---


```vb title="file.vb"

PublicClass Form1
PrivateSub RedToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As
System.EventArgs) Handles RedToolStripMenuItem.Click
Me.BackColor = Color.Red
EndSub
PrivateSub GreenToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As
System.EventArgs) Handles GreenToolStripMenuItem.Click
Me.BackColor = Color.Green
EndSub
PrivateSub BlueToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As
System.EventArgs) Handles BlueToolStripMenuItem.Click
Me.BackColor = Color.Blue
EndSub
PrivateSub MaximizeToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e
As System.EventArgs) Handles MaximizeToolStripMenuItem.Click
Me.WindowState = FormWindowState.Maximized
EndSub
PrivateSub MinimizeToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e
As System.EventArgs) Handles MinimizeToolStripMenuItem.Click
Me.WindowState = FormWindowState.Minimized
EndSub
PrivateSub CloseToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As
System.EventArgs) Handles CloseToolStripMenuItem.Click
Me.WindowState = FormWindowState.Normal
EndSub
PrivateSub ExToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As
System.EventArgs) Handles ExToolStripMenuItem.Click
End
EndSub
EndClass
```
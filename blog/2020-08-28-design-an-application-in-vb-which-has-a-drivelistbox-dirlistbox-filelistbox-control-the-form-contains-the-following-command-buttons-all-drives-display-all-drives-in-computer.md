---
title: 'Design an application in VB which has a Drivelistbox, Dirlistbox, Filelistbox control.           The form contains the following command buttons:             All drives: Display all drives in computer (including network drives)             All subdirectories: Display all subfolders of the currently selected directory.  All files : Display a popup menu which contains the following options: a. All document files                             b   All bitmaps c    All files           On selection of option, display the specified type.'
date: 2020-08-28T14:15:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /design-an-application-in-vb-which-has-a-drivelistbox-dirlistbox-filelistbox-control-the-form-contains-the-following-command-buttons-all-drives-display-all-drives-in-computer/
---
Design an application in VB which has a Drivelistbox, Dirlistbox, Filelistbox control. The form contains the following command buttons: All drives: Display all drives in computer (including network drives) All subdirectories: Display all subfolders of the currently selected directory. All files : Display a popup menu which contains the following options: a. All document files b All bitmaps c All files On selection of option, display the specified type. 

![IMG](https://1.bp.blogspot.com/-hJUFmFvqGSQ/X0kRT0jSBfI/AAAAAAAAff8/Z-XJOHn7Nvc_CgXMdl3K3BTUSLRe94qcACLcBGAsYHQ/s1366/1.png "img")

```vb title="file.vb"
Private Sub cmdAddDrives_Click()
lstResult.AddItem Drive1.List(I)
Next
End Sub
Private Sub cmdAllFiles_MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
If Button = 1 Then
PopupMenu mnuFiles
End If
End Sub
Private Sub cmdAllSubDirectories_Click()
lstResult.Clear
For I = 0 To Dir1.ListCount – 1
lstResult.AddItem Dir1.List(I)
Next
End Sub
Private Sub cmdClear_Click()
lstResult.Clear
End Sub
Private Sub Dir1_Change()
File1.Path = Dir1.Path
End Sub
Private Sub Drive1_Change()
Dir1.Path = Drive1.Drive
End Sub
Private Sub mnuAllFiles_Click()
File1.Pattern = “*.*”
For I = 0 To File1.ListCount – 1
lstResult.AddItem File1.List(I)
Next
End Sub
Private Sub mnuBitmaps_Click()
File1.Pattern = “*.bmp”
For I = 0 To File1.ListCount – 1
lstResult.AddItem File1.List(I)
Next
End Sub
Private Sub mnuText_Click()
File1.Pattern = “*.txt”
For I = 0 To File1.ListCount – 1
lstResult.AddItem File1.List(I)
Next
End Sub

```
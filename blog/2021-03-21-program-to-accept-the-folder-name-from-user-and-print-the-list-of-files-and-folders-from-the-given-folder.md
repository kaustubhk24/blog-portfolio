---
title: Program to accept the folder name from user and print the list of files and folders from the given folder.
date: 2021-03-21T06:19:54+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-to-accept-the-folder-name-from-user-and-print-the-list-of-files-and-folders-from-the-given-folder/
---
```vb title="file.vb"
import os
filenames = next(os.walk(input("Please copy paste path of folder : ")))[2]
print("Following are the files in folder\n")
print("-----------------------------------------------")
print("File Number File Names ")
print("-----------------------------------------------")
for file in filenames:
 print(str(filenames.index(file)+1)+" "+ str(file))
print("-----------------------------------------------")
```

output:

```vb title="file.vb"

Please copy paste path of folder : C:\Users\Kaustubh K.\Downloads\Python\LAB 2
Following are the files in folder
-----------------------------------------------
File Number File Names
-----------------------------------------------
1 1.jpg
2 download.jpg
3 File.txt
4 LAB 2 16-03-2021.ipynb
5 LAB 2 Python_File Handling.pdf
6 student.dat
-----------------------------------------------
```
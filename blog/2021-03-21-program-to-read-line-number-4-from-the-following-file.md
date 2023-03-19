---
title: Program to read line number 4 from the following file
date: 2021-03-21T06:18:29+00:00
authors: kaustubh

slug: /program-to-read-line-number-4-from-the-following-file/
---

```python title="file.py"
*# Write a program to read line number 4 from the following file*
*# Line1*
*# Line2*
*# Line3*
*# Line4*
*# Line5*
*# Line6*


def findInFile(file_name,line_no):
 count=0
 file=open(file_name)
 lines=file.readlines()
 print(lines[line_no+1])
findInFile("file.txt",4)
```

output:

```python title="Output"
 Etiam non quam lacus suspendisse faucibus interdum posuere.

```

_ 
_
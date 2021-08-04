---
title: Write a program to implement composition
date: 2021-04-24T06:22:57+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-program-to-implement-composition/
---
```python title="file.py"
class A:
 def __init__(self):
 print('Class - A Contructor')
 def m1(self):
 print('M1 method of Class - A.')
class B:
 def __init__(self):
 print('Class - B Constructor.')
 def m2(self):
 obj = A()
 obj.m1()
 print('M2 method of Class - B.')
obj = B()
obj.m2()
```

output:

```python title="Output"
Class - B Constructor.
Class - A Contructor
M1 method of Class - A.
M2 method of Class - B.
```
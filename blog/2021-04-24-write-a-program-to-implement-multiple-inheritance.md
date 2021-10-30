---
title: Write a program to implement multiple inheritance.
date: 2021-04-24T06:19:29+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-program-to-implement-multiple-inheritance/





---
Article has been moved to
```python title="file.py"
class Class1:
 def m(self):
 print("In Class1")
class Class2(Class1):
 def m(self):
 print("In Class2")
class Class3(Class1):
 def m(self):
 print("In Class3")
class Class4(Class2, Class3):
 pass
Class1.m(1)
Class2.m(1)
Class3.m(1)
Class4.m(1)
```

Output:

```python title="Output"
In Class1
In Class2
In Class3
In Class2
```
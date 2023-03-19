---
title: Write a program to implement abstraction.
date: 2021-04-24T06:24:54+00:00
authors: kaustubh

slug: /write-a-program-to-implement-abstraction/
---
```python title="file.py"
class One:
 def disp(self):
 pass
class Two(One):
 def disp(self):
 print("Abstract method body in sub Class")
obj = Two()
obj.disp()
```

output:

```python title="Output"
Abstract method body in sub Class

```
---
title: Write a program to implement abstraction.
date: 2021-04-24T06:24:54+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

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
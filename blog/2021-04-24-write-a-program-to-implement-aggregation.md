---
title: Write a program to implement aggregation
date: 2021-04-24T06:23:50+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-program-to-implement-aggregation/
---
Article has been moved to
```python title="file.py"
class Heart:
 def __init__(self, heartValves):
 self.heartValves = heartValves
 def display(self):
 return self.heartValves
class Person:
 def __init__(self, fname, heartValves):
 self.fname = fname
 self.heartValves = heartValves # Aggregation
 def display(self):
 print("First Name: ", self.fname)
 print("No of Healthy Valves: ", hv.display())
hv = Heart(4)
p = Person("ABC", hv)
p.display()
```

output:

```python title="Output"

First Name: ABC
No of Healthy Valves: 4
```
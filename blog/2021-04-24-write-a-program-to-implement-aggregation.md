---
title: Write a program to implement aggregation
date: 2021-04-24T06:23:50+00:00
authors: kaustubh

slug: /write-a-program-to-implement-aggregation/
---
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
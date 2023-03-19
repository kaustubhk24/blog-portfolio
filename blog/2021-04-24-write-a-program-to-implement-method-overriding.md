---
title: Write a program to implement method overriding.
date: 2021-04-24T06:21:54+00:00
authors: kaustubh

slug: /write-a-program-to-implement-method-overriding/
---
```python title="file.py"
class Fruits:
 def show(self):
 print("This is Fruits class")
class Apple(Fruits):
 def show(self):
 print("Apple")
a=Apple()
a.show()
f=Fruits()
f.show()
```

output:

```python title="Output"
Apple
This is Fruits class
```
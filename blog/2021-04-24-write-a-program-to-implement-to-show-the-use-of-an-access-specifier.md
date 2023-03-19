---
title: Write a program to implement to show the use of an access specifier.
date: 2021-04-24T06:25:49+00:00
authors: kaustubh

slug: /write-a-program-to-implement-to-show-the-use-of-an-access-specifier/
---
```python title="file.py"
class User:
 def __init__(self, name, age):
 self.usrName = name
 self.usrAge = age
 def displayAge(self):
 print("Age: ", self.usrAge)
obj = User("ABC", 20)
print("Name: ", obj.usrName)
obj.displayAge()
```

output:

```python title="Output"
Name: ABC
Age: 20
```
---
title: Write a program to implement the constructor.
date: 2021-04-24T06:18:23+00:00
authors: kaustubh

slug: /write-a-program-to-implement-the-constructor/





---
```python title="file.py"
import operator
from operator import eq, add, sub,mul
class calculator:
 first, second = 0, 0
 def __init__(self, f, s):
 self.first = f
 self.second = s
 def calculate(self):
 print("Answer is ",self.first+self.second)
n1=int(input("Enter No one : "))
n2=int(input("Enter No two : "))
obj = calculator(n1,n2)
obj.calculate()
```

Output:

```python title="Output"

Enter No one : 4
Enter No two : 5
Answer is 9
```
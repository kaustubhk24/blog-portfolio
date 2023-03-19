---
title: Program to Check If a 3 Digit Number Is Armstrong Number or Not
date: 2021-05-22T01:36:19+00:00
authors: kaustubh

slug: /program-to-check-if-a-3-digit-number-is-armstrong-number-or-not/
---
Que > Program to Check If a 3 Digit Number Is Armstrong Number or Not

```python title="file.py"
from math import *
def armstrong(number):
 result = 0
 n = 0
 temp = number
 while (temp != 0):
 temp =int(temp / 10)
 n = n + 1
 temp = number
 while (temp != 0):
 remainder = temp % 10
 result = result + pow(remainder, n)
 temp = int(temp/10)
 if(result == number):
 print("Armstrong number")
 else:
 print("Not an Armstrong number")
number = int(input("Enter the number : "))
if(len(str(number))==3):
 armstrong(number)
else:
 print("Enter 3 digit number")
```

## 

```python title="Output"
Enter the number : 371
Armstrong number
```
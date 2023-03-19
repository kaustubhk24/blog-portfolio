---
title: 'Program To Display Reversal Of Number'
date: 2021-02-21T06:25:31+00:00
authors: kaustubh

slug: /program-to-display-reversal-of-number/
---
```python title="file.py"
# Write a program to display reversal of number
num=int(input("Enter a number : "))
reverse=0
while num>0:
 rem=num%10
 reverse=(reverse*10)+rem
 num=num//10
print("Reversed Number is : " +str(reverse))
```

```python title="file.py"
output:
Enter a number : 1569
Reversed Number is : 9651
```
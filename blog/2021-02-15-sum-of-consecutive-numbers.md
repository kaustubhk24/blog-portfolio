---
title: Sum of Consecutive Numbers
date: 2021-02-15T06:40:29+00:00
authors: kaustubh

slug: /sum-of-consecutive-numbers/
---
Problem

```python title="file.py"
No one likes homework, but your math teacher has given you an assignment to find the sum of the first N numbers.
Let's save some time by creating a program to do the calculation for you!
Take a number N as input and output the sum of all numbers from 1 to N (including N).
Sample input
100
Sample Output
5050
Explanation: The sum of all numbers from 1 to 100 is equal to 5050.

```

```python title="file.py"
Program
N = int(input())
sum=0
x=range(1,N+1)
#your code goes here
for i in x:
 sum=sum+i
print(sum)
```
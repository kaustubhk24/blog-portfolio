---
title: Fibonacci
date: 2021-02-19T02:19:45+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /fibonacci/
---
The Fibonacci sequence is one of the most famous formulas in mathematics. 
Each number in the sequence is the **sum of the two numbers that precede it**. 
For example, here is the Fibonacci sequence for 10 numbers, starting from 0: 0,1,1,2,3,5,8,13,21,34.

Write a program to take N (variable num in code template) positive numbers as input, and recursively calculate and output the first N numbers of the Fibonacci sequence (starting from 0).

**Sample Input** 
6

**Sample Output** 
 
1 
1 
2 
3 
5



 If you are making the Fibonacci sequence for n numbers, you should use n<=1 condition as the **base case**.  






```python title="file.py"
#Program
nterms = int(input())
def recur_fibo(n):
 if n <= 1:
 return n
 else:
 return(recur_fibo(n-1) + recur_fibo(n-2))
if nterms <= 0:
 print("Plese enter a positive integer")
else:
 for i in range(nterms):
 print(recur_fibo(i))
```

```python title="file.py"
Input:
7
Output:
1
1
2
3
5
8
```
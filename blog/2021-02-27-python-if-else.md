---
title: Python If-Else
date: 2021-02-27T02:44:09+00:00
authors: kaustubh

slug: /python-if-else/
---
**Task** 
Given an integer, n, perform the following conditional actions:

 * If  n is odd, print `Weird`
 * If  n is even and in the inclusive range of 2 to 5, print `Not Weird`
 * If n is even and in the inclusive range of  6 to 20 , print `Weird`
 * If n is even and greater than 20, print `Not Weird`

**input Format**

A single line containing a positive integer, n .

**Constraints**

 * 1<=n<=100

**Output Format**

Print `Weird` if the number is weird. Otherwise, print `Not Weird`.

**Sample input 0**


```
3

```


**Sample Output 0**


```
Weird

```


**Explanation 0**

n=3 
 n is odd and odd numbers are weird, so print `Weird`.

**Sample input 1**


```
24

```


**Sample Output 1**


```
Not Weird

```


**Explanation 1**

n=24 
 n>20 and n is even, so it is not weird.



```python title="file.py"
# Answer
#!/bin/python3
import math
import os
import random
import re
import sys
if __name__ == '__main__':
 N = int(input().strip())
if N % 2 != 0:
 print ("Weird")
else:
 if N >= 2 and N <= 5:
 print ("Not Weird")
 elif N >= 6 and N <= 20:
 print ("Weird")
 elif N > 20:
 print ("Not Weird")
```

```python title="file.py"
Output:
3
Weird
```
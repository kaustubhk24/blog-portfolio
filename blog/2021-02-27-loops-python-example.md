---
title: Loops Python Example
date: 2021-02-27T02:53:08+00:00
authors: kaustubh

slug: /loops-python-example/
---
**Task** 
The provided code stub reads and integer, n, from STDIN. For all non-negative integers i2.

**Example**

n=3

The list of non-negative integers that are less than n=3  is [0,1,2] . Print the square of each number on a separate line.


```
0
1
4

```


**input Format**

The first and only line contains the integer, n .

**Constraints**

1<=n<=20

**Output Format**

Print n lines, one corresponding to each i.

**Sample input 0**


```
5

```


**Sample Output 0**


```
0
1
4
9
16

```


```python title="file.py"
# Answer
if __name__ == '__main__':
 n = int(input())
if 1<=n and n<=20:
 for i in range(0,n):
 print(i**2)
```

```python title="file.py"
# Output
5
1
4
9
16
```
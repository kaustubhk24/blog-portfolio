---
title: Print Function
date: 2021-02-27T03:16:06+00:00
authors: kaustubh

slug: /print-function/
---
The included code stub will read an integer,n, from STDIN.

Without using any string methods, try to print the following:

123..

Note that ".." represents the consecutive values in between.

**Example**

n=5

Print the string12345.

**input Format**

The first line contains an integer n.

**Constraints**

1<=n<=150

**Output Format**

Print the list of integers from1throughn as a string, without spaces.

**Sample input 0**


```
3

```


**Sample Output 0**


```
123
```


```vb title="file.vb"
#Answer
if __name__ == '__main__':
 n = int(input())
str1=""
if 1<=n and n<=150:
 for i in range(1,n+1):
 str1=str1+str(i)
 print(str1)
 
```

```vb title="file.vb"
Output:
3
123
```
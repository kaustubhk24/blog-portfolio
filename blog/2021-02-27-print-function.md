---
title: Print Function
date: 2021-02-27T03:16:06+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /print-function/
---
Article has been moved to
The included code stub will read an integer,n, from STDIN.

Without using any string methods, try to print the following:

123..

Note that ".." represents the consecutive values in between.

**Example**

n=5

Print the string12345.

**Input Format**

The first line contains an integer n.

**Constraints**

1<=n<=150

**Output Format**

Print the list of integers from1throughn as a string, without spaces.

**Sample Input 0**


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
---
title: Longest Word
date: 2021-02-18T13:01:08+00:00
authors: kaustubh

slug: /longest-word/
---
Given a text as input, find and output the longest word. 
 
**Sample input** 
this is an awesome text 
 
**Sample Output** 
awesome



 Recall the'**split(' ')**'method, which returns a list of words of the string.
 




```python title="file.py"
Program
txt = input()
arr=txt.split(' ')
print(max(arr, key=len))
```

```python title="file.py"
input:
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
Output:
consectetur

```
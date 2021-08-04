---
title: Longest Word
date: 2021-02-18T13:01:08+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /longest-word/
---
Given a text as input, find and output the longest word. 
 
**Sample Input** 
this is an awesome text 
 
**Sample Output** 
awesome



 Recall the�**split(� �)**�method, which returns a list of words of the string.
 




```vb title="file.vb"
Program
txt = input()
arr=txt.split(' ')
print(max(arr, key=len))
```

```vb title="file.vb"
Input:
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
Output:
consectetur

```
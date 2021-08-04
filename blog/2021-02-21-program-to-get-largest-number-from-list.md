---
title: Program To Get Largest Number From List
date: 2021-02-21T06:06:04+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-to-get-largest-number-from-list/
---
```vb title="file.vb"
# Write a program to get largest number from list
list1=[*range(1,50)]
print(max(list1))
#alternate method
largest=0
for i in list1:
 if i>largest:
 largest=i
print(largest)
```

```vb title="file.vb"
Output:
49
49
```
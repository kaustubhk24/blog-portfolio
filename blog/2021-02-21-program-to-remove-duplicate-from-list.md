---
title: 'Program To Remove Duplicate From List'
date: 2021-02-21T06:11:29+00:00
authors: kaustubh

slug: /program-to-remove-duplicate-from-list/
---
```python title="file.py"
# Write a program to remove duplicate from list
list1=[5,1,2,3,4,5,6,7,8,1,2,3,0,9,8,6,4,3]
print(list(dict.fromkeys(list1)))
```

```python title="file.py"
Output:
[5, 1, 2, 3, 4, 6, 7, 8, 0, 9]

```
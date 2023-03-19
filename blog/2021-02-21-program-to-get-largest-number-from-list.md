---
title: Program To Get Largest Number From List
date: 2021-02-21T06:06:04+00:00
authors: kaustubh

slug: /program-to-get-largest-number-from-list/
---
```python title="file.py"
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

```python title="file.py"
Output:
49
49
```
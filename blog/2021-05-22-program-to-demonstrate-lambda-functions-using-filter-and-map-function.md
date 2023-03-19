---
title: Program to demonstrate lambda functions using filter() and map() function
date: 2021-05-22T01:46:06+00:00
authors: kaustubh

slug: /program-to-demonstrate-lambda-functions-using-filter-and-map-function/
---
Que > Program to demonstrate lambda functions using filter() and map() function

```python title="file.py"
tup= (5, 7, 22, 97, 54, 62, 77, 23, 73, 61)
print(tuple(map(lambda x: x+1 , tup)))
y = filter(lambda x: (x>=10), tup)
print(list(y))
```

```python title="Output"
(6, 8, 23, 98, 55, 63, 78, 24, 74, 62)
[22, 97, 54, 62, 77, 23, 73, 61]
```
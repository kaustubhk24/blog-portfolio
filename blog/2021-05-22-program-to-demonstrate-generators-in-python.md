---
title: Program to demonstrate Generators in Python
date: 2021-05-22T01:45:07+00:00
authors: kaustubh

slug: /program-to-demonstrate-generators-in-python/
---
Que > Program to demonstrate Generators in Python

```python title="file.py"
def func(a):
 yield a
a=[1,2,3]
b=func(a)
next(b)
```

```python title="Output"
[1, 2, 3]

```
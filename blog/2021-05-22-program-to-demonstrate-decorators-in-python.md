---
title: Program to demonstrate Decorators in Python
date: 2021-05-22T01:42:32+00:00
authors: kaustubh

slug: /program-to-demonstrate-decorators-in-python/
---
Que > Program to demonstrate Decorators in Python

```python title="file.py"
def first(msg):
 print(msg)
def second(func, msg):
 func(msg)
second(first, "Hello!")
```

```python title="Output"
Hello!

```
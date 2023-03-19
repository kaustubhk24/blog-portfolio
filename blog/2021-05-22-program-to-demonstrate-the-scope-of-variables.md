---
title: Program to demonstrate the Scope of Variables
date: 2021-05-22T01:37:23+00:00
authors: kaustubh

slug: /program-to-demonstrate-the-scope-of-variables/
---
Que > Program to demonstrate the Scope of Variables

```python title="file.py"
a="Global"
def fun(a):
 print(a)
print(a)
fun("Local")
```

```python title="Output"
Global
Local
```
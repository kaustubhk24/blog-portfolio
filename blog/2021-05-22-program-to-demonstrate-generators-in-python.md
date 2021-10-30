---
title: Program to demonstrate Generators in Python
date: 2021-05-22T01:45:07+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-to-demonstrate-generators-in-python/
---
Article has been moved to
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
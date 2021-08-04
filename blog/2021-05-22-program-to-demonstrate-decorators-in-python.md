---
title: Program to demonstrate Decorators in Python
date: 2021-05-22T01:42:32+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

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
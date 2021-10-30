---
title: Program to demonstrate lambda functions using filter() and map() function
date: 2021-05-22T01:46:06+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-to-demonstrate-lambda-functions-using-filter-and-map-function/
---
Article has been moved to
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
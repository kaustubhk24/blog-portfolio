---
title: Program to demonstrate the Scope of Variables
date: 2021-05-22T01:37:23+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-to-demonstrate-the-scope-of-variables/
---
Que > Program to demonstrate the Scope of Variables

```vb title="file.vb"
a="Global"
def fun(a):
 print(a)
print(a)
fun("Local")
```

```vb title="file.vb"
Global
Local
```
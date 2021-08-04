---
title: Write a program to implement method overriding.
date: 2021-04-24T06:21:54+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-program-to-implement-method-overriding/
---
```vb title="file.vb"
class Fruits:
 def show(self):
 print("This is Fruits class")
class Apple(Fruits):
 def show(self):
 print("Apple")
a=Apple()
a.show()
f=Fruits()
f.show()
```

output:

```vb title="file.vb"
Apple
This is Fruits class
```
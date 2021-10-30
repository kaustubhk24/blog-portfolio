---
title: 'Program to demonstrate the Use of *args and **kwargs'
date: 2021-05-22T01:40:47+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-to-demonstrate-the-use-of-args-and-kwargs/
---
Article has been moved to
Que > Program to demonstrate the Use of \*args and \**kwargs

```python title="file.py"
def adder(*num,**data):
 sum = 0
 for n in num:
 sum = sum + n
 print("Sum:",sum)
 for key, value in data.items():
 print("{} is {}".format(key,value))
adder(3,5,Firstname="K", Lastname="K", Age=222, Phone=1234567890)
```

```python title="Output"

Sum: 8
Firstname is K
Lastname is K
Age is 222
Phone is 1234567890
```
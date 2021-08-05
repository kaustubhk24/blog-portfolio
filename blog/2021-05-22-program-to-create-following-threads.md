---
title: Program to create following threads
date: 2021-05-22T01:54:51+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-to-create-following-threads/
---

*  First thread to print the square of a number entered by user,
*  Second thread to print the cube of a number and show the result. Use start and join operations.

```python title="file.py"
from _thread import *
import threading as thread
def sqr(name,num):
 print(name+" : ",num*num)
def cube(name,num):
 print(name+" : ",num*num*num)
try:
 no=int(input("enter number : "))
 thread.start_new_thread( sqr, ("\nThread - 1: Square:", no ) )
 thread.start_new_thread( cube, ("\nThread - 2: Cube :", no ) )
 #join()
 numTuple = ['1', '2', '3', '4']
 print("#".join(numTuple))
except Exception as e:
 print ("Error: ",e)
```

```python title="Output"
enter number : 9
1#2#3#4
Thread - 1: Square: : 81
Thread - 2: Cube : : 729

```
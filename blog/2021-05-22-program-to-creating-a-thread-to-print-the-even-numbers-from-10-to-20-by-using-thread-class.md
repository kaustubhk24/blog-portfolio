---
title: 'Program to creating a thread to print the even numbers from 10 to 20 by using Thread Class'
date: 2021-05-22T01:53:18+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-to-creating-a-thread-to-print-the-even-numbers-from-10-to-20-by-using-thread-class/
---
Article has been moved to
Que > Program to creating a thread to print the even numbers from 10 to 20 by using Thread Class

```python title="file.py"
from _thread import *
import threading as thread
def even(name,timer):
 for i in range(10,20):
 if i%2==0:
 print(name+" : "+str(i))
try:
 thread.start_new_thread( even, ("Thread", 2, ) )
except Exception as e:
 print ("Error: ",e)
```

```python title="Output"
Thread : 10
Thread : 12
Thread : 14
Thread : 16
Thread : 18
```
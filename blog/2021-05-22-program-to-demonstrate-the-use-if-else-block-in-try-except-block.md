---
title: Program to demonstrate the use if else block in Try Except block
date: 2021-05-22T01:52:11+00:00
authors: kaustubh

slug: /program-to-demonstrate-the-use-if-else-block-in-try-except-block/
---
Que > Program to demonstrate the use if else block in Try Except block

```python title="file.py"
def divider(x, y):
 try:
 result = x // y
 except ZeroDivisionError:
 print("Error: dividing by zero ")
 else:
 print("Answer is :", result)
 finally:
 print('Program Terminated')
divider(3, 2)
```

```python title="Output"
Answer is : 1
Program Terminated
```
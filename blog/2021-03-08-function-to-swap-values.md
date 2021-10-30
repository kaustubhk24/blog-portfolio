---
title: 'Write a Function To Swap Values - Python'
date: 2021-03-08T06:47:21+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /function-to-swap-values/
---
Article has been moved to
Let us see program to Function To Swap Values,

### Using Temporary Variable

```python title="file.py"
# method Using Temporary Variable
def swap(a,b):
 temp=a
 a=b
 b=temp
 return a,b
```

Output

```vb title="file.vb"
print(swap(7,3))
>> (3,7)
```

### Direct Method

```vb title="file.vb"

def swap(a,b):
 return b,a
```

Output:

```vb title="file.vb"
print(swap(3,7))
>>(7,3)
```

### Without Using Temporary Variable

```vb title="file.vb"
def swap(a,b):
 a=b+a
 b=a-b
 a=a-b
 return a,b
```

```vb title="file.vb"
print(swap(5,7))
>>(7,5)

```
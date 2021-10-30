---
title: Create a Python class named Rectangle constructed by a length and width and a method that will compute the area of a rectangle.
date: 2021-04-24T06:17:04+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /create-a-python-class-named-rectangle-constructed-by-a-length-and-width-and-a-method-that-will-compute-the-area-of-a-rectangle/




---
Article has been moved to
# 

```python title="file.py"
class Rectangle:
 def __init__(self, length, width):
 self.length = length
 self.width = width
 def area(self):
 return self.length * self.width
l=float(input("Please Enter Length of Rectangle : "))
w=float(input("Please Enter width of Rectangle : "))
r = Rectangle(l, w)
print("Area of Rectangle is :{} ".format(r.area()))
```

## Output:

```python title="Output"
Please Enter Length of Rectangle : 4
Please Enter width of Rectangle : 5
Area of Rectangle is :20.0 
```
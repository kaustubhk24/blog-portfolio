---
title: Create a Python class named Rectangle constructed by a length and width and a method that will compute the area of a rectangle.
date: 2021-04-24T06:17:04+00:00
authors: kaustubh

slug: /create-a-python-class-named-rectangle-constructed-by-a-length-and-width-and-a-method-that-will-compute-the-area-of-a-rectangle/




---
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
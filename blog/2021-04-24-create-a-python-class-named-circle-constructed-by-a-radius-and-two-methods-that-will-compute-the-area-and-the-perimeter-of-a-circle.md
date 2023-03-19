---
title: Create a Python class named Circle constructed by a radius and two methods that will compute the area and the perimeter of a circle.
date: 2021-04-24T06:15:33+00:00
authors: kaustubh

slug: /create-a-python-class-named-circle-constructed-by-a-radius-and-two-methods-that-will-compute-the-area-and-the-perimeter-of-a-circle/





---
```python title="file.py"
class Circle():
 def __init__(self, r):
 self.radius = r
 def area(self):
 return self.radius ** 2 * 3.14
 def perimeter(self):
 return 2 * self.radius * 3.14
NewCircle = Circle(float(input("Please Enter Radius of Circle : ")))
print("Area of Circle is :{} ".format(NewCircle.area()))
print("Perimeter of Circle is :{} ".format(NewCircle.perimeter()))
```

Output:

```python title="Output"

Please Enter Radius of Circle : 5
Area of Circle is :78.5
Perimeter of Circle is :31.400000000000002 
```
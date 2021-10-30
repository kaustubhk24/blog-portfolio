---
title: Calculate and Add the Surface Area of Two Cubes. Use Nested Functions
date: 2021-05-22T01:38:23+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /calculate-and-add-the-surface-area-of-two-cubes-use-nested-functions/
---
Article has been moved to
Que > Calculate And Add The Surface Area Of Two Cubes. Use Nested Functions

```python title="file.py"
def SurfaceAreaOf2Cubes(a1,a2):
 A1=6*a1*a1
 print("Surface Area of First Cube is ",A1)
 def SAO2C(a2):
 A2=6*a2*a2
 print("Surface Area of Second Cube is ",A2)
 def Total(A1,A2):
 print("After adding ",A1+A2)
 Total(A1,A2)
 SAO2C(a2)
SurfaceAreaOf2Cubes(int(input("Enter Edge of First Cube :")),int(input("Enter Edge of First Cube :")))
```

```python title="Output"
Enter Edge of First Cube :15
Enter Edge of First Cube :12
Surface Area of First Cube is 1350
Surface Area of Second Cube is 864
After adding 2214
```
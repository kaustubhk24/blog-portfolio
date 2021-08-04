---
title: Juice Maker
date: 2021-05-23T06:03:19+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /juice-maker/
---
 

You are given a **Juice** class, which has **name** and **capacity** properties. 
You need to complete the code to enable and adding of two **Juice** objects, resulting in a new **Juice** object with the combined capacity and names of the two juices being added. 
 
For example, if you add an Orange juice with 1.0 capacity and an Apple juice with 2.5 capacity, the resulting juice should have: 
name: **Orange&Apple** 
capacity: **3.5** 
 
The names have been combined using an **&** symbol.



 Use the ___a___** method to define a custom behavior for the + operator and return the resulting object.
 




Program Answer >

```python title="file.py"
class Juice:
 def __init__(self, name, capacity):
 self.name = name
 self.capacity = capacity
 def __add__(self, other):
 return self.name + "&" + other.name + " (" + str(self.capacity + other.capacity) + "L)"
a = Juice('Orange', 1.5)
b = Juice('Apple', 2.0)
result = a + b
print(result)
```

```python title="Output"
Input
No Input
Your Output
Orange&Apple (3.5L)
Expected Output
Orange&Apple (3.5L)
```
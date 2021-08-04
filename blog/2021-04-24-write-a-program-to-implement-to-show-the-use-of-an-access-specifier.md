---
title: Write a program to implement to show the use of an access specifier.
date: 2021-04-24T06:25:49+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-program-to-implement-to-show-the-use-of-an-access-specifier/
---
```vb title="file.vb"
class User:
 def __init__(self, name, age):
 self.usrName = name
 self.usrAge = age
 def displayAge(self):
 print("Age: ", self.usrAge)
obj = User("ABC", 20)
print("Name: ", obj.usrName)
obj.displayAge()
```

output:

```vb title="file.vb"
Name: ABC
Age: 20
```
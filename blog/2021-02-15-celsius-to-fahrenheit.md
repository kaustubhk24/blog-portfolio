---
title: Celsius to Fahrenheit
date: 2021-02-15T07:37:58+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /celsius-to-fahrenheit/
---
Article has been moved to
You are making a Celsius to Fahrenheit converter. 
Write a function to take the Celsius value as an argument and return the corresponding Fahrenheit value. 
 
**Sample Input** 
36 
 
**Sample Output** 
96.8



Program

```python title="file.py"
celsius = int(input())
def conv(c):
 return c*(9/5)+32
fahrenheit = conv(celsius)
print(fahrenheit)
```
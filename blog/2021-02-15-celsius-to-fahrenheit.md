---
title: Celsius to Fahrenheit
date: 2021-02-15T07:37:58+00:00
authors: kaustubh

slug: /celsius-to-fahrenheit/
---
You are making a Celsius to Fahrenheit converter. 
Write a function to take the Celsius value as an argument and return the corresponding Fahrenheit value. 
 
**Sample input** 
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
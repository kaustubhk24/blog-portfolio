---
title: Program To Perform Various Operatios Of String in Python
date: 2021-02-21T06:50:35+00:00
authors: kaustubh

slug: /program-to-perform-various-operatios-of-string-in-python/
---
```python title="file.py"
# Write a program to perform various operatios of string
str1=str(input("Enter String : "))
# Length of string
print(len(str1))
# checking if substring present or not
print("abc " in str1)
# reversing string
print(str1[::-1])
# trimming string
print(str1.strip())
# Encoding String
print(str1.encode())
#Lowercase
print(str1.lower())
# Uppercase
print(str1.upper())
```

```python title="file.py"
Output:
Enter String : Kaustubh K..com Blogs
Kaustubh K..com Blogs
18
False
Kaustubh K..com Blogs
b'Kaustubh K..com Blogs'
Kaustubh K..com blogs
Kaustubh K..COM BLOGS
```
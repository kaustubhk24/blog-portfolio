---
title: 'Program To Display Reversal Of Number'
date: 2021-02-21T06:25:31+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-to-display-reversal-of-number/
---
Article has been moved to
```python title="file.py"
# Write a program to display reversal of number
num=int(input("Enter a number : "))
reverse=0
while num>0:
 rem=num%10
 reverse=(reverse*10)+rem
 num=num//10
print("Reversed Number is : " +str(reverse))
```

```python title="file.py"
output:
Enter a number : 1569
Reversed Number is : 9651
```
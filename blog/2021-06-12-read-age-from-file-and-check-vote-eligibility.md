---
title: Read Age From File and check vote eligibility
date: 2021-06-12T01:06:54+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /read-age-from-file-and-check-vote-eligibility/
---
 

** Que >** Write a program to read Name and age of person from file named &#8216;file.txt' and print if person is eligible for voting or not.


```txt title="file.txt"
Your Name,24
```
```python title="Program.py"
def checkAge(name,age):
    if (int(age)>18):
        print(name+" is eligible for voting")
    else:
        print(name+" is not eligible for voting")
f=open("file.txt")
content=f.read()
data=content.split(",")
checkAge(data[0],data[1])
```

** Output > **
![Output](https://www.kaustubh.codes/imgs/wp-content/uploads/2021/06/image.png "Output")
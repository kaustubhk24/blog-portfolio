---
title: 'Print Smallest And Largest Numbers From List - Python'
date: 2021-03-08T06:52:21+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /print-smallest-and-largest-numbers-from-list-python/



---
Article has been moved to
```python title="file.py"
list1=[]
n=int(input("Enter Number of elements :"))
for i in range(1,n+1):
 list1.append(int(input("Enter Element : ")))
print(list1)
print("Max is :"+str(max(list1)))
print("Min is :"+str(min(list1)))

```

Output:

```python title="file.py"
Enter Number of elements :4
Enter Element : 5
Enter Element : 6
Enter Element : 7
Enter Element : 8
[5, 6, 7, 8]
Max is :8
Min is :5
```
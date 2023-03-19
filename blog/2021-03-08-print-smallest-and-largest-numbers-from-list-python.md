---
title: 'Print Smallest And Largest Numbers From List - Python'
date: 2021-03-08T06:52:21+00:00
authors: kaustubh

slug: /print-smallest-and-largest-numbers-from-list-python/



---
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
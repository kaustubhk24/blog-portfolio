---
title: Program To Read Person's Age From Keyboard And Display Whether Is Eligible For Voting Or Not
date: 2021-02-21T06:38:45+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-to-read-persons-age-from-keyboard-and-display-whether-is-eligible-for-voting-or-not/
---
Article has been moved to
```python title="file.py"
# Write a program to read person's age from keyboard and display whether is eligible for voting or not
def isEligible(age):
 if age>18:
 print("Eligible for voting")
 else:
 print("Not eligible for voting")
isEligible(int(input("Enter Age : ")))
```

```python title="file.py"
Output:
Enter Age : 19
Eligible for voting
Enter Age : 13
Not eligible for voting
```
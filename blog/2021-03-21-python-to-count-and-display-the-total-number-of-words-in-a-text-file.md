---
title: Python to count and display the total number of words in a text file.
date: 2021-03-21T06:07:21+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /python-to-count-and-display-the-total-number-of-words-in-a-text-file/
---

```python title="file.py"
# Write a function in Python to count and display the total number of words in a text file.

def countWords(file_name):
 file=open(file_name)
 lines=file.readlines()
 count=0
 for line in lines:
 words=line.split()
 count+=len(words)
 return count
 #calling function
print("Number of words in file = ",countWords("file.txt"))
```

output:

```python title="Output"
Number of words in file = 108

```
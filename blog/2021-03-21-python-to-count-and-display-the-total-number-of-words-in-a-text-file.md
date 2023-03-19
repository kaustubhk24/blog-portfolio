---
title: Python to count and display the total number of words in a text file.
date: 2021-03-21T06:07:21+00:00
authors: kaustubh

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
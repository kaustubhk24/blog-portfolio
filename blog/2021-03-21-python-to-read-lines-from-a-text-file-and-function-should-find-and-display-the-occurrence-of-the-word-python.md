---
title: 'Python to read lines from a text file and function should find and display the occurrence of the word "Python".'
date: 2021-03-21T06:09:01+00:00
authors: kaustubh

slug: /python-to-read-lines-from-a-text-file-and-function-should-find-and-display-the-occurrence-of-the-word-python/




---

```
*# Write a function in Python to read lines from a text file and function should find and display the occurrence of the word "Python".*

```


```python title="file.py"
def findInFile(file_name,wordToFind):
 count=0
 file=open(file_name)
 lines=file.readlines()
 for line in lines:
 words=line.split()
 for word in words:
 if (word==wordToFind):
 count+=1
 print(wordToFind+" Found "+str(count)+" times, Line Number : "+str(lines.index(line)))
findInFile("file.txt","Python")
```

output:

```python title="Output"

Python Found 1 times, Line Number : 3
Python Found 2 times, Line Number : 4
Python Found 3 times, Line Number : 6
Python Found 4 times, Line Number : 10
```
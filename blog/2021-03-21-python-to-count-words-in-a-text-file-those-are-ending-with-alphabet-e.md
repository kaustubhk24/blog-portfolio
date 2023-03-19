---
title: 'function in Python to count words in a text file those are ending with alphabet "e"'
date: 2021-03-21T06:14:16+00:00
authors: kaustubh

slug: /python-to-count-words-in-a-text-file-those-are-ending-with-alphabet-e/




---
```python title="file.py"
def checkLastChar(file_name,last):
 count=0
 print("Words Ending with "+last)
 file=open(file_name)
 lines=file.readlines()
 for line in lines:
 words=line.split()
 for word in words:
 if word[-1]==last:
 count+=1
 print("Word : {}".format(word))
checkLastChar("file.txt","e")
```

output:

```python title="Output"

Words Ending with e
Word : labore
Word : dolore
Word : pellentesque
Word : ornare
Word : suspendisse
Word : vitae
Word : ornare
Word : suspendisse
Word : Pellentesque
Word : fusce
Word : vulputate
Word : vulputate
Word : vitae
```
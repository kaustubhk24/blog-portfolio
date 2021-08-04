---
title: Function display_words() in python to read lines from a text file, and display those words, which are less than 4 characters.
date: 2021-03-21T06:12:41+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /function-display-words-in-python-to-read-lines-from-a-text-file-and-display-those-words-which-are-less-than-4-characters/
---

```python title="file.py"
# Write a function display_words() in python to read lines from a text file, and display those words, which are less than 4 characters*
```


```python title="file.py"
**def** wordSizeChecker(file_name,wordSize):
    count=0
    file=open(file_name)
    lines=file.readlines()
    **for** line **in** lines:
        words=line.split()
        **for** word **in** words:
            **if** (len(word){} , Length : **{}**".format(word,str(len(word))))
wordSizeChecker("file.txt",4)
```


Output:

```python title="Output"

Word : sit , Length : 3
Word : sed , Length : 3
Word : do , Length : 2
Word : ut , Length : 2
Word : et , Length : 2
Word : A , Length : 1
Word : at , Length : 2
Word : at. , Length : 3
Word : non , Length : 3
Word : sit , Length : 3
Word : id , Length : 2
Word : ut , Length : 2
Word : Leo , Length : 3
Word : ut , Length : 2
Word : sit , Length : 3
Word : sit , Length : 3
Word : et , Length : 2
Word : leo , Length : 3
Word : ut , Length : 2
Word : sed , Length : 3
Word : id , Length : 2
```
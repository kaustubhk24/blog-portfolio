---
title: Search Engine
date: 2021-02-15T07:02:46+00:00
authors: kaustubh

slug: /search-engine/
---
Problem

```python title="file.py"
You're working on a search engine. Watch your back Google!
The given code takes a text and a word as input and passes them to a function called search().
The search() function should return "Word found" if the word is present in the text, or "Word not found", if it's not.
Sample input
"This is awesome"
"awesome"
Sample Output
Word found
```

Program:

```python title="file.py"

text = input()
word = input()
def search(text,word):
 if(word in text):
 return "Word found"
 else:
 return "Word not found"
print(search(text, word))
```
---
title: Search Engine
date: 2021-02-15T07:02:46+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /search-engine/
---
Problem

```vb title="file.vb"
You�re working on a search engine. Watch your back Google!
The given code takes a text and a word as input and passes them to a function called search().
The search() function should return "Word found" if the word is present in the text, or "Word not found", if it�s not.
Sample Input
"This is awesome"
"awesome"
Sample Output
Word found
```

Program:

```vb title="file.vb"

text = input()
word = input()
def search(text,word):
 if(word in text):
 return "Word found"
 else:
 return "Word not found"
print(search(text, word))
```
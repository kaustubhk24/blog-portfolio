---
title: Book Titles
date: 2021-02-18T07:41:06+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /book-titles/
---
Article has been moved to
You have been asked to make a special book categorization program, which assigns each book a special code based on its title. 
The code is equal to the first letter of the book, followed by the number of characters in the title. 
For example, for the book "Harry Potter", the code would be:'**H12**, as it contains 12 characters (including the space). 
 
You are provided a'**books.txt'**file, which includes the book titles, each one written on a separate line. 
Read the title one by one and output the code for each book on a separate line. 
 
For example, if the books.txt file contains: 
Some book 
Another book 
 
Your program should output: 
S9 
A12



 Recall the'**readlines()**'method, which returns a list containing the lines of the file.  
Also, remember that all lines, except the last one, contain a'**\n**'at the end, which should not be included in the character count.
 




```python title="file.py"
Program :
file = open("/usercode/files/books.txt", "r")
#your code goes here
a=file.readlines();
for b in a:
 if not a[-1]==b:
 print(b[0]+str(len(b)-1))
print (a[-1][0]+str(len(b)))
file.close()
```

```python title="file.py"
Output:
H12
T16
P19
G18

```
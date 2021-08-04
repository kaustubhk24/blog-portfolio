---
title: function in python to read the content from a text file line by line and display the same on screen
date: 2021-03-21T06:06:06+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /function-in-python-to-read-the-content-from-a-text-file-line-by-line-and-display-the-same-on-screen/




---
 


```
*Write a function in python to read the content from a text file line by line and display the same on screen*

```


```vb title="file.vb"
# function Defination
def LineByLine(file_name):
 file=open(file_name)
 print("Data in {} is below\n".format(file_name))
 lines=file.readlines()
 for line in lines:
 print(line)
# Function call
LineByLine("file.txt")
```

output:

```vb title="file.vb"
Data in file.txt is below
Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 A iaculis at erat pellentesque adipiscing commodo elit at.
 Purus faucibus ornare suspendisse sed. Python
 Tortor Python vitae purus faucibus ornare suspendisse.
 Etiam non quam lacus suspendisse faucibus interdum posuere.
 Pellentesque Python dignissim enim sit amet venenatis urna cursus eget.
 Feugiat nisl pretium fusce id velit ut tortor pretium viverra.
Leo duis ut diam quam nulla porttitor massa. Varius sit amet mattis vulputate enim nulla.
Interdum varius sit amet mattis vulputate enim. Sagittis vitae et leo duis ut diam.
Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Python
```
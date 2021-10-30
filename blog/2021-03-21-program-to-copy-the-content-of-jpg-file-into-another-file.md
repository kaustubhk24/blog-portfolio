---
title: Program to copy the content of .jpg file into another file
date: 2021-03-21T06:20:50+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-to-copy-the-content-of-jpg-file-into-another-file/
---
Article has been moved to
```python title="Output"
with open('download.jpg','rb') as firstfile, open('1.jpg','wb') as secondfile:
 # read content from first file
 for line in firstfile:
 # append content to second file
 secondfile.write(line)
print("file copied successfully")
```

output:

```python title="file.py"
file copied successfully

```
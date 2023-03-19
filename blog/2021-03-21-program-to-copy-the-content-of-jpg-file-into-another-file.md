---
title: Program to copy the content of .jpg file into another file
date: 2021-03-21T06:20:50+00:00
authors: kaustubh

slug: /program-to-copy-the-content-of-jpg-file-into-another-file/
---
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
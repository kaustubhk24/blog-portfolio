---
title: Program to for all type of file Errors occurred in opening a file input by user and perform operation like read write and append on file, close the file in finally block.
date: 2021-05-22T01:51:06+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-to-for-all-type-of-file-errors-occurred-in-opening-a-file-input-by-user-and-perform-operation-like-read-write-and-append-on-file-close-the-file-in-finally-block/
---
Que > Program to for all type of file Errors occurred in opening a file input by user and perform operation like read write and append on file, close the file in finally block.

```python title="file.py"
file_name=str(input('Please enter valid file name :'))
try:
 f=open(file_name)
 n=input("Enter content to write on file :")
 f.write(n)
 f.close()
except ValueError:
 print("ValueError- Please enter valid File Name")
except OSError:
 print ("Could not open/read file:", file_name)
except FileNotFoundError:
 print ("File does not exists:", file_name)
except IOError:
 print('file not found', file_name)
except e as Exception:
 print("Exception occured ",e)
finally:
# f.close()
 print("Program terminated")
```

```python title="Output"

Please enter valid file name :k
Could not open/read file: k
Program terminated
```
---
title: Program to reads an image, display image and then represents the image in array
date: 2021-05-31T07:51:21+00:00
authors: kaustubh

slug: /program-to-reads-an-image-display-image-and-then-represents-the-image-in-array/
---
 

** Code > **

```python title="file.py"
import matplotlib.pyplot as plt
import matplotlib.image as img
testImage = img.imread('https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2021/05/python-programming-language-1.png')
plt.imshow(testImage)
print(testImage)
```

** Output > **

```python title="Output"
[[[1. 1. 1.]
  [1. 1. 1.]
  [1. 1. 1.]
  ...
  [1. 1. 1.]
  [1. 1. 1.]
  [1. 1. 1.]]
 [[1. 1. 1.]
  [1. 1. 1.]
  [1. 1. 1.]
  ...
  [1. 1. 1.]
  [1. 1. 1.]
  [1. 1. 1.]]
 [[1. 1. 1.]
  [1. 1. 1.]
  [1. 1. 1.]
  ...
  [1. 1. 1.]
  [1. 1. 1.]
  [1. 1. 1.]]
 ...
 [[1. 1. 1.]
  [1. 1. 1.]
  [1. 1. 1.]
  ...
  [1. 1. 1.]
  [1. 1. 1.]
  [1. 1. 1.]]
 [[1. 1. 1.]
  [1. 1. 1.]
  [1. 1. 1.]
  ...
  [1. 1. 1.]
  [1. 1. 1.]
  [1. 1. 1.]]
 [[1. 1. 1.]
  [1. 1. 1.]
  [1. 1. 1.]
  ...
  [1. 1. 1.]
  [1. 1. 1.]
  [1. 1. 1.]]]

```

![Python](/imgs/img/blog/python.png "Python")

---
title: Program to find the sum of values in a matrix
date: 2021-05-31T07:38:56+00:00
authors: kaustubh

slug: /program-to-find-the-sum-of-values-in-a-matrix/
---
** Code > **

```python title="file.py"
import numpy as np
arr = [[114, 117, 19, 33, 44],
       [15, 6, 27, 8, 19],
       [23, 2, 54, 1, 24,]]
print("Sum of array : ", np.sum(arr))
print("Sum of arr(float32) : ", np.sum(arr, dtype = np.float32))
```

** Output > **

```python title="Output"
Sum of array :  506
Sum of arr(float32) :  506.0
```
---
title: Program to calculate the sum of the diagonal elements of a NumPy array
date: 2021-05-31T07:40:01+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-to-calculate-the-sum-of-the-diagonal-elements-of-a-numpy-array/
---
Article has been moved to
** Code > **

```python title="file.vb"
import numpy as np
n_array = np.array([[95, 25, 15],
 [30, 24, 2],
 [14, 25, 47]])
print("Numpy Matrix is:")
print(n_array)
trace = np.trace(n_array)
print("Trace of given matrix:")
print(trace)
```

Output>

```python title="Output"
Numpy Matrix is:
[[95 25 15]
 [30 24 2]
 [14 25 47]]
Trace of given matrix:
166
```
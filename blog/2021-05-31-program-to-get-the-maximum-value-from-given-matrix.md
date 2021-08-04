---
title: Program to get the maximum value from given matrix
date: 2021-05-31T07:36:11+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-to-get-the-maximum-value-from-given-matrix/
---
** Code > **

```python title="file.py"
import numpy as np
import pandas as pd
matrix = [(100, 63, 47),
          (11, 103, 117),
          (49, 36, 55),
          (75,24, 34),
          (89, 21, 44)
          ]
panda_max = pd.DataFrame(matrix, index = list('symca'), columns = list('psk'))
maxValues = panda_max.max()
print(maxValues)
```

** Output > **

```python title="Output"
100
103
117
```
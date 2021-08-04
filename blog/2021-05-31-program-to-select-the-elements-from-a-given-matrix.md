---
title: Program to select the elements from a given matrix
date: 2021-05-31T07:37:31+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-to-select-the-elements-from-a-given-matrix/
---
**Code >**

```python title="file.py"
import pandas as pd
import numpy as np
data = np.array(['Dwayne','John','Steve','Hulk','Orton','Leo','Kofi'])
ser = pd.Series(data)
print(ser[:3])
```

** Output > **

```python title="Ouput"
Dwayne
John
Steve
```
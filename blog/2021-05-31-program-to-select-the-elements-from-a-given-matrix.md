---
title: Program to select the elements from a given matrix
date: 2021-05-31T07:37:31+00:00
authors: kaustubh

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

```python title="Output"
Dwayne
John
Steve
```
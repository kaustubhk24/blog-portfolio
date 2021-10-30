---
title: Program toCreating Pandas dataframe using list of lists
date: 2021-05-31T07:45:08+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-tocreating-pandas-dataframe-using-list-of-lists/
---
Article has been moved to
** Code > **

```python title="file.py"
import pandas as pd
data = [['Python','Basics',5], ['Python', 'OOPs',6], ['Python','Exception Handling',2] ,
        ['Python', 'Database',4],
        ['Python', 'REgular Expressions',3],
        ['Python', 'Data Analysis',6] ]
df = pd.DataFrame(data, columns = ['Category', 'Name','No of lecture'])
print(df )
```

** Output > **

```python title="Output"
Category              Name            No of lecture
Python               Basics              5
Python                 OOPs              6
Python   Exception Handling              2
Python             Database              4
Python  REgular Expressions              3
Python        Data Analysis              6
```
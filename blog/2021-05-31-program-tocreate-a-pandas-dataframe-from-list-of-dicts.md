---
title: Program toCreate a Pandas DataFrame from List of Dicts
date: 2021-05-31T07:43:43+00:00
authors: kaustubh

slug: /program-tocreate-a-pandas-dataframe-from-list-of-dicts/
---
** Code > **

```python title="file.vb"
import pandas as pd
data = [{'401': 'Python', '402': 'ISSA', '403': 'OT','404':'EAF','405':'KRAI'},
 {'401':'Programming','402':'Security','403':'Maths','404':'Architecture','405':'AI'}]
dbs= pd.DataFrame(data, index =['subject','Description'])
print (dbs, "\n")
```

Output> 


```python title="Output"
 401 402 403 404 405
subject Python ISSA OT EAF KRAI
Description Programming Security Maths Architecture AI

```
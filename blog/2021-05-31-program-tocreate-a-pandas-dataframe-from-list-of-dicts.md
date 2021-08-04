---
title: Program toCreate a Pandas DataFrame from List of Dicts
date: 2021-05-31T07:43:43+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-tocreate-a-pandas-dataframe-from-list-of-dicts/
---
** Code > **

```vb title="file.vb"
import pandas as pd
data = [{'401': 'Python', '402': 'ISSA', '403': 'OT','404':'EAF','405':'KRAI'},
 {'401':'Programming','402':'Security','403':'Maths','404':'Architecture','405':'AI'}]
dbs= pd.DataFrame(data, index =['subject','Description'])
print (dbs, "\n")
```

Output> 


```vb title="file.vb"
 401 402 403 404 405
subject Python ISSA OT EAF KRAI
Description Programming Security Maths Architecture AI

```
---
title: Program to add column in to Dataframe
date: 2021-05-31T07:47:07+00:00
authors: kaustubh

slug: /program-to-add-column-in-to-dataframe/
---
** Code > **

```python title="file.vb"
import pandas as pd
data = {'Name': ['Snake', 'Prince', 'Gangsta', 'Wolf'],
 'City':['Pune','Nasik','Kolhapur','Bangalore'],
 'Qualification': ['Msc', 'MA', 'Msc', 'Msc']}
df = pd.DataFrame(data)
print("Old:\n",df)
df.insert(1, "Age", [21, 23, 24, 21], True)
```

** Output > ** (OLD)

```python title="Output"

**Old:**
 Name City Qualification
 Snake Pune Msc
 Prince Nasik MA
 Gangsta Kolhapur Msc
 Wolf Bangalore Msc
```
** New > ** (OLD)

|Name|Age|City|Qualification|
|--- |--- |--- |--- |
|Snake|21|Pune|Msc|
|Prince|23|Nasik|MA|
|Gangsta|24|Kolhapur|Msc|
|Wolf|21|Bangalore|Msc|
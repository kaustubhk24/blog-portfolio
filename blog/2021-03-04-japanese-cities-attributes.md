---
title: Japanese Cities Attributes
date: 2021-03-04T07:47:51+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /japanese-cities-attributes/
---
Article has been moved to
Query all attributes of every Japanese city in the **CITY** table. The **COUNTRYCODE** for Japan is `JPN`.

The **CITY** table is described as follows: 
![](https://s3.amazonaws.com/hr-challenge-images/8137/1449729804-f21d187d0f-CITY.jpg) 

Answer :

```sql title="SQL"
select * from CITY where COUNTRYCODE='JPN';
```
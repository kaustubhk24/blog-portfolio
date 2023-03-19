---
title: Japanese Cities Attributes
date: 2021-03-04T07:47:51+00:00
authors: kaustubh

slug: /japanese-cities-attributes/
---
Query all attributes of every Japanese city in the **CITY** table. The **COUNTRYCODE** for Japan is `JPN`.

The **CITY** table is described as follows: 
![](https://s3.amazonaws.com/hr-challenge-images/8137/1449729804-f21d187d0f-CITY.jpg) 

Answer :

```sql title="SQL"
select * from CITY where COUNTRYCODE='JPN';
```
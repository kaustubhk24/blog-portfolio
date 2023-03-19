---
title: Revising the Select Query I
date: 2021-03-04T07:39:52+00:00
authors: kaustubh

slug: /revising-the-select-query-i/
---
Query all columns for all American cities in the **CITY** table with populations larger than `100000`. The **CountryCode** for America is `USA`.

The **CITY** table is described as follows:
![](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2021/03/1449729804-f21d187d0f-CITY.jpg) 



Answer :

```sql title="SQL"
select * from CITY where COUNTRYCODE='USA' and POPULATION > 100000;
```
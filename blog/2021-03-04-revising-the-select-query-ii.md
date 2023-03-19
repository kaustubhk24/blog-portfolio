---
title: Revising the Select Query II
date: 2021-03-04T07:42:23+00:00
authors: kaustubh

slug: /revising-the-select-query-ii/
---
Query the **NAME** field for all American cities in the **CITY** table with populations larger than `120_0`. The _ountryCode_ for America is `USA`.

The **CITY** table is described as follows:
![](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2021/03/1449729804-f21d187d0f-CITY-1.jpg) 

Answer :

```sql title="SQL"
select NAME as cities from CITY where POPULATION > 120000 and COUNTRYCODE='USA' ;
```
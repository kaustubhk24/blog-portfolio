---
title: Japanese Cities Names
date: 2021-03-04T07:48:57+00:00
authors: kaustubh

slug: /japanese-cities-names/
---
Query the names of all the Japanese cities in the **CITY** table. The **COUNTRYCODE** for Japan is `JPN`. 
The **CITY** table is described as follows:

![](https://s3.amazonaws.com/hr-challenge-images/8137/1449729804-f21d187d0f-CITY.jpg "CITY.jpg") 

Answer :

```cmd title="SQL"
select NAME from CITY where COUNTRYCODE='JPN';
```
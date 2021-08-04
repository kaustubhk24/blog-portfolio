---
title: Revising the Select Query I
date: 2021-03-04T07:39:52+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /revising-the-select-query-i/
---
Query all columns for all American cities in the�**CITY**�table with populations larger than�`100000`. The�**CountryCode**�for America is�`USA`.

The�**CITY**�table is described as follows:
![](https://www.kaustubh.codes/imgs/wp-content/uploads/2021/03/1449729804-f21d187d0f-CITY.jpg) 



Answer :

```vb title="file.vb"
select * from CITY where COUNTRYCODE='USA' and POPULATION > 100000;
```
---
title: Revising the Select Query II
date: 2021-03-04T07:42:23+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /revising-the-select-query-ii/
---
Query the�**NAME**�field for all American cities in the�**CITY**�table with populations larger than�`120_0`. The�\_ountryCode\_�for America is�`USA`.

The�**CITY**�table is described as follows:
![](http://blog.kaustubh.codes/imgs/wp-content/uploads/2021/03/1449729804-f21d187d0f-CITY-1.jpg) 

Answer :

```vb title="file.vb"
select NAME as cities from CITY where POPULATION > 120000 and COUNTRYCODE='USA' ;
```
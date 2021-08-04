---
title: Write a Java program to search an element in an array list.
date: 2020-09-10T08:33:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-java-program-to-search-an-element-in-an-array-list/
---

```java title="searchElement.java"   
import java.util.*;  
public class searchElement {  
public static void main(String[] args) {  
ArrayList list = new ArrayList();  
list.add(12);  
list.add(52);  
list.add(58);  
check(15,list);  
check(58,list);  
}  
private static void check(int num,ArrayList ls)  
{  
if (ls.contains(num)) {  
System.out.println(num +" Found n" );  
} else {  
System.out.println( num +" Not found n");  
}  
}  
}  

```


Output: 


```
  
15 Not found  
58 Found  
  

```

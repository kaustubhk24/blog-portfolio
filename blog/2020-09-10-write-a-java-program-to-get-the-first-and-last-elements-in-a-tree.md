---
title: Write a java program to get the first and last elements in a tree
date: 2020-09-10T08:36:00+00:00
authors: kaustubh

slug: /write-a-java-program-to-get-the-first-and-last-elements-in-a-tree/
---

```java title="firstLast.java" 

import java.util.*;  
public class firstLast {  
public static void main(String[] args) {  
TreeSet tree = new TreeSet();  
tree.add(15);  
tree.add(25);  
  
System.out.println("First is "+tree.first()+" and 2nd is  
"+tree.last());  
}  
}  

```


Output 


```
  
First is 15 and 2nd is 25  
  

```

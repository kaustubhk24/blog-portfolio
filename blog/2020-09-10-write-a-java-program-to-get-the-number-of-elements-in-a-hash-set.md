---
title: Write a java program to get the number of elements in a hash set.
date: 2020-09-10T08:38:00+00:00
authors: kaustubh

slug: /write-a-java-program-to-get-the-number-of-elements-in-a-hash-set/
---

```java title="numberofElements.java" 
import java.util.*;  
public class numberofElements {  
public static void main(String[] args) {  
HashSet hashSet = new HashSet();  
hashSet.add("A");  
hashSet.add("B");  
System.out.println("Hashset size is "+hashSet.size());  
hashSet.add("C");  
System.out.println("Hashset size is "+hashSet.size());  
}  
}
```


Output: 


```
  
  
Hashset size is 2  
Hashset size is 3  

```


View on Your Phone
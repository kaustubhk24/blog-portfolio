---
title: Write a program to replace an element in a list using replaceAll()
date: 2020-09-01T08:59:00+00:00
authors: kaustubh

slug: /write-a-program-to-replace-an-element-in-a-list-using-replaceall/
---

```java title="replaceAllAnElementArrayList.java" 
/**  
 *  Write a program to replace an element in a list using replaceAll()  
 */  
  
import java.util.*;   
  
public class replaceAllAnElementArrayList {  
  
    public static void main(String[] args) {  
  
        List list = Arrays.asList("Apple","Ball","Apple","Cat","Apple","Dog","Egg");  
        System.out.println("List Before Replace :"+list);  
  
        Collections.replaceAll(list, "Apple", "REPLACED");  
  
        System.out.println("List After replaceAll: " + list);  
  
          
    }  
  
      
}  

```


Output: 


```
  
List Before Replace :[Apple, Ball, Apple, Cat, Apple, Dog, Egg]  
List After replaceAll: [REPLACED, Ball, REPLACED, Cat, REPLACED, Dog, Egg]  
  

```

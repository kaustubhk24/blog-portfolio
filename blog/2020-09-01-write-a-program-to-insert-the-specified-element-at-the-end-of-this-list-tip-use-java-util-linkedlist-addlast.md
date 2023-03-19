---
title: 'Write a program to insert the specified element at the end of this list. [Tip: use java.util.LinkedList.addLast()'
date: 2020-09-01T08:40:00+00:00
authors: kaustubh

slug: /write-a-program-to-insert-the-specified-element-at-the-end-of-this-list-tip-use-java-util-linkedlist-addlast/
---

```java title="addInEndOfList.java" 
  
/**  
 *   
 *  Write a program to insert the specified element at the end of this list.  
[Tip: use java.util.LinkedList.addLast() ]  
 */  
  
import java.util.*;  
  
 public class addInEndOfList {  
    public static void main(String[] args) {  
        LinkedList list = new LinkedList();  
  
 list.add("One");  
 list.add("Two");  
 list.add("Three");  
  
 System.out.println("List :"+list);  
  
 list.add("Four");  
  
 System.out.println("After Adding Element :"+list);  
  
 }  
   
}  
  

```


Output: 


```
  
LENOVO@DESKTOP-U7S0\assignment no2_8be11fb  
List :[One, Two, Three]  
After Adding Element :[One, Two, Three, Four]  

```

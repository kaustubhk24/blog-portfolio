---
title: Write a Java program to get an element in a tree set which is strictly less than the given element
date: 2020-09-10T08:37:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-java-program-to-get-an-element-in-a-tree-set-which-is-strictly-less-than-the-given-element/
---
Article has been moved to

```java title="lessThan.java" 
  
import java.util.*;  
public class lessThan {  
public static void main(String[] args) {  
TreeSet tree = new TreeSet();  
tree.add(15);  
tree.add(22);  
tree.add(13);  
  
System.out.println(tree.lower(16)+ " is strictly less than 16");  
}  
}  

```


Output: 


```
  
15 is strictly less than 16  

```

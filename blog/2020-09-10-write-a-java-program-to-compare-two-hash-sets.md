---
title: Write a Java program to compare two hash sets.
date: 2020-09-10T08:35:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-java-program-to-compare-two-hash-sets/
---
Article has been moved to

```java title="compareHash.java" 
  
import java.util.*;  
public class compareHash {  
public static void main(String[] args) {  
HashSet hash1 = new HashSet();  
HashSet hash2 = new HashSet();  
hash1.add("A");  
hash1.add("B");  
hash1.add("C");  
hash2.add("A");  
hash2.add("B");  
if(hash1.equals(hash2))  
{  
System.out.println("Both hash are equal ");  
}  
else  
{  
System.out.println("Not Equal ");  
}  
hash2.add("C");  
if(hash1.equals(hash2))  
{  
  
System.out.println("Both hash are equal ");  
}  
else  
{  
System.out.println("Not Equal ");  
}  
  
}  
}  

```


Output


```
  
Not Equal  
Both hash are equal  

```

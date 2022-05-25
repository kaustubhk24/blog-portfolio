---
title: Write a java Program to raise NullPointerException
date: 2020-08-28T15:59:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-java-program-to-raise-nullpointerexception/
---

```java title="nullPointer.java"
public class nullPointer {  
    public static void main(String[] args) {  
       Object ref = null;  
       ref.toString();   
    }  
 }  
  

```


Output: 


```
  
LENOVO@DESKTOP-U7S0DTI MINGW64 /e/H-drive/Practicals/MCA/SEM III/JAVA/Practicals/assignment no1  
$ java null_pointer.java  
Exception in thread "main" java.lang.NullPointerException  
        at nullPointer.main(null_pointer.java:11)    
  
  
  

```

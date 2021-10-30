---
title: Write a Java program to use the try and catch and finally block.
date: 2020-08-28T15:58:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-java-program-to-use-the-try-and-catch-and-finally-block/
---
Article has been moved to

```java title="ExceptionHandling.java"
  
public class ExceptionHandling {  
    public static void main(String[] args) {  
       try {  
          int i = 10/0;   
       }  
         
       catch(Exception ex){  
          System.out.println("Catch Block Called");  
       }  
        
       finally {  
          System.out.println("Finally Block");  
       }  
    }  
 }  

```


Output: 


```
  
LENOVO@DESKTOP-U7S0DTI MINGW64 /e/H-drive/Practicals/MCA/SEM III/JAVA/Practicals/assignment no1  
$ java try_catch_finally.java  
Catch Block Called  
Finally Block  
  

```

---
title: Write a java program to use the try and catch and finally block.
date: 2020-08-28T15:58:00+00:00
authors: kaustubh

slug: /write-a-java-program-to-use-the-try-and-catch-and-finally-block/
---

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

---
title: Write a java program which shows how to get the name of a running thread?
date: 2020-09-01T08:41:00+00:00
authors: kaustubh

slug: /write-a-java-program-which-shows-how-to-get-the-name-of-a-running-thread/
---

```java title="getThreadName.java" 
  
/**  
 *   Q1 Write a java program which shows how to get the name of a running thread?  
 */  
  
class getThreadName extends Thread{    
      public static void main(String args[]){    
  
  
    getThreadName t=new getThreadName();    
    t.start();   
    System.out.println("Name of Thread :"+t.getName());    
    t.setName("TEST_NAME");    
    System.out.println("After changing name of t:"+t.getName());   
      
      
   }    
  }    

```


Output: 


```
  
LENOVO@DESKTOP-U7S0D\assignment no2_8be11fb  
Name of Thread :Thread-0  
After changing name of t:TEST_NAME  

```

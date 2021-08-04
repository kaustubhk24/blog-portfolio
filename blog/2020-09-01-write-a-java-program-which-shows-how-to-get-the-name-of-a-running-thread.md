---
title: Write a Java program which shows how to get the name of a running thread?
date: 2020-09-01T08:41:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-java-program-which-shows-how-to-get-the-name-of-a-running-thread/
---

```
  
/**  
 *   Q1 Write a Java program which shows how to get the name of a running thread?  
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

---
title: Write a Java program to set the priority of a thread.
date: 2020-09-01T09:00:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-java-program-to-set-the-priority-of-a-thread/
---

```java title="setPriorityOfThread.java" 
  
/**  
 * Q2 Write a Java program to set the priority of a thread.  
 */  
  
  
public class setPriorityOfThread extends Thread{  
  
    public static void main(String[] args) {  
  
        setPriorityOfThread thread=new setPriorityOfThread();  
        System.out.println("Default Priority :"+thread.getPriority());  
        thread.setPriority(7); // value 0 to 10  
        System.out.println("Changed Priority :"+thread.getPriority());  
  
  
          
  
    }   
}  

```


Output: 


```
  
Default Priority :5  
Changed Priority :7  

```

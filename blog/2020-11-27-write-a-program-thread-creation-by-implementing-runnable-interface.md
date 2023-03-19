---
title: Write a program Thread creation by implementing Runnable Interface
date: 2020-11-27T18:18:10+00:00
authors: kaustubh

slug: /write-a-program-thread-creation-by-implementing-runnable-interface/
---
 

Write a program Thread creation by implementing Runnable Interface

```java title="runnable.java"
package com.practical;
public class runnable implements Runnable{
public static void main(String[] args) {
Thread tr=new Thread();
Thread t1 = new Thread(tr,"Mumbai");
Thread t2 = new Thread(tr,"Nagpur");
Thread t3 = new Thread(tr,"Pune");
t1.setPriority(6);
t2.setPriority(8);
t3.setPriority(4);
t1.start();
t2.start();
t3.start();
}
public void run(){
System.out.println("Thread ID is " + Thread.currentThread().getId() + " & Thread Name is " +
Thread.currentThread().getName());
}
}
```

Output:
![](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/11/image-25.png) 
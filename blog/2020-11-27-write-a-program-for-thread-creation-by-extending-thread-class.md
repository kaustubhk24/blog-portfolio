---
title: Write a program for Thread creation by extending Thread class
date: 2020-11-27T18:15:56+00:00
authors: kaustubh

slug: /write-a-program-for-thread-creation-by-extending-thread-class/
---
Write a program for Thread creation by extending Thread class

```java title="example_Thread.java"
package com.practical;
public class example_Thread extends Thread{
public static void main(String[] args) {
Thread te = new Thread();
Thread t1 = new Thread(te,"MCA");
Thread t2 = new Thread(te,"BCA");
Thread t3 = new Thread(te,"MBA");
t1.setPriority(Thread.NORM_PRIORITY);
t2.setPriority(Thread.MIN_PRIORITY);
t3.setPriority(Thread.MAX_PRIORITY);
t1.start();
t2.start();
t3.start();
}
public void run() {
System.out.println("Current Thread ID- " + Thread.currentThread().getId() + " For Thread- " +
Thread.currentThread().getName());
}
}
```

Output:
![](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/11/image-24.png) 
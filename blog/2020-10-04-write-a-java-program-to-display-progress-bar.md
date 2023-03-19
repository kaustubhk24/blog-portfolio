---
title: Write a java program to display Progress Bar.
date: 2020-10-04T12:48:00+00:00
authors: kaustubh

slug: /write-a-java-program-to-display-progress-bar/









---

```java title="progressbar.java" 
  
import javax.swing.*;  
public class progressbar {  
public static void main(String[] args) {  
JFrame f = new JFrame("ProgressBar ");  
JPanel panel = new JPanel();  
JProgressBar progressBar = new JProgressBar(0, 20);  
progressBar.setValue(0);  
progressBar.setStringPainted(true);  
panel.add(progressBar);  
f.add(panel);  
f.setSize(500, 500);  
f.setVisible(true);  
try {  
Thread.sleep(2000);  
} catch (InterruptedException e) {  
// TODO Auto-generated catch block  
e.printStackTrace();  
}  
progressBar.setValue(100);  
}  
}  
  

```


Output 


[![](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/10/v-300x169.png)](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/10/v.png)


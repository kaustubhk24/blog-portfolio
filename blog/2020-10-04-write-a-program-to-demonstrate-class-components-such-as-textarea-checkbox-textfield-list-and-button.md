---
title: Write a program to demonstrate class components such as TextArea, Checkbox, TextField, List and Button.
date: 2020-10-04T12:52:00+00:00
authors: kaustubh

slug: /write-a-program-to-demonstrate-class-components-such-as-textarea-checkbox-textfield-list-and-button/


---
/* Q Write a program to demonstrate class components such as TextArea, \* Checkbox, TextField, List and Button. */ 


```java title="demonstrate.java" 
  
import java.awt.*;  
  
public class demonstrate {  
  
public static void main(String[] args) {  
  
Frame f=new Frame("My Demo Form");   
  
Label l=new Label("Enter Name ");  
Label l2=new Label("Gender ");  
  
Checkbox c1=new Checkbox("Male",true);  
Checkbox c2=new Checkbox("Female");  
  
TextArea a=new TextArea();  
  
List li=new List(2);  
li.add("a");  
li.add("b");  
  
  
TextField t1=new TextField(10);  
  
Button b=new Button("Save");  
  
  
f.add(l);  
f.add(t1);  
f.add(l2);  
f.add(c1);  
f.add(c2);  
f.add(b);  
f.add(li);  
f.add(a);  
  
f.setLayout(new FlowLayout());  
f.setSize(300,300);  
f.setVisible(true);  
  
  
  
}  
}  
  

```


Output: 


[![](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/10/l-300x169.png)](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/10/l.png)


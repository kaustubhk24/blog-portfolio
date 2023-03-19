---
title: 'Write a program to demonstrate java Swing components such as JPasswordField, JCheckbox, JTextField, JList JRadioButton.'
date: 2020-10-04T12:46:00+00:00
authors: kaustubh

slug: /write-a-program-to-demonstrate-java-swing-components-such-as-jpasswordfield-jcheckbox-jtextfield-jlist-jradiobutton/









---

```java title="javaSwing.java" 
  
/**  
* Q 1) Write a program to demonstrate java Swing components such as  
* JPasswordField,  
* JCheckbox,  
* JTextField,  
* JList  
* JRadioButton.  
*  
*/  
import javax.swing.*;  
public class javaSwing{  
public static void main(String[] args) {  
JFrame f=new JFrame("javaSwing");  
JPasswordField passwordField = new JPasswordField();  
JLabel labelPassword=new JLabel("Password:");  
JLabel labelUsername=new JLabel("Username:");  
JTextField usernameField=new JTextField();  
JCheckBox checkBox=new JCheckBox("Check Box");  
JRadioButton radioButton=new JRadioButton("Radio Button");  
String week[]= { "Monday","Tuesday","Wednesday", "Thursday","Friday","Saturday","Sunday"};  
JList list=new JList(week);  
labelUsername.setBounds(20,60,80,30);  
usernameField.setBounds(100,60,100,30);  
labelPassword.setBounds(20,100, 80,30);  
passwordField.setBounds(100,100,100,30);  
checkBox.setBounds(30,140,100,30);  
radioButton.setBounds(30,180,120,30);  
list.setBounds(30,240,400,150);  
f.add(labelUsername); f.add(usernameField);  
f.add(passwordField); f.add(labelPassword);  
f.add(checkBox);  
f.add(radioButton);f.add(list);  
f.setSize(500,500);  
f.setLayout(null);  
f.setVisible(true);  
}  
}  

```


Output: 


[![](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/10/a-300x169.png)](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/10/a.png)


---
title: java Program for Calculator Operations Using AWT Controls
date: 2020-11-24T03:13:15+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /java-program-for-calculator-operations-using-awt-controls/
---
```java title="calculator.java"
import java.awt.*;
import java.awt.event.*;
public class calculator implements ActionListener
{
int cal,no;
String s1,s2,s3,s4,s5;
Frame f;
Button b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17;
Panel p;
TextField pre,tf;
GridLayout g;
calculator()
{
f = new Frame("Calculator");
p = new Panel();
f.setLayout(new FlowLayout());
b1 = new Button("0");
b1.addActionListener(this);
b2 = new Button("1");
b2.addActionListener(this);
b3 = new Button("2");
b3.addActionListener(this);
b4 = new Button("3");
b4.addActionListener(this);
b5 = new Button("4");
b5.addActionListener(this);
b6 = new Button("5");
b6.addActionListener(this);
b7 = new Button("6");
b7.addActionListener(this);
b8 = new Button("7");
b8.addActionListener(this);
b9 = new Button("8");
b9.addActionListener(this);
b10 = new Button("9");
b10.addActionListener(this);
b11 = new Button("+");
b11.addActionListener(this);
b12 = new Button("-");
b12.addActionListener(this);
b13 = new Button("*");
b13.addActionListener(this);
b14 = new Button("/");
b14.addActionListener(this);
b15 = new Button("%");
b15.addActionListener(this);
b16 = new Button("=");
b16.addActionListener(this);
b17 = new Button("cal");
b17.addActionListener(this);
tf = new TextField(20);
pre=new TextField(20);
f.add(pre);
pre.setEnabled(false);
f.add(tf);
g = new GridLayout(4,4,10,20);
p.setLayout(g);
p.add(b1);p.add(b2);p.add(b3);p.add(b4);p.add(b5);p.add(b6);p.add(b7);p.add(b8);p.add(b
9);
p.add(b10);p.add(b11);p.add(b12);p.add(b13);p.add(b14);p.add(b15);p.add(b16);p.add(b1
7);
f.add(p);
f.setSize(300,300);
f.setVisible(true);
}
public void actionPerformed(ActionEvent e)
{
if(e.getSource()==b1)
{
s3 = tf.getText();
s4 = "0";
s5 = s3+s4;
tf.setText(s5);
pre.setText(s5);
}
if(e.getSource()==b2)
{
s3 = tf.getText();
s4 = "1";
s5 = s3+s4;
tf.setText(s5);
pre.setText(s5);
}
if(e.getSource()==b3)
{
s3 = tf.getText();
s4 = "2";
s5 = s3+s4;
tf.setText(s5);
pre.setText(s5);
}if(e.getSource()==b4)
{
s3 = tf.getText();
s4 = "3";
s5 = s3+s4;
tf.setText(s5);
pre.setText(s5);
}
if(e.getSource()==b5)
{
s3 = tf.getText();
s4 = "4";
s5 = s3+s4;
tf.setText(s5);
}
if(e.getSource()==b6)
{
s3 = tf.getText();
s4 = "5";
s5 = s3+s4;
tf.setText(s5);
pre.setText(s5);
}
if(e.getSource()==b7)
{
s3 = tf.getText();
s4 = "6";
s5 = s3+s4;
tf.setText(s5);
pre.setText(s5);
}
if(e.getSource()==b8)
{
s3 = tf.getText();
s4 = "7";
s5 = s3+s4;
tf.setText(s5);
pre.setText(s5);
}
if(e.getSource()==b9)
{
s3 = tf.getText();
s4 = "8";
s5 = s3+s4;
tf.setText(s5);
pre.setText(s5);
}
if(e.getSource()==b10)
{
s3 = tf.getText();
s4 = "9";
s5 = s3+s4;
tf.setText(s5);
pre.setText(s5);
}
if(e.getSource()==b11)
{
s1 = tf.getText();
tf.setText("");
pre.setText(pre.getText()+"+");
cal=1;
}
if(e.getSource()==b12)
{
s1 = tf.getText();
tf.setText("");
pre.setText(pre.getText()+"-");
cal=2;
}
if(e.getSource()==b13)
{
s1 = tf.getText();
tf.setText("");
pre.setText(pre.getText()+"*");
cal=3;
}
if(e.getSource()==b14)
{
s1 = tf.getText();
tf.setText("");
pre.setText(pre.getText()+"/");
cal=4;
}
if(e.getSource()==b15)
{
s1 = tf.getText();
tf.setText("");
cal=5;
}
if(e.getSource()==b16)
{
s2 = tf.getText();
if(cal==1)
{
no = Integer.parseInt(s1)+Integer.parseInt(s2);
pre.setText(pre.getText()+Integer.parseInt(s2));
tf.setText(String.valueOf(no));
}
else
if(cal==2)
{
no = Integer.parseInt(s1)-Integer.parseInt(s2);
pre.setText(pre.getText()+Integer.parseInt(s2));
tf.setText(String.valueOf(no));
}
else
if(cal==3)
{
no = Integer.parseInt(s1)*Integer.parseInt(s2);
pre.setText(pre.getText()+Integer.parseInt(s2));
tf.setText(String.valueOf(no));
}
if(cal==4)
{
try
{
int p=Integer.parseInt(s2);
if(p!=0)
{
no = Integer.parseInt(s1)/Integer.parseInt(s2);
pre.setText(pre.getText()+Integer.parseInt(s2));
tf.setText(String.valueOf(no));
}
else
tf.setText("infinite");
}
catch(Exception i){}
}
if(cal==5)
{
no = Integer.parseInt(s1)%Integer.parseInt(s2);
tf.setText(String.valueOf(no));
}
}
if(e.getSource()==b17)
{
tf.setText("");
}
}
public static void main(String[] abc)
{
calculator v = new calculator();
}
}
```

```vb title="file.vb"
Output
```
![](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/11/image-20.png) 
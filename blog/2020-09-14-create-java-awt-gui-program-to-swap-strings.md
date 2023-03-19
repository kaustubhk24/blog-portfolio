---
title: Create java AWT GUI Program to Swap strings
date: 2020-09-14T05:06:00+00:00
authors: kaustubh

slug: /create-java-awt-gui-program-to-swap-strings/

---

```
  
import java.awt.*;  
import java.awt.event.*;  
  
  
  
  
public class me {  
  
    public static void main(String[] args) {  
  
        Frame f=new Frame("Swap");  
  
        Label l=new Label("Enter First Number");  
        Label l1=new Label("Enter Second Number");  
  
        TextField t1=new TextField(10);  
        TextField t2=new TextField(10);  
  
        Button b=new Button("Swap");  
  
  
        b.addActionListener(new ActionListener()  
        {  
  
  
            public void actionPerformed(ActionEvent ae)  
            {  
                String tmp=t1.getText();  
                t1.setText(t2.getText());  
                t2.setText(tmp);  
  
  
            }  
  
        }        );  
  
  
        f.add(l);  
        f.add(l1);  
  
           f.add(t2);  
           f.add(t1);  
  
           f.add(b);  
  
  
   f.setLayout(new FlowLayout());  
   f.setSize(300,300);  
   f.setVisible(true);  
  
          
  
  
  
    }  
}  
  
  

```


Output: 


[![](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/09/Screenshot-2Bfrom-2B2020-09-14-2B10-33-44-300x169.png)](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/09/Screenshot-2Bfrom-2B2020-09-14-2B10-33-44.png)


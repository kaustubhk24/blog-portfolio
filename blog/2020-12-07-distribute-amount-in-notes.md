---
title: Java Program to Distribute Amount in Notes
date: 2020-12-07T16:46:35+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /distribute-amount-in-notes/
 We are going to write program Distribute Amount in Notes .This program will distribute amount in currency notes
 * In India we have 2000,500,100,50,



---
 

We are going to write Program Distribute Amount in Notes

```java title="denomination.java"
/**
 * This program will distribute amount in currency notes
 * In India we have 2000,500,100,50,20,10,5,2,1 Notes for program
 *
 * For Example if we enter amount 365 Then output will be
 *
 * 200 X 1=200
 * 100 X 1=100
 * 50 X 1=50
 * 10 X 1=10
 * 5 X 1=5
 * ----------------
 * Total : 365
 *
 *
 */
import java.util.Scanner;
import javax.lang.model.util.ElementScanner6;
import jdk.javadoc.internal.tool.Start;
 class denomination
 {
 int n2000=0,n500=0,n200=0,n100=0,n50=0,n20=0,n10=0,n5=0,n2=0,n1=0;
 public static void main(String[] args) {
 System.out.println("Please Enter Amount :");
 Scanner scannner =new Scanner(System.in);
 int amount= scannner.nextInt();
 scannner.close();
 //System.out.println(amount);
 denomination dm=new denomination();
 dm.start(amount);
 dm.print(amount);
 }
 public void start(int amt)
 {
 final int first_amount=amt;
 if(amt >=2000)
 {
 amt=amt-2000;
 n2000=n2000+1;
 start(amt);
 }
 else if(amt >=500)
 {
 amt=amt-500;
 n500=n500+1;
 start(amt);
 }
 else if(amt >=200)
 {
 amt=amt-200;
 n200=n200+1;
 start(amt);
 }
 else if(amt >=100)
 {
 amt=amt-100;
 n100=n100+1;
 start(amt);
 }
 else if(amt >=50)
 {
 amt=amt-50;
 n50=n50+1;
 start(amt);
 }
 else if(amt >=20)
 {
 amt=amt-20;
 n20=n20+1;
 start(amt);
 }
 else if(amt >=10)
 {
 amt=amt-10;
 n10=n10+1;
 start(amt);
 }
 else if(amt >=5)
 {
 amt=amt-5;
 n5=n5+1;
 start(amt);
 }
 else if(amt >=2)
 {
 amt=amt-2;
 n2=n2+1;
 start(amt);
 }
 else if(amt >=1)
 {
 amt=amt-1;
 n1=n1+1;
 start(amt);
 }
 }
 public void print(int amt)
 {
 System.out.println("The distribution of "+amt +" is \n2000 X "+n2000+" = "+n2000*2000+"\n500 X "+n500+" = "+n500*500+
 "\n200 X "+n200+" = "+n200*200+
 "\n100 X "+n100+" = "+n100*100+
 "\n50 X "+n50+" = "+n50*50+
 "\n20 X "+n20+" = "+n20*20+
 "\n10 X "+n10+" = "+n10*10+
 "\n5 X "+n5+" = "+n5*5+
 "\n2 X "+n2+" = "+n2*2+
 "\n1 X "+n1+" = "+n1*1+
 "\n-----------------------\n"+
 "Total \t :"+amt
 );
 }
 }
```

Output

```vb title="file.vb"
Please Enter Amount :
86549
The distribution of 86549 is
2000 X 43 = 86000
500 X 1 = 500
200 X 0 = 0
100 X 0 = 0
50 X 0 = 0
20 X 2 = 40
10 X 0 = 0
5 X 1 = 5
2 X 2 = 4
1 X 0 = 0
-----------------------
Total :86549
```

Screenshot
![Distribute Amount in Notes ](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/12/image.png)


[Download Program](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/12/denomination.zip)



Get same program in [VB.NET here.](https://blog.kaustubh.codes/vb-net-program-to-distribute-amount-in-notes/)
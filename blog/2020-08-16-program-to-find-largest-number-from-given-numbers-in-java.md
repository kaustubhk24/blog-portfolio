---
title: Program to Find Largest Number from Given Numbers in Java
date: 2020-08-16T12:30:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-to-find-largest-number-from-given-numbers-in-java/
---

```java title="Largest.cpp"
  
import java.util.Scanner;  
  
class large  
{  
    public static void main(String args[]) {  
        Scanner sc = new Scanner(System.in);   
        System.out.println("Please First Number ");  
        int a = sc.nextInt();  
        System.out.println("Please Second Number ");  
        int b = sc.nextInt();  
        System.out.println("Please Third Number ");  
        int c = sc.nextInt();  
  
        int ans;  
  
        
  
  
  
        if(a>b && a>c)  
        {  
            ans=a;  
        }  
        else if(b>c && b>a)  
        {  
            ans=b;  
        }  
        else  
        {  
            ans=c;  
        }  
        System.out.print("Largest Number is " + ans);  
    }  
}  

```

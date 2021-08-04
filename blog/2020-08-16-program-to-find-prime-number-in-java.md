---
title: Program to Find Prime Number in Java
date: 2020-08-16T12:32:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-to-find-prime-number-in-java/
---

```
  
  
import java.util.Scanner;  
class prime  
{  
    public static void main(String args[])  
    {  
        Scanner sc = new Scanner(System.in);   
        System.out.println("Please enter number ");  
        int num = sc.nextInt();  
        //int num = 29;  
        boolean flag = false;  
        for(int i = 2; i <= num/2; ++i)  
        {  
            if(num % i == 0)  
            {  
                flag = true;  
                break;  
            }  
        }  
  
        if (!flag)  
            System.out.println(num + " is a prime number.");  
        else  
            System.out.println(num + " is not a prime number.");  
  
    }  
}  
  

```

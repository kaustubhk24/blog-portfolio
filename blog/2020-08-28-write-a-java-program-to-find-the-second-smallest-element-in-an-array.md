---
title: Write a Java program to find the second smallest element in an array.
date: 2020-08-28T15:57:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-java-program-to-find-the-second-smallest-element-in-an-array/
---

```
  
public class SecondSmallestInArray{    
public static int getSecondSmallest(int[] a, int total){    
int temp;    
for (int i = 0; i < total; i++)     
        {    
            for (int j = i + 1; j < total; j++)     
            {    
                if (a[i] > a[j])     
                {    
                    temp = a[i];    
                    a[i] = a[j];    
                    a[j] = temp;    
                }    
            }    
        }    
       return a[1];  
}    
public static void main(String args[]){    
int a[]={1,2,5,6,3,2};    
System.out.println("Second smallest: "+getSecondSmallest(a,6));    
}}  
  

```


OutPut: 


```
  
$ java second_smallest_element_in_array.java  
Second smallest: 2  
Second smallest: 33  
  

```

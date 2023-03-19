---
title: Write a java program to find the second smallest element in an array.
date: 2020-08-28T15:57:00+00:00
authors: kaustubh

slug: /write-a-java-program-to-find-the-second-smallest-element-in-an-array/
---

```java title="SecondSmallestInArray.java"
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

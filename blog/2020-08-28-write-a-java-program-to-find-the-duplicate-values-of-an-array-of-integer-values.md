---
title: Write a Java program to find the duplicate values of an array of integer values.
date: 2020-08-28T15:56:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-java-program-to-find-the-duplicate-values-of-an-array-of-integer-values/
---

```java title="duplicate.java"
import java.util.Arrays;   
public class duplicate{  
  public static void main(String[] args)   
    {  
        int[] arr = {1, 2, 5, 5, 6, 6, 7, 2};  
   
        for (int i = 0; i < arr.length-1; i++)  
        {  
            for (int j = i+1; j < arr.length; j++)  
            {  
                if ((arr[i] == arr[j]) && (i != j))  
                {  
                    System.out.println("Duplicate Element : "+arr[j]);  
                }  
            }  
        }  
    }      
}  
  
  



```
  
  
Output:  
  



```
  
LENOVO@DESKTOP-U7S0DTI MINGW64 /e/H-drive/Practicals/MCA/SEM III/JAVA/Practicals/assignment no1  
$ java find_duplicate_values_in_array.java  
Duplicate Element : 2  
Duplicate Element : 5  
Duplicate Element : 6  
  

```



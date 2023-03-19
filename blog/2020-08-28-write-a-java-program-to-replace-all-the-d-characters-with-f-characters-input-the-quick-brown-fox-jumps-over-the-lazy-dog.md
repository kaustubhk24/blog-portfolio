---
title: 'Write a java program to replace all the "d" characters with "f" characters. input :  The quick brown fox jumps over the lazy dog '
date: 2020-08-28T15:57:00+00:00
authors: kaustubh

slug: /write-a-java-program-to-replace-all-the-d-characters-with-f-characters-input-the-quick-brown-fox-jumps-over-the-lazy-dog/
---

```java title="replace.java"
  
 public class replace {  
      
   public static void main(String[] args)  
    {  
        String str = "The quick brown fox jumps over the lazy dog.";  
  
        String new_str = str.replaceAll("d", "f");  
         
        System.out.println("Original string: " + str);  
        System.out.println("New String: " + new_str);  
    }  
}  
  

```


Output: 


```
  
LENOVO@DESKTOP-U7S0DTI MINGW64 /e/H-drive/Practicals/MCA/SEM III/JAVA/Practicals/assignment no1  
$ java replace_chars.java  
Original string: The quick brown fox jumps over the lazy dog.  
New String: The quick brown fox jumps over the lazy fog.  
  
  

```

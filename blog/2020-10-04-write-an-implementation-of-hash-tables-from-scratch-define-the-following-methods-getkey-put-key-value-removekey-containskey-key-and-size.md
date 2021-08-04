---
title: 'Write an implementation of hash tables from scratch. Define the following methods: get(key), put( key, value ), remove(key), containsKey (key), and size()'
date: 2020-10-04T12:42:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-an-implementation-of-hash-tables-from-scratch-define-the-following-methods-getkey-put-key-value-removekey-containskey-key-and-size/
---

```java title="hashtable.java" 
  
/**  
* Q 1) Write an implementation of hash tables from scratch. Define the  
* following methods: get(key), put( key, value ), remove(key), containsKey  
* (key), and size().  
*/  
import java.util.Hashtable;  
public class hashtable  
{  
public static void main(String[] args) {  
Hashtable hashTable=new Hashtable<>();  
//put(key,value)  
hashTable.put(1,"Kaustubh");  
hashTable.put(2,"Mahesh");  
hashTable.put(3,"Angad");  
hashTable.put(4,"Sagar");  
//printing complete hashTable  
System.out.println(hashTable);  
//get(key) method  
System.out.println(hashTable.get(1));  
//remove(key)  
hashTable.remove(3);  
System.out.println(hashTable);  
//contains(key)  
System.out.println(hashTable.containsKey(3)); //false  
System.out.println(hashTable.containsKey(1));//True  
//size  
System.out.println(hashTable.size());  
}  
}  

```


Output: 


```
  
{1=Kaustubh, 2=Mahesh, 3=Angad, 4=Sagar}  
Kaustubh  
{1=Kaustubh, 2=Mahesh, 4=Sagar}  
false  
true  
3  

```


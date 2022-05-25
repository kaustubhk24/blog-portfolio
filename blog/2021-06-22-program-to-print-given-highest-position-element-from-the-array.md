---
title: Program to print Given Highest position element from the array
date: 2021-06-22T16:27:23+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-to-print-given-highest-position-element-from-the-array/



---
** Statement >  **
Suppose you have an array of numbers and you have to create a function that will accept 2 parameters an array and rank, you have to print the highest rank number from the array to know more read the example below.

** Example :**
```python title="Example input"
input
arr=array(10,25,55,66,48,33,22,13,98,95,96)
rank=2
Then Output should be 2nd highest element of array i.e. 96
```
** Example 2>**
```python title="Example input 2"
input
arr=array(10,25,55,66,48,33,22,13,98,95,96)
rank=3
Then Output should be 3rd highest element of array i.e. 96
```

> ** Important ** : First,  try your own logic & then see answers, if you think you have better logic than the article please drop a comment, we'll publish your code


** Logic > **

Basically, we have to find the nth highest element from the given array, We will use a simple method, Just sort the array in descending order and call print n-1th element (as array starts from index 0)

If you get similar question with another logic like find nth smallest element from the given array, then just sort array in ascending order

please read programs below for reference.

```php title="Program in php"
<?php
function getByRank($arr,$place)
{
  rsort($arr);
  echo $arr[$place-1];
}
$arr = array(1,2,5,97,9,55,78,55,93,98);
getByRank($arr,2);
?>
```
** Code in Python > **
```python title="Program in Python"
def getByRank(arr,pos):
  arr.sort(reverse=True)
  print(arr[pos-1])
arr=[12,15,96,98,55,65,33,22]
getByRank(arr,3)
```
** java Code > **
```java title="Program in java"
import java.util.Collections;
import java.util.Arrays;
public class HelloWorld{
     public static void main(String []args){
         int arr[]={33,3,4,5};
         int pos=2;
         Arrays.sort(arr, Collections.reverseOrder());
        System.out.println(arr[pos-1]);
     }
}
```

---
title: Transpose Matrix
date: 2021-06-21T15:18:31+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /transpose-matrix/
---
Article has been moved to

Given a matrix, find the transpose of a matrix. 
```java title="Input"
Input 
    2 
    4 
    1 2 3 4 
    2 9 -1 2 
```
Where, 

First-line represents the number of rows as M. 
Second-line represents the number of columns as N. 
The third line contains matrix elements of 1st row and so on. 
```java title="output"
Output 
    1 2 
    2 9 
    3 -1 
    4 2 
```
** Program > **

```java title="Transponse.java"
// DriverMain.java
import java.util.*;
public class DriverMain {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int r = s.nextInt();
        int c = s.nextInt();
        int first[][] = new int[r][c];
        for (int i = 0; i < r; i++){
            for (int j = 0; j < c; j++){
                    first[i][j] = s.nextInt();
            }}
  for(int i = 0; i < c; i++)
        {
            for(int j = 0; j < r; j++)
            {
            System.out.print(first[j][i]+" ");
            }
            System.out.println(" ");
        }
    }
}

```
** Output > **
```java title="output"
Input

2
4
1 2 3 4
2 9 -1 2
Output     

1 2
2 9
3 -1
4 2  
Expected Output

1 2
2 9
3 -1
4 2
```
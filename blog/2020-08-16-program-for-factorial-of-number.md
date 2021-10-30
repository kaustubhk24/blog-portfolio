---
title: Program for factorial of Number
date: 2020-08-16T11:56:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200
slug: /program-for-factorial-of-number/
---
Article has been moved to
```cpp title="factorial.cpp"
#include<iostream>
using namespace std;
int find_factorial(int);
int main()
{
   int num, fact;
   
   cout<<"\nEnter any integer number:";
  cin>>num;
 
  
   fact =find_factorial(num);
 

  cout<<fact;
   return 0;
}
int find_factorial(int n)
{
  
   if(n==0)
      return(1);
 
  
   return(n*find_factorial(n-1));
}
```
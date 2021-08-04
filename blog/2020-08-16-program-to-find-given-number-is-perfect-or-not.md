---
title: Program to Find Given Number is Perfect or NOT
date: 2020-08-16T11:32:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-to-find-given-number-is-perfect-or-not/
---

```cpp title="Perfect.cpp"
#include  
using namespace std;  
int main()  
{  
 int n,sum=0,a=1;  
 cout<<"Enter Number :";  
 cin>>n;  
 while(a {  
 if(n%a==0)  
 {  
 sum=sum+a;  
   
   
 }  
 a++;  
 }  
 if(sum==n){  
 cout<<"Perfect no";  
   
 }  
 else{  
 cout<<"Not perfect";  
   
 }  
}  
  
  

```

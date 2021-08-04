---
title: Program to Check If Given Number is Prime or NOT
date: 2020-08-16T11:30:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-to-check-if-given-number-is-prime-or-not/
---

```
  
  
#include  
using namespace std;  
int main()  
{  
 int n;  
 cout<<"Enter a number ";  
 int flag=0;  
 cin>>n;  
 for(int i=2;i<=n/2;i++)  
 {  
 if(n%i==0)  
 {  
 flag=1;  
 break;  
   
 }  
 }  
 if(flag==0){  
 cout<<"The number is prime";  
 }  
 else{  
 cout<<"The number is not prime";  
 }  
   
}  
  
  

```

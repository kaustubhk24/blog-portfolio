---
title: Program to Find Given Number is Perfect or NOT
date: 2020-08-16T11:32:00+00:00
authors: kaustubh

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

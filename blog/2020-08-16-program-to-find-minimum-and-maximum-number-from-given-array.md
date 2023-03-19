---
title: Program to Find Minimum and Maximum Number from Given Array
date: 2020-08-16T11:34:00+00:00
authors: kaustubh

slug: /program-to-find-minimum-and-maximum-number-from-given-array/
---

```cpp title="MinMax.cpp"
  
  
#include  
using namespace std;  
int main()  
{  
 int arr[10],n,max=0,min;  
 cout<<"Enter size of array";  
 cin>>n;  
 cout<<"Enter array elements";  
 for(int i=0;i {  
 cin>>arr[i];  
   
 }  
 for(int i=0;i {  
 if(arr[i]>max)  
 {  
 max=arr[i];  
   
 }  
 }  
 min=max;  
   
 for(int i=0;i {  
 if(arr[i] {  
 min=arr[i];  
   
 }  
 }  
 cout<<"max is:";  
 cout<   
 cout<   
}  
  

```

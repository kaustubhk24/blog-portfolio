---
title: Program for Selection Sort in CPP
date: 2020-08-16T11:51:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-for-selection-sort-in-cpp/
---
Article has been moved to

```cpp title="Selection.cpp"
  
#include  
   
using namespace std;  
   
int main()  
{  
 int i,j,n,loc,temp,min;  
 cout<<"Enter the number of elements:";  
 cin>>n;  
 cout<<"nEnter the elementsn";  
 int a[n];  
 for(i=0;i {  
 cin>>a[i];  
 }  
   
 for(i=0;i {  
 min=a[i];  
 loc=i;  
 for(j=i+1;j {  
 if(min>a[j])  
 {  
 min=a[j];  
 loc=j;  
 }  
 }  
   
 temp=a[i];  
 a[i]=a[loc];  
 a[loc]=temp;  
 }  
   
 cout<<"nSorted list is as followsn";  
 for(i=0;i {  
 cout< }  
   
 return 0;  
}  
  

```

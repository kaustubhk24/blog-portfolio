---
title: Program to Perform Linear Search on Array
date: 2020-08-16T11:36:00+00:00
authors: kaustubh

slug: /program-to-perform-linear-search-on-array/
---

```cpp title="Linear.cpp" 
#include<iostream>  
using namespace std;  
int main()  
{  
	int num,i,n,cnt=0,pos,c=0;  
	cout<<"Enter array size :";  
	cin>>n;  
	cout<<"Enter array elements :";  
	int arr[n];  
	for(i=0;i	{  
		cin>>arr[i];  
	}  
	cout<<"Enter element to search :";  
	cin>>num;  
	for(i=0;i	{  
		if(num==arr[i])  
		{  
			cout<<"Found at :"<			c=1;  
			break;  
		}  
		else{  
		c=0;  
		}  
	}  
	if(c==0){  
		cout<<"Element not found!";  
	}  
}  
  
  

```

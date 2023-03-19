---
title: Program for Bubble Sort in CPP
slug: /program-for-bubble-sort-in-cpp/
date: 2020-08-16T12:08:00+00:00
authors: kaustubh
---
```cpp title="Bubble.cpp"
#include<iostream>
using namespace std;
int main()
{
	int arr[10],i,n;
	
	cout<<"Enter array size :";
	cin>>n;
	cout<<"Enter  array elements :";
	for(i=0;i<n;i++)
	{
		cin>>arr[i];
		
	}
    cout<<"The array before sorting :";
    for(int i=0;i<n;i++)
    {
    	cout<<arr[i]<<"t";
	}
	cout<<endl<<"Array after sorting :";
	for(i=0;i<n;i++)
	{
		for(int j=0;j<(n-i);j++)
		{
		   int temp=arr[j];
			arr[j]=arr[j+1];
			arr[j+1]=temp;
		}
	}
	for(int i=0;i<n;i++)
    {
    	cout<<arr[i]<<"t";
	}
}


```
---
title: Program for Binary Search in CPP
slug: /program-for-binary-search-in-cpp/
date: 2020-08-16T11:42:00+00:00
authors: kaustubh
---
```cpp title="Binary.cpp"
#include<iostream>
using namespace std;
int main()
{
	int a,n,num,i,mid,beg,end;
	cout<<"Enter size of array :";
	cin>>n;
	int arr[n];
	cout<<"Enter array elements :";
	for(i=0;i<n;i++)
	{
		cin>>arr[i];
	}
	cout<<"Enter element to search :";
	cin>>num;
    end=n-1;
    mid=(beg+end)/2;
    while(beg<=end)
    {
    	if(arr[mid]<num)
    	{
    		beg=mid+1;
		}
		else if(arr[mid]==num)
		{
			cout<<num<<" found at "<<mid+1;
			break;
		}
		else
		{
			end=mid-1;
		}
		mid=(beg+end)/2;
	}
	if(beg>end)
	{
		cout<<"Not found";
	}
}


```
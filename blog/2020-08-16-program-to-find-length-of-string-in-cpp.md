---
title: Program to Find Length of String in CPP
date: 2020-08-16T11:58:00+00:00
authors: kaustubh
slug: /program-to-find-length-of-string-in-cpp/

---
```cpp title="file.cpp"
#include<iostream>
using namespace std;
int main()
{
	char str[20];
	cout<<"Enter String :";
	cin>>str;
	int count=0;
	for(int i=0;str[i]!='';i++)
	{
	count++;
	}
	cout<<count;
}


```
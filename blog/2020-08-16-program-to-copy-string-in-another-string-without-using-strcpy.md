---
title: Program to Copy String in Another String Without Using strcpy()
date: 2020-08-16T12:00:00+00:00
authors: kaustubh
slug: /program-to-copy-string-in-another-string-without-using-strcpy/
---

```cpp title="file.cpp"
#include<iostream>
using namespace std;
int main()
{
	char str1[20],str2[20];
	int i;

	cout<<"Enter String :";
	cin>>str1;
	for(i=0;str1[i]!='';i++)
	{
      str2[i]=str1[i];
	}
	str2[i]='';
	cout<<"Copied String :"<<str2;
}
```
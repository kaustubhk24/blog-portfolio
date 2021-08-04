---
title: Program to Find Length of String in CPP
date: 2020-08-16T11:58:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200
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
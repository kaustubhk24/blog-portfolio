---
title: Program to Convert Lowercase to Uppercase in CPP
date: 2020-08-16T12:01:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200
slug: /program-to-convert-lowercase-to-uppercase-in-cpp/

---
```cpp title="file.cpp"
#include<iostream>
using namespace std;
int main()
{
	char str[20];
	int i=0;
	cout<<"Enter String :";
	cin>>str;
	for(i=0;str[i]!='';i++)
	
	{
		if(str[i]>=97 && str[i]<=122){
			str[i]=str[i]-32;
			
		}
		
	}

	cout<<"Converted String :"<<str;
}

```
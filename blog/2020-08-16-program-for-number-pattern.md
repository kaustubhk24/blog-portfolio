---
title: Program for Number Pattern
date: 2020-08-16T11:46:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-for-number-pattern/
---
Article has been moved to
```cpp title="Pattern.cpp"
/* Program for below pattern 


1	
2	2	
3	3	3	
4	4	4	4	
5	5	5	5	5	




*/


#include<iostream>
using namespace std;
int main()
{
		for(int i=1;i<=5;i++)
	{
		for(int j=1;j<=i;j++)
		{
			cout<<i<<"t";
		}
		cout<<endl;
	}
}


```
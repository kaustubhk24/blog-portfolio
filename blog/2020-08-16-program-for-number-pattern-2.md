---
title: Program for Number Pattern 2
date: 2020-08-16T11:49:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-for-number-pattern-2/
---
```cpp title="Pattern2.cpp"
/* Program for pattern Below

5	
5	4	
5	4	3	
5	4	3	2	
5	4	3	2	1	

*/






#include<iostream>
using namespace std;
int main()
{
		for(int i=5;i>=1;i--)
	{
		for(int j=5;j>=i;j--)
		{
			cout<<j<<"t";
		}
		cout<<endl;
	}
}
```
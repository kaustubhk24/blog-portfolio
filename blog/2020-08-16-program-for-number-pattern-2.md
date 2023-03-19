---
title: Program for Number Pattern 2
date: 2020-08-16T11:49:00+00:00
authors: kaustubh

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
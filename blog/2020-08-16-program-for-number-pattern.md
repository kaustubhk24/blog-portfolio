---
title: Program for Number Pattern
date: 2020-08-16T11:46:00+00:00
authors: kaustubh

slug: /program-for-number-pattern/
---
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
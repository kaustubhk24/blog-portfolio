---
title: Program for Linear Queue using Array in CPP
date: 2020-08-16T12:16:00+00:00
authors: kaustubh

slug: /program-for-linear-queue-using-array-in-cpp/

---
```cpp title="linear.cpp"
#include<iostream>
using namespace std;

int rear=-1;
int front=-1;
int q[10];

bool isfull()
{
	if(rear==9)
	{
		return 1;
	}
	else
		return 0;
}
bool isempty()
{
	if(front==-1)
	{
		return 1;
	}
	else
		return 0;
}
int display()
{
	if(isempty())
	{
		cout<<"Queue is empty!"<<endl;
	}
	else
	{
		for(int i=front;i<=rear;i++)
		{
			cout<<q[i]<<"->";
		}
	}
}
int main()
{
	int ch,data;
	while(ch!=-1)
	{
		cout<<"n----MENU----"<<endl;
		cout<<"1.Insert"<<endl;
		cout<<"2.Delete"<<endl;
		cout<<"3.Display"<<endl;
		cout<<"4.Exit"<<endl;
		cout<<"Enter a choice:";
		cin>>ch;
		switch(ch)
		{
			case 1:
				if(isfull())
				{
					cout<<"Queue is full!"<<endl;
					display();
					break;
				}
				else
				{
					if(isempty())
					{
						front=0;
					}
					rear=rear+1;
					cout<<"Enter a data:";
					cin>>data;
					q[rear]=data;	
					display();
					break;
				}
			case 2:
				if(isempty())
				{
					cout<<"Queue underflow!"<<endl;
					break;	
				}
				else
				{
					data=q[front];
					cout<<q[front]<<" is deleted!"<<endl;
					front=front+1;
					if(front>rear)
					{
						front=rear=-1;
					}
					display();
					break;
				}
			case 3:
				display();
				break;	
			case 4:
				exit(0);
		}
	}
}

```
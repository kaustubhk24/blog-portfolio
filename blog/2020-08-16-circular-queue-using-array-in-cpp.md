---
title: Circular Queue Using Array in CPP
slug: /circular-queue-using-array-in-cpp/
date: 2020-08-16T12:17:00+00:00
authors: kaustubh

---
```cpp title="circular.cpp"
#include<iostream>
using namespace std;

int rear=-1;
int front=-1;
int q[10];

bool isfull()
{
	if(front==(rear+1)%10)
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
	int f=front,r=rear;
		if(isempty())
		{
			cout<<"Queue Underflow!"<<endl;
		}
		cout<<"Queue elements:n";
		if(f<=r)
			while(f<=r)
		{
			cout<<q[f]<<"->";
			f++;
		}
		else
		{
			while(f<=9)
		{
			cout<<q[f]<<"->";
			f++;
		}
		f=0;
		while(f<=r)
		{
			cout<<q[f]<<"->";
			f++;
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
					rear=(rear+1)%10;
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
					if(front==rear)
						{
						front=rear=-1;
						break;
						}
					else
						{
							if(front==9)
							{
								{
								data=q[front];
								cout<<q[front]<<" is deleted!"<<endl;
								front=0;
								break;
								}
							}
							else
							{
							data=q[front];
							cout<<q[front]<<" is deleted!"<<endl;		
							front=front+1;							
						    break;
							}
						}
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
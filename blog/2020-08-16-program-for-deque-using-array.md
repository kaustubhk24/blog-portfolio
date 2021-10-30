---
title: Program for Deque Using Array
date: 2020-08-16T12:18:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-for-deque-using-array/

---
Article has been moved to
```cpp title="deque.cpp"
#include<iostream>
using namespace std;
int front=-1;
int rear=-1;
int q[10];
int data;
bool isfull()
{
	if(rear==9)
	{
		return 1;
	}
	else 
	{
		return 0;
	}
}
bool isempty()
{
	if(front==-1)
	{
		return 1;
	}
	else
	{
		return 0;
	}
}
int insert_front()
{
	if(isfull())
	{
		cout<<"Queue Overflow!"<<endl;
	}
	else
	{
		if(front==-1)
		{
			front=0;
			rear=0;
		}
		else if(front<1)
		{
			cout<<"Cannot add Item"<<endl;
		}
		else
		{
			front=front-1;
		}
		cout<<"Enter Data:";
		cin>>data;
		q[front]=data;
	}
}
int insert_rear()
{
	if(isfull())
	{
		cout<<"Queue Overflow!"<<endl;
	}
	else
	{
		if(front==-1)
		{
			front=0;
			rear=0;
		}
		else
		{
			rear=rear+1;
		}
		cout<<"Enter Data:";
		cin>>data;
		q[rear]=data;
	}
}
int delete_front()
{
	if(isempty())
	{
		cout<<"Queue Underflow!"<<endl;
	}
	else
	{
		if(front==rear)
		{
			cout<<"Deleted element is "<<q[front];
			front=-1;
			rear=-1;
		}
		else
		{
			cout<<"Deleted element is "<<q[front];
			front=front+1;
		}
	}
}
int delete_rear()
{
	if(isempty())
	{
		cout<<"Queue Underflow!"<<endl;
	}
	else
	{
		if(front==rear)
		{
			cout<<"Deleted element is "<<q[front];
			front=-1;
			rear=-1;
		}
		else
		{
			cout<<"Deleted element is "<<q[rear];
			rear=rear-1;
		}
	}
}
int display()
{
	if(isempty())
	{
		cout<<"Queue Underflow!"<<endl;
	}
	else
	{
		cout<<"Queue elements are:"<<endl;
		for(int i=front;i<=rear;i++)
		{
			cout<<q[i]<<"->";
		}
	}
}
int main()
{
	int ch,ch1,ch2;
	while(ch!=-1)
	{
		cout<<"n---
Article has been moved to-Menu---
Article has been moved to-"<<endl;
		cout<<"1.Input Restricted Queue"<<endl;
		cout<<"2.Output Restricted Queue"<<endl;
		cout<<"3.Exit"<<endl;
		cout<<"Enter a choice:";
		cin>>ch;
		switch(ch)
		{
			case 1:
				while(ch1!=-1)
				{
						cout<<"n--Input Restricted Queue--"<<endl;
						cout<<"1.Add at Rear."<<endl;
						cout<<"2.Delete from Front."<<endl;
						cout<<"3.Delete from Rear."<<endl;
						cout<<"4.Display"<<endl;
						cout<<"5.Exit"<<endl;
						cout<<"Enter a choice:";
						cin>>ch1;
						switch(ch1)
						{
							case 1:
								insert_rear();
								break;						
							case 2:
								delete_front();
								break;
							case 3:
								delete_rear();
								break;
							case 4:
								display();
								break;
							case 5:
								exit(0);
						}
				}
			case 2:
					while(ch2!=-1)
				{
						cout<<"n--Input Restricted Queue--"<<endl;
						cout<<"1.Add at Rear."<<endl;
						cout<<"2.Add at Front."<<endl;
						cout<<"3.Delete from Front."<<endl;
						cout<<"4.Display"<<endl;
						cout<<"5.Exit"<<endl;
						cout<<"Enter a choice:";
						cin>>ch2;
						switch(ch2)
						{
							case 1:
								insert_rear();
								break;						
							case 2:
								insert_front();
								break;
							case 3:
								delete_front();
								break;
							case 4:
								display();
								break;
							case 5:
								exit(0);
						}
				}
				case 3:
					exit(0);
		}
	}
}

```
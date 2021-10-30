---
title: Program for Stack Implementation using CPP
date: 2020-08-16T12:15:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-for-stack-implementation-using-cpp/
---
Article has been moved to

```cpp title="Stack.cpp"
  
#include  
using namespace std;  
  
int s[10],i;  
int top=-1;  
 int display()  
 {  
 cout<<"Stack:"< for(i=0;i<=top;i++)  
 {  
 cout<<"Element at position "< }  
 }  
 bool isfull()  
 {  
 if(top==9)  
 return 1;  
 else   
 return 0;  
 }  
 bool isempty()  
 {  
 if(top==-1)  
 return 1;  
 else  
 return 0;  
 }  
int main()  
{  
 int ch;  
 while(ch!=-1)  
 {  
 cout<<"n---
Article has been moved to--MENU---
Article has been moved to--"< cout<<"1.Push."< cout<<"2.Pop."< cout<<"3.Display"< cout<<"4.Exit"< cout<<"Enter a choice:";  
 cin>>ch;  
 switch(ch)  
 {  
 case 1:  
 if(isfull())  
 {  
 cout<<"Stack is full"< break;  
 }  
 else  
 {  
 top=top+1;  
 cout<<"Enter a character:";  
 cin>>s[i];  
 display();  
 if(isfull())  
 {  
 cout<<"Stack is Full!"< }  
 break;  
 }  
 case 2:  
 if(isempty())  
 {  
 cout<<"Stack is empty!"< break;  
 }   
 else  
 {  
 cout< top=top-1;  
 display();  
 if(isempty())  
 {  
 cout<<"Stack is Empty!"< }  
 break;  
 }  
 case 3:  
 if(isempty())  
 {  
 cout<<"Stack is empty!"< }  
 else  
 display();  
 break;  
 case 4:  
 exit(0);   
 }  
 }  
}  
  
  
  

```

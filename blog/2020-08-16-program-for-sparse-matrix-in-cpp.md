---
title: Program for Sparse Matrix in CPP
date: 2020-08-16T12:13:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-for-sparse-matrix-in-cpp/
---

```
  
#include  
using namespace std;   
int main()  
{  
 int sparse1[10][3],sparse2[10][3],sum[10][3];  
 int m,n,p,q,t1,t2,s,d,element;  
 int i,j;  
 cout<<"Enter the number of rows and columns:";  
 cin>>m>>n;  
 t1=t2=0;  
 cout<<"Enter the first matrix:n";  
 for(i=1;i<=m;i++)  
 {  
 for(j=1;j<=n;j++)  
 {  
 cin>>element;  
 if(element!=0)  
 {  
 t1=t1+1;  
 sparse1[t1][1]=i;  
 sparse1[t1][2]=j;  
 sparse1[t1][3]=element;  
 }  
 }  
 }  
 sparse1[0][1]=m;  
 sparse1[0][2]=n;  
 sparse1[0][3]=t1;  
 cout<<"Enter the second matrix:n";  
 for(i=1;i<=m;i++)  
 {  
 for(j=1;j<=n;j++)  
 {  
 cin>>element;  
 if(element!=0)  
 {  
 t2=t2+1;  
 sparse2[t2][1]=i;  
 sparse2[t2][2]=j;  
 sparse2[t2][3]=element;  
 }  
 }  
 }  
 sparse2[0][1]=m;  
 sparse2[0][2]=n;  
 sparse2[0][3]=t2;  
 cout<<"The first sparse matrix is:";  
 cout<<"n-----------------------n";  
 for(i=0;i<=t1;i++)  
 {  
 cout< }  
 cout<<"The second sparse matrix is:";  
 cout<<"n-----------------------n";  
 for(i=0;i<=t2;i++)  
 {  
 cout< }  
 i=j=s=d=1;  
 while((i<=t1)&&(j<=t2))  
 {  
 if(sparse1[i][1]==sparse2[j][1])   
 {  
 if(sparse1[i][2]==sparse2[j][2])   
 {  
 sum[s][1]=sparse1[i][1];  
 sum[s][2]=sparse1[i][2];  
 sum[s][3]=sparse1[i][3]+sparse2[j][3];  
 i++;  
 j++;  
 if(sum[s][3]!=0)  
 s++;  
 }  
 else   
 {  
 if(sparse1[i][2] {  
 sum[s][1]=sparse1[i][1];  
 sum[s][2]=sparse1[i][2];  
 sum[s][3]=sparse1[i][3];  
 i++;  
 s++;  
 d++;  
 }  
 else  
 {  
 sum[s][1]=sparse2[j][1];  
 sum[s][2]=sparse2[j][2];  
 sum[s][3]=sparse2[j][3];  
 j++;  
 d++;  
 s++;  
 }  
 }  
 }  
 else   
 {  
 if(sparse1[i][1] {  
 sum[s][1]=sparse1[i][1];  
 sum[s][2]=sparse1[i][2];  
 sum[s][3]=sparse1[i][3];  
 i++;  
 d++;  
 s++;  
 }  
 else  
 {  
 sum[s][1]=sparse2[j][1];  
 sum[s][2]=sparse2[j][2];  
 sum[s][3]=sparse2[j][3];  
 j++;  
 s++;  
 d++;  
 }  
 }  
 }  
 if(i<=t1)  
 {  
 for(p=i;p<=t1;p++)  
 {  
 sum[s][1]=sparse1[p][1];  
 sum[s][2]=sparse1[p][2];  
 sum[s][3]=sparse1[p][3];  
 s++;  
 d++;  
 }  
 }  
 else if(j<=t2)  
 {  
 for(p=j;p<=t2;p++)  
 {  
 sum[s][1]=sparse2[p][1];  
 sum[s][2]=sparse2[p][2];  
 sum[s][3]=sparse2[p][3];  
 s++;  
 d++;  
 }  
 }  
 sum[0][1]=m,sum[0][2]=n,sum[0][3]=s-1;  
 cout<<"The sum is :";  
 cout<<"n-----------------------n";  
 for(i=0;i {  
 cout< }  
 return 0;  
}  
  
  

```

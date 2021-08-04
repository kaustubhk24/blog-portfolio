---
title: Program for Quick Sort in CPP
date: 2020-08-16T12:07:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-for-quick-sort-in-cpp/

---
```cpp title="Quick.cpp"
#include <iostream> 
using namespace std; 
void swap(int* a, int* b) 
{ 
	int t = *a; 
	*a = *b; 
	*b = t; 
} 

int partition (int arr[], int low, int high) 
{ 
	int pivot = arr[high]; 
	int i = (low - 1); 

	for (int j = low; j <= high - 1; j++) 
	{ 
	
		if (arr[j] < pivot) 
		{ 
			i++; 
			swap(&arr[i], &arr[j]); 
		} 
	} 
	swap(&arr[i + 1], &arr[high]); 
	return (i + 1); 
} 


void quickSort(int arr[], int low, int high) 
{ 
	if (low < high) 
	{ 

		int pi = partition(arr, low, high); 

	
		quickSort(arr, low, pi - 1); 
		quickSort(arr, pi + 1, high); 
	} 
} 


void printArray(int arr[], int size) 
{ 
	int i; 
	for (i = 0; i < size; i++) 
		cout << arr[i] << " "; 
	cout << endl; 
} 

int main() 
{ 
	int n;
	cout<<"How many elements :";
	cin>>n;
	cout<<"Enter elements :";
	int arr[n];
	for(int i=0;i<n;i++)
	{
		cin>>arr[i];
	}
	quickSort(arr, 0, n - 1); 
	cout << "Sorted array: n"; 
	printArray(arr, n); 
	return 0; 
} 

```
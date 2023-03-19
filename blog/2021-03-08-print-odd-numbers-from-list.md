---
title: Get List as input And Print Odd Numbers from List
date: 2021-03-08T06:36:19+00:00
authors: kaustubh

slug: /print-odd-numbers-from-list/



---
In this program we have to take list as input from user and we will print Odd Numbers from list.

```python title="file.py"
#Expected input
Enter Number of Elements in List : 3
Enter Element 1 :7
Enter Element 2 :2
Enter Element 3 :6
Output :
Following are the Odd Numbers From List Given
7

```




 In this program we have to take list as input from user and we will print Odd Numbers from list.




```
#Expected input
Enter Number of Elements in List : 3
Enter Element 1 :7
Enter Element 2 :2
Enter Element 3 :6
Output :
Following are the Odd Numbers From List Given
7
```

Answer :

```python title="file.py"
# Function to Get Number and print if it is odd
def printOdd():
    print("Following are the Odd Numbers from Given List")
    for num in nums:
        if not num%2==0:
            print(num)
nums=[] # declaring list
# input Number of Elements
n=int(input("Enter Number of Elements :"))
# iterating throgh nums list to get elements run time
for i in range(1,n+1):
    nums.append(int(input("Enter Element {} :".format(i))))
    #Appending numbers in num array taken from user input
    #calling function to print output
printOdd()

```

Output: 1

```python title="file.py"
Enter Number of Elements in List : 3
Enter Element 1 :7
Enter Element 2 :2
Enter Element 3 :6
Following are the Odd Numbers From List Given
7
```

Output 2:

```python title="file.py"
Enter Number of Elements :7
Enter Element 1 :7
Enter Element 2 :6
Enter Element 3 :5
Enter Element 4 :4
Enter Element 5 :3
Enter Element 6 :2
Enter Element 7 :1
Following are the Odd Numbers from Given List
7
5
3
1
```


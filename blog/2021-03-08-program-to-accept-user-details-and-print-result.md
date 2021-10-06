---
title: Program To Accept User Details And Print Result
date: 2021-03-08T08:37:15+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-to-accept-user-details-and-print-result/
---
You have to write program to Accept student details Like Name, Marks ( Maths, Chemistry , Physics) and Print Percentage , User will dynamically select number of students ,

**For Example :**

```python title="file.py"
Input
1 # Number of Users
33 # Physics Marks
44 # Chemistry Marks
77 # Maths Marks

```

This will output student result All subject's marks and percent must be greater than equal to 35

**Constraint**

```python title="file.py"
0 => Marks => 100
```

Marks must be greater than equal to 0 and less than equal to 100

**Passing Criteria:**

```python title="file.py"
Marks >=35 To Pass
Percent >= To Pass
```

**Output (Expected )**
![Program To Accept User Details And Print Result](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2021/03/image-12-1024x243.png "Program To Accept User Details And Print Result") 



**Solution**

```python title="file.py"
# define function accept student name, get marks of 3 subjects pcm and calculate percentage
data=[]
n=0
def getData():
 n=int(input("Enter Number of Students :"))
 for i in range(1,n+1):
 user={}
 user["Name"]=input("Enter student Name :")
 user["Physics"]=checkInput(int(input("Enter Physics Marks :")))
 user["Chemistry"]=checkInput(int(input("Enter chemistry Marks :")))
 user["Maths"]=checkInput(int(input("Enter math Marks :")))
 percentage=((user["Physics"]+user["Chemistry"]+user["Maths"])*100)/300
 user["Percent"]=round(float(percentage),2)
 user["Result"]=checkResult(user)
 addUser(user)
def checkResult(usr):
 flag ="PASSES"
 if usr["Physics"]<35:
 flag="FAILS"
 elif usr["Chemistry"]<35:
 flag="FAILS"
 elif usr["Maths"]<35:
 flag="FAILS"
 elif usr["Percent"]<35:
 flag="FAILS"
 return flag
def addUser(usr):
 data.append(usr)
 print("Data added successfully !!!")
def checkInput(marks):
 if marks <= 100 and marks>=0:
 return marks
 else:
 return checkInput(int(input("Please Do not enter Marks More than 100 and Less than 0\nPlease Enter Marks Again : ")))
def printData():
 print("_________________________________________________________________________________________________________")
 print('{:30s}{:15s}{:15s}{:15s}{:17s}{:19s} '.format("Name","Physics","Chemistry","Maths","Percent[%]","Result"))
 print("_________________________________________________________________________________________________________")
 for usr in data:
 print("\n{:30s}{:5d}{:15d}{:13d}\t\t\t{}\t\t{} ".format(usr["Name"],usr["Physics"],usr["Chemistry"],usr["Maths"],str(usr["Percent"])+"%",usr["Result"]))
 print("_________________________________________________________________________________________________________")
getData()
printData()
 
```

**Output:**

```python title="file.py"

Enter Number of Students :4
Enter student Name :Mahesh Disale
Enter Physics Marks :77
Enter chemistry Marks :87
Enter math Marks :99
Data added successfully !!!
Enter student Name :Nikhil Malvadkr
Enter Physics Marks :66
Enter chemistry Marks :87
Enter math Marks :93
Data added successfully !!!
Enter student Name :Sagar Chavan
Enter Physics Marks :66
Enter chemistry Marks :12
Enter math Marks :99
Data added successfully !!!
Enter student Name :Angad Yadav
Enter Physics Marks :33
Enter chemistry Marks :56
Enter math Marks :98
Data added successfully !!!

```
![Program To Accept User Details And Print Result](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2021/03/image-12-1024x243.png "Program To Accept User Details And Print Result")
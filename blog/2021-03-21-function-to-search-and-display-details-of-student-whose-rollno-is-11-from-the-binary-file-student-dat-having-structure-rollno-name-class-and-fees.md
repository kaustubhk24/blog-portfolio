---
title: function to search and display details of student whose rollno is '11' from the binary file student.dat having structure [rollno, name, class and fees].
date: 2021-03-21T06:16:21+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /function-to-search-and-display-details-of-student-whose-rollno-is-11-from-the-binary-file-student-dat-having-structure-rollno-name-class-and-fees/
---
Article has been moved to
```python title="file.py"
import pickle
filename="student.dat"
f=open(filename,"wb")
data=[
 {
 'rollno':11,
 'name':'RM',
 'class':'MCA',
 'fees':54554
 },
 {
 'rollno':12,
 'name':'USER1',
 'class':'MCA',
 'fees':54554
 },
 {
 'rollno':13,
 'name':'USER2',
 'class':'MCA',
 'fees':54554
 }
]
pickle.dump(data,f)
f.close()
print("success")
infile = open(filename,'rb')
dictlist = pickle.load(infile)
infile.close()
for dict1 in dictlist:
 if (dict1["rollno"]==11):
 print("Student found with Roll No 11 , Name : {} | Class : {} | Fees {}".format((dict1["name"]),(dict1["class"]),(dict1["fees"])))
```

output:

```python title="Output"
success
Student found with Roll No 11 , Name : RM | Class : MCA | Fees 54554
```
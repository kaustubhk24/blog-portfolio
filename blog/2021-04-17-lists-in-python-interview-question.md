---
title: Lists In Python Interview Question
date: 2021-04-17T04:22:04+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /lists-in-python-interview-question/
---
Consider a list (`list = []`). You can perform the following commands:

 1. `insert i e`: Insert integer e��at position�i.
 2. `print`: Print the list.
 3. `remove e`: Delete the first occurrence of integer e.
 4. `append e`: Insert integer�e�at the end of the list.
 5. `sort`: Sort the list.
 6. `pop`: Pop the last element from the list.
 7. `reverse`: Reverse the list.

Initialize your list and read in the value of�n�followed by�n�lines of commands where each command will be of the�7�types listed above. Iterate through each command in order and perform the corresponding operation on your list.

**Example** 
N=4

append 1

append 2

insert 3 1

print 



```
[1, 3, 2]

```


**Input Format**

The first line contains an integer,�, denoting the number of commands. 
Each line��of the��subsequent lines contains one of the commands described above.

**Constraints**

 * The elements added to the list must be�_integers_.

**Output Format**

For each command of type�`print`, print the list on a new line.

**Sample Input 0**


```
12
insert 0 5
insert 1 10
insert 0 6
print
remove 6
append 9
append 1
sort
print
pop
reverse
print

```


**Sample Output 0**


```
[6, 5, 10]
[1, 5, 9, 10]
[9, 5, 1]
```


## Answer

```vb title="file.vb"
if __name__ == '__main__':
 N = int(input())
 commands = {
 "insert": lambda x, y, z: x.insert(y, z),
 "print": lambda x: print(x),
 "remove": lambda x, y: x.remove(y),
 "append": lambda x, y: x.append(y),
 "sort": lambda x: x.sort(),
 "pop": lambda x: x.pop(),
 "reverse": lambda x: x.reverse(),
 }
 out = []
 for i in range(N):
 a = input()
 split_a = a.split(' ')
 command = split_a[0]
 try:
 commands[command](out, int(split_a[1]), int(split_a[2]))
 except IndexError:
 try:
 commands[command](out, int(split_a[1]))
 except IndexError:
 commands[command](out)

```



 Copyrights
 



 If you have any copyrights issues/complaints related to this article, you may send us mail at [kaustubh@outlook.in](mailto:kaustubh@outlook.in), Also please refer to [Terms and Conditions](https://blog.kaustubh.codes/terms-conditions/) and [Privacy Policy.](https://blog.kaustubh.codes/privacy-policy/)




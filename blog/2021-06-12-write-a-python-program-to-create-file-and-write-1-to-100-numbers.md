---
title: write a python program to create file and write 1 to 100 numbers
date: 2021-06-12T01:52:22+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-python-program-to-create-file-and-write-1-to-100-numbers/
---
Article has been moved to
 

Que > Write A Python Program To Create File And Write 1 To 100 Numbers, print each number on new line

** Program > **


```python title="write-numbers.py"
def writeNumbers(F):
    temp=""
    for i in range(1,101):
        temp+=str(i)+"\n"
    F.write(temp)
f=open('text.txt','w')
writeNumbers(f)
```
```bash title="cmd"
$ python write-numbers.py 
```

```python title="output.py"
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
```
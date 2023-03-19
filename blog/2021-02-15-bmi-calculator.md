---
title: BMI Calculator
date: 2021-02-15T06:11:11+00:00
authors: kaustubh

slug: /bmi-calculator/
---
 

```vb title="file.vb"
Problem
Tracking your BMI is a useful way of checking if you're maintaining a healthy weight. It's calculated using a person's weight and height, using this formula: weight / height'
Underweight = less than 18.5
Normal = more or equal to 18.5 and less than 25
Overweight = more or equal to 25 and less than 30
Obesity = 30 or more
Let's make finding out your BMI quicker and easier, by creating a program that takes a person's weight and height as input and outputs the corresponding BMI category.
Sample input
85
1.9
Sample Output
Normal

```

Code


```
#Python code
weight=float(input())
height=float(input())
a=weight/(height**2)
if(a<18.5):
    print("Underweight")
elif(a>=18.5 and a<25):
    print("Normal")
elif(a>=25 and a<30):
    print("Overweight")
elif(a>30):
    print("Obesity")
```

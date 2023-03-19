---
title: Write a function
date: 2021-02-27T03:06:36+00:00
authors: kaustubh

slug: /write-a-function/
---
An extra day is added to the calendar almost every four years as February 29, and the day is called a _leap day_. It corrects the calendar for the fact that our planet takes approximately 365.25 days to orbit the sun. A leap year contains a leap day.

In the Gregorian calendar, three conditions are used to identify leap years:

 * The year can be evenly divided by 4, is a leap year, unless:
 * The year can be evenly divided by 100, it is NOT a leap year, unless:
 * The year is also evenly divisible by 400. Then it is a leap year.

This means that in the Gregorian calendar, the years 2000 and 2400 are leap years, while 1800, 1900, 2100, 2200, 2300 and 2500 are NOT leap years. [Source](https://www.timeanddate.com/date/leapyear.html)

**Task**

Given a year, determine whether it is a leap year. If it is a leap year, return the Boolean `True`, otherwise return `False`.

Note that the code stub provided reads from STDIN and passes arguments to the `__leap` function. It is only necessary to complete the_is_leap` function.

**input Format**

Read year, the year to test.

**Constraints**

```python title="file.py"
1900 <= year <= 105
```

**Output Format**

The function must return a Boolean value (True/False). Output is handled by the provided code stub.

**Sample input 0**


```
1990

```


**Sample Output 0**


```
False

```


**Explanation 0**

1990 is not a multiple of 4 hence it's not a leap year.



```python title="file.py"
# Answer
def is_leap(year):
 leap = False
 if 1900<=year and year<=10**5:
 if year%100==0:
 if year%400==0:
 leap=True
 else:
 leap=False;
 elif year%4==0:
 leap=True
 else:
 leap=False
 else:
 leap=False
 # Write your logic here
 return leap
year = int(input())
print(is_leap(year))
```

```python title="file.py"
Output:
1990
False
```
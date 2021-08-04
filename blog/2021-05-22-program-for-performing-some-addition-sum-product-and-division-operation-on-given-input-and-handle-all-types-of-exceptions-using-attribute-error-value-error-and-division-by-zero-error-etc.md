---
title: Program for performing some addition, sum, product and division operation on given input and handle all types of Exceptions using Attribute Error, Value Error and Division by Zero Error, etc
date: 2021-05-22T01:49:24+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /program-for-performing-some-addition-sum-product-and-division-operation-on-given-input-and-handle-all-types-of-exceptions-using-attribute-error-value-error-and-division-by-zero-error-etc/
---
Que > Program for performing some addition, sum, product and division operation on given input and handle all types of Exceptions using Attribute Error, Value Error and Division by Zero Error, etc

```python title="file.py"
try:
 n1=int(input("Enter Integer 1:"))
 n2=int(input("Enter Integer 2:"))
 print(" N1 * N2 = ", n1*n2)
 print(" N1 / N2 =",n1/n2)
 print(" N1 + N2 =",n1+n2)
 print(" N1 - N2 =",n1-n2)
except ValueError:
 print("ValueError- Please enter valid number")
except ZeroDivisionError:
 print("ZeroDivisionError: You can not divide number by 0")
except AttributeError:
 print("AttributeError: Attribute is not valid")
except e as Exception:
 print("Unhandled Exception Ocurred : ",e)
finally:
 print("Program terminated")
```

```python title="Output"
Enter Integer 1:6
Enter Integer 2:0
 N1 * N2 = 0
ZeroDivisionError: You can not divide number by 0
Program terminated
```
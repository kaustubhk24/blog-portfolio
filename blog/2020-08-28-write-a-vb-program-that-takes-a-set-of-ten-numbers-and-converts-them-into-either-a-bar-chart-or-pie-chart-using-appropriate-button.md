---
title: 'Write a VB program that takes a set of ten numbers and converts them into either a bar chart or pie chart using appropriate button.'
date: 2020-08-28T14:46:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /write-a-vb-program-that-takes-a-set-of-ten-numbers-and-converts-them-into-either-a-bar-chart-or-pie-chart-using-appropriate-button/
---

```vb title="file.vb"
Private Sub cmdbar_Click()  
  
If Option1.Value Then  
  
MSChart1.chartType = VtChChartType2dBar  
  
Else  
  
MSChart1.chartType = VtChChartType3dBar  
  
End If  
  
MSChart1.RowCount = 10  
  
MSChart1.ColumnCount = 1  
  
For i = 1 To 10  
  
MSChart1.Row = i  
  
MSChart1.Column = 1  
  
MSChart1.Data = InputBox("Enter Data : " + Str(i) + " : ", "Data")  
  
MSChart1.RowLabel = "D" + Str(i)  
  
Next  
  
End Sub  
  
Private Sub cmdexit_Click()  
  
End  
  
End Sub  
  
Private Sub cmdpie_Click()  
  
MSChart1.chartType = VtChChartType2dPie  
  
MSChart1.RowCount = 1  
  
MSChart1.ColumnCount = 10  
  
For i = 1 To 10  
  
MSChart1.Row = 1  
  
MSChart1.Column = i  
  
MSChart1.Data = InputBox("Enter Data : " + Str(i) + " : ", "Data")  
  
Next  
  
End Sub  
  
Private Sub Form_Load()  
  
MSChart1.Visible = True  
  
End Sub  
  
  

```

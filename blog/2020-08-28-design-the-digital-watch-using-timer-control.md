---
title: Design the digital watch using Timer Control.
date: 2020-08-28T14:34:00+00:00
authors: kaustubh

slug: /design-the-digital-watch-using-timer-control/
---

[![](https://1.bp.blogspot.com/-sfOmIHLdXSg/X0kVwsRWs7I/AAAAAAAAfgk/KiMH72LT6rkTcjQ-dc75Gtq-1ldbNe1LQCLcBGAsYHQ/s400/1.png)](https://1.bp.blogspot.com/-sfOmIHLdXSg/X0kVwsRWs7I/AAAAAAAAfgk/KiMH72LT6rkTcjQ-dc75Gtq-1ldbNe1LQCLcBGAsYHQ/s280/1.png)


```vb title="file.vb"
Private Sub Command1_Click()  
	Timer1.Enabled = True  
  
  
	  
End Sub  
  
Private Sub Command2_Click()  
	Timer1.Enabled = False  
	  
End Sub  
  
Private Sub Timer1_Timer()  
	Label1.Caption = Time  
	  
End Sub  
   
  
  
  
  
  

```

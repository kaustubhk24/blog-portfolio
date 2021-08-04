---
title: 'Design a calculator in VB, Which has Two extra command buttons to check factorial of given number and to check whether entered number is even or odd'
date: 2020-08-28T14:39:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /design-a-calculator-in-vb-which-has-two-extra-command-buttons-to-check-factorial-of-given-number-and-to-check-whether-entered-number-is-even-or-odd/
---
Design a calculator in VB, Which has Two extra command buttons to check factorial of given number and to check whether entered number is even or odd 


```vb title="file.vb"
  
Dim no1 As Integer  
Dim no2 As Integer  
Dim op As Integer  
  
  
Private Sub Command1_Click()  
	Text1.Text = Text1.Text & 1  
End Sub  
  
Private Sub Command10_Click()  
	Text1.Text = Text1.Text & 9  
End Sub  
  
Private Sub Command11_Click()  
	no1 = Val(Text1.Text)  
	Text1.Text = "0"  
	op = 4  
End Sub  
  
Private Sub Command12_Click()  
	no1 = Val(Text1.Text)  
	Text1.Text = "0"  
	op = 5  
End Sub  
  
Private Sub Command13_Click()  
	no1 = Val(Text1.Text)  
	If no1 Mod 2 = 0 Then  
		Text1.Text = "Even"  
	Else  
		Text1.Text = "Odd"  
	End If  
	  
	  
End Sub  
  
Private Sub Command14_Click()  
	Text1.Text = Text1.Text & .  
End Sub  
  
Private Sub Command15_Click()  
	no2 = Val(Text1.Text)  
	If op = 1 Then  
		Text1.Text = no1 + no2  
	ElseIf op = 2 Then  
		Text1.Text = no1 - no2  
		ElseIf op = 3 Then  
		Text1.Text = no1 * no2  
		ElseIf op = 4 Then  
		Text1.Text = no1 / no2  
		ElseIf op = 5 Then  
		Text1.Text = no1 Mod no2  
		End If  
	  
End Sub  
  
Private Sub Command16_Click()  
	Dim f As Integer  
	f = 1  
	no1 = Val(Text1.Text)  
	While no1  
		f = f * no1  
		no1 = no1 - 1  
	Wend  
	Text1.Text = f  
	  
End Sub  
  
Private Sub Command17_Click()  
	no1 = Val(Text1.Text)  
	Text1.Text = "0"  
	op = 1  
End Sub  
  
Private Sub Command18_Click()  
	no1 = Val(Text1.Text)  
	Text1.Text = "0"  
	op = 2  
End Sub  
  
Private Sub Command19_Click()  
	no1 = Val(Text1.Text)  
	Text1.Text = "0"  
	op = 3  
End Sub  
  
Private Sub Command2_Click()  
		Text1.Text = Text1.Text & 2  
End Sub  
  
Private Sub Command20_Click()  
	Text1.Text = "0"  
End Sub  
  
Private Sub Command3_Click()  
	Text1.Text = Text1.Text & 3  
End Sub  
  
Private Sub Command4_Click()  
	Text1.Text = Text1.Text & 4  
	  
End Sub  
  
Private Sub Command5_Click()  
	Text1.Text = Text1.Text & 6  
End Sub  
  
Private Sub Command6_Click()  
	Text1.Text = Text1.Text & 5  
End Sub  
  
Private Sub Command7_Click()  
	Text1.Text = Text1.Text & 8  
End Sub  
  
Private Sub Command8_Click()  
	Text1.Text = Text1.Text & 7  
End Sub  
  
Private Sub Command9_Click()  
	Text1.Text = Text1.Text & 0  
End Sub  
  
  
  

```

---
title: Time Table in Python
date: 2021-03-08T10:42:15+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /time-table-in-python/



---
 

In this tutorial we will write a program , when you will double click on Python file it will show you Windows 10 notification and will show Today's lecture Schedules

To use this update your subject names and lecture times accordingly

```python title="file.py"
import time
from datetime import datetime
# Basic Configuration
# Your Name
username="your_name"
#Timeout
timeout=30
# Schedules
todaystr=datetime.today().strftime('%A')
days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
today=days.index(todaystr)
currentTime = time.strftime('%H:%M:%S')
# currentTime='14:24:00'
#print(currentTime)
# Use time in 24 Hours Format, If you have more lectures Create More variables
firstLecture='09:15:00'
firstLectureEnd='10:15:00'
secondLecture='10:25:00'
secondLectureEnd='11:25:00'
thirdLecture='11:35:00'
thirdLectureEnd='12:35:00'
fourthLecture='13:30:00'
fourthLectureEnd='14:30:00'
fifthLecture='14:40:00'
fifthLectureEnd='15:40:00'
Lectures=[firstLecture,secondLecture,thirdLecture,fourthLecture,fifthLecture]
# 0 1 2 3 4 5 6 7 8 9
subjects=['HTML','VB.NET','Python','C++','Java', 'No Lecture','Case Study','Python Practical','Android','Guest Lecture']
schedule=[
 # Sunday 0
{
 firstLecture:subjects[5],
 secondLecture:subjects[5],
 thirdLecture:subjects[5],
 fourthLecture:subjects[5],
 fifthLecture:subjects[5]
},
# Sunday End
# Monday 1 starts
{
 firstLecture:subjects[2],
 secondLecture:subjects[3],
 thirdLecture:subjects[1],
 fourthLecture:subjects[6],
 fifthLecture:subjects[7]
},
# Monday End
# Tuesday 2 Starts
{
 firstLecture:subjects[0],
 secondLecture:subjects[2],
 thirdLecture:subjects[4],
 fourthLecture:subjects[3],
 fifthLecture:subjects[1]
},
# Tuesday End
# Wednesday 3 Starts
{
 firstLecture:subjects[0],
 secondLecture:subjects[1],
 thirdLecture:subjects[3],
 fourthLecture:subjects[4],
 fifthLecture:subjects[7]
},
# Wednesday End
# Thursday 4 Starts
{
 firstLecture:subjects[1],
 secondLecture:subjects[4],
 thirdLecture:subjects[2],
 fourthLecture:subjects[6],
 fifthLecture:subjects[0]
},
# Thursday End
# Friday 5 Starts
{
 firstLecture:subjects[3],
 secondLecture:subjects[0],
 thirdLecture:subjects[4],
 fourthLecture:subjects[2],
 fifthLecture:subjects[8]
},
# Friday End
# Saturday 6 Starts
{
 firstLecture:subjects[9],
 secondLecture:subjects[9],
 thirdLecture:subjects[9],
 fourthLecture:subjects[9],
 fifthLecture:subjects[9]
}
# All ends
]
#print(schedule[today][thirdLecture])
# output=""
# for i in range(0,6):
# output=output+"\nLectures for {} ".format(days[i])+"\n"
# for lecture in Lectures:
# output=output+" | "+schedule[i][lecture]
# print(output)
# Argument 1 : Day of the week
# Argument 2 : Lecture
#print(schedule[today+1][Lectures[0]] )
def nextLecture(today,currentTime):
 if currentTime "+schedule[today][lecture])
toast.show_toast("Next Lecture is About to start","Hello {}, {} Lecture is about to start".format(username,nextLecture(today, currentTime)),duration=timeout)
#print(nextLecture(today, currentTime))

```

Output 1: 

![](https://www.kaustubh.codes/imgs/wp-content/uploads/2021/03/image-13.png) 

Output 2:

This will show all lectures

![](https://www.kaustubh.codes/imgs/wp-content/uploads/2021/03/image-14.png) 
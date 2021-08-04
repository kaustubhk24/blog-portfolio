---
title: How To Make Setup File in VB.NET?
date: 2021-01-07T06:50:47+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /how-to-make-setup-file-in-vb-net/


---
If you have created Project and Now you want to distribute project to your customer or friends, you need to Create **setup.msi** or **setup.exe** file, So they can install it on there Windows computer and use same.

Now in this tutorial , we are making setup file of our recent Project [Tic Tac Toe](https://blog.kaustubh.codes/mini-project-tic-tac-toe-game-in-vb-net-with-free-source-code/), If you don't have your project and Just want to follow this tutorial , you can download this project for free, [Download Now](https://blog.kaustubh.codes/mini-project-tic-tac-toe-game-in-vb-net-with-free-source-code/).

## Installing Required Extension

Open Visual Studio ( We are using 2019 for this tutorial ) , Click on **Extension** and in **Search Box** type **Installer**, You will see option **Microsoft Visual Studio Installer Projects** , click on **Download** button Next to it.
![How To Make Setup File in VB.NET](http://blog.kaustubh.codes/imgs/wp-content/uploads/2021/01/image-10.png) 

You need to Close All Visual Studio windows to start installtion. Once installation is completed you can Open Visual Studio Again.

## Creating Installer 

Click on **View** tab and Select **Solution explorer**, In **Solution Explorer** right **click** on solution name , Click on **Add -> New Projec**t from Next window select **Setup Project**,
![How To Make Setup File in VB.NET](http://blog.kaustubh.codes/imgs/wp-content/uploads/2021/01/image-12.png) 

Now Click on **Next** Button, Enter Setup Project Name and Click on **Create** Button.

You will see file System, as below
![How To Make Setup File in VB.NET](http://blog.kaustubh.codes/imgs/wp-content/uploads/2021/01/image-13.png) 

You need Open Application Folder First and and right Click on Right window, select **Add -> Project Output** and select Option **Primary Output**.

Now click **ok** button, next you need to you right click on **primary output** option we just added and select **create shortcut to primary output and project name now**, by right clicking on shortcut you can change name of shortcut. we need to create **two** shortcuts one for user's desktop and another for user's program menu,
![How To Make Setup File in VB.NET](http://blog.kaustubh.codes/imgs/wp-content/uploads/2021/01/image-14.png) 

When we create shortcut we can right click on shortcut select **properties** select **icon** and set .ico as icon file. now move that shortcuts to user's desktop and user's programs menu.

Download image .ico file for icon



[Download Free](http://blog.kaustubh.codes/imgs/wp-content/uploads/2021/01/tic-tac-toe-1.png) 



Right click on solution name and select option **rebuild** it will start rebuilding you may see 


```
1.
rebuild all 1 success 1 failed or 0 skipped
or
2.
rebuild all 1 success 0 failed or 1 skipped
or
3.
rebuild all 2 success 0 failed or 0 skipped
```


If you see option **3 rebuild all 2 success 0 failed or 0 skipped**, then your setup.msi and setup.exe is ready,

but if not , then must be **error ,message**or **warning**, here we have warning, see image below,
![How To Make Setup File in VB.NET](http://blog.kaustubh.codes/imgs/wp-content/uploads/2021/01/image-15.png) 

After fixing this message / warning, click rebuild again. & Done , You just created **Setup.msi** and **Setup.exe**

## Locating Setup Files

To locate the file Open **Solution Explorer** -> Right click on **Setup Project** -> and See **Open in Explorer** , Check debug folder there you can see your setup files.
![How To Make Setup File in VB.NET](http://blog.kaustubh.codes/imgs/wp-content/uploads/2021/01/image-16.png) 

If you are NOT able to access this option , Open **Windows File Explorer** and Open Path below.

```vb title="file.vb"
C:\Users\username\source\repos\Tic Tac Toe\Setup1\Debug
{select your username and project name correctly.}
```

## Installing Setup File

Installing setup is very easy , Double click on **setup.msi** or **setup.exe** and just click next,next and done.
![How To Make Setup File in VB.NET](http://blog.kaustubh.codes/imgs/wp-content/uploads/2021/01/image-17.png) 

or You can install easily by Right Clicking Setup in solution explorer and select install button, that's it.

Congrats! You just created setup. If you have any issues just comment here, we will reply asap.

## Video Guide

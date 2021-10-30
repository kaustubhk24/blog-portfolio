---
title: Error Operation Must Use an Updateable Query
date: 2021-01-26T01:48:52+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /error-operation-must-use-an-updateable-query/



---
Article has been moved to
Almost everyone face Error Operation Must Use an Updateable Query , when they make first [setup](https://blog.kaustubh.codes/how-to-make-setup-file-in-vb-net/) of there .NET project.

## Error Images
![](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2021/01/error-operation-must-use-an-updateable-query-1024x683.png) 

If you have use try catch block and printed exception then you will get error from image 1 else you will get image 2 error.

## Reason

This error mostly happen when our database is placed in `C:/Program Files/` or `C:/Program Files(x86)` without required privileges. Database needs to be inside our C drive but not program files to avoid this issue. We have some solutions for you. Please find suitable solution for you. 

## Fixes

### Way 1:

Mostly when you are developing app. You are developing for specific client , then you can lock access database with password and place inside `C:/App-Name/database.mdb` , this is easiest way , in this you will not required to any privileges fixing. It will sort your issue. If it doesn't , Then you may follow Way 2.

### Way 2 :

Firstly find your username ( if you don't know).

To find Open command Prompt and type

`C:\Users\Kaustubh K.\ > whoami`

This command will print your username like.

`desktop-s-2sjjj\Kaustubh K.`

You need to remember that username.

Then right click on Database and **View Properties** & then click on **Security Tab** & Click on **Edit** Button refer screenshot below.
![error operation must use an updateable query](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2021/01/image-27.png) 

Select your name and allow all the rights, click **apply** and **ok**. That's it. You can use your database now.

If you still face any issue , you may view video Guide below. Let us know , if it works for you.
![error operation must use an updateable query](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2021/01/image-28.png) 




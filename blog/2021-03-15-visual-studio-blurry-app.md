---
title: 'Fixed - Visual Studio Blurry App'
date: 2021-03-15T07:31:56+00:00
authors: kaustubh

slug: /visual-studio-blurry-app/




---
 

Are you facing issues with Visual Studio Blurry App? Like you made app , while designing it's okay but after design completed and you ran the app, all the controls & text on it is blurry? If yes , then you are at right place , we covered , how to fix Visual studio blurry app in this tutorial, Let's get started 

First Open your Solution & then Click on **Project** Menu , Then last option in Project Menu will be your `**Project Name Properties**`, click on that , option as shown in image below,
![Visual Studio Blurry App](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2021/03/Visual-Studio-Blurry-1.png) 

In next step we will find our **app.manifest file** and we will make some necessary modifications, Now Click on **Application** tab and then we will click on **View Windows** Settings option, You don't have to make any changes in this step, you just have to follow along
![Visual Studio Blurry App](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2021/03/Visual-Studio-Blurry-2-1024x480.png) 

Now when you will click View Windows Settings , your editor will open **app.manifest** file, Some modifications are required in this , we will make modifications and we're good to go,

**Modifications**

In your **app.manifest** file, press **ctrl + f** and search for **dpiAware**, Now you will see some lines of code that is already commented, we will just remove there comment, See 



Just remove this lines of comment

**Current text**



You should have only this , just remove comments



true




After this save all, click ctrl + s, Now run your app, if app still not fixed, then just restart Visual studio,\ & we just fixed visual studio blurry app problem,

Also Watch Video Guide if you face any issues,




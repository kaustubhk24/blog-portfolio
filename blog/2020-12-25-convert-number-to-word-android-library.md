---
title: Convert Number To Word Android Library
date: 2020-12-25T03:49:07+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /convert-number-to-word-android-library/



---
 

Many times we need Convert Number to Word, You don't need to waste your time in Writing code for that. You can use below library to do that.



[Visit Library](https://github.com/kaustubhk24/NumberToWords-Library)



Now Let us see with example how it works

## Creating Android Studio Project

First Open your android Studio then click on **New Project** -> Select **Empty Activity**, after that Click on **finish**.
![Convert Number To Word Android Library](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/12/image-5.png) 

Now wait while Android Studio setup your Project. In next step we will Import Library.

To get Latest version of Library [Visit here](https://jitpack.io/#kaustubhk24/NumberToWords-Library).

After that select suitable version. { Note : Always use latest version }

To follow this tutorial we are using [this version](https://jitpack.io/#kaustubhk24/NumberToWords-Library/c3880604dc).

## Importing Library

To import Library First open **build.gradle** file, check screenshot,
![Convert Number To Word Android Library](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/12/image-6.png) 

and paste below code there, Inside **allprojects** and **repositories**
![Convert Number To Word Android Library](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/12/image-8.png) 

```java title="build.gradle"
 allprojects {
 repositories {
 ...
 maven { url 'https://jitpack.io' }
 }
 }
```



Now Open **build.gradle (Module**) file and paste implementation line there in dependencies.
![Convert Number To Word Android Library](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/12/image-7.png) 

```java title="build.gradle"
implementation 'com.github.kaustubhk24:NumberToWords-Library:c3880604dc'
```

That's it . Now you will see one notification that Gradle files have changed since last project sync. 

You need to click on **Sync Now** Button.
![Convert Number To Word Android Library](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/12/image-9.png) 

Now we will impletement Library in our project.

## Implementing in Project

Now Open Your **MainActivity.xml** and remove complete code from there and paste code below there,

```xml title="MainActivity.xml"
<xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="https://schemas.android.com/apk/res/android"
 xmlns:app="https://schemas.android.com/apk/res-auto"
 xmlns:tools="https://schemas.android.com/tools"
 tools:context=".MainActivity">
 <TextView
 app:layout_constraintBottom_toBottomOf="parent"
 app:layout_constraintLeft_toLeftOf="parent"
 app:layout_constraintRight_toRightOf="parent"
 app:layout_constraintTop_toTopOf="parent" />
</androidx.constraintlayout.widget.ConstraintLayout>
```

Now we will write code in **MainActivity.Java**. Paste this code inside **onCreate()**. check screenshot<figure class="wp-block-image size-large"
![Convert Number To Word Android Library](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/12/image-10.png) 

```java title="MainActivity.java"
TextView txt=findViewById(R.id.txt);
NumberToWordConverter numberToWordConverter=new NumberToWordConverter();
txt.setText(numberToWordConverter.convert(10505));

```

## Output

Now Lets see output, To see output connect your device to Android Studio and Click on run.

![Convert Number To Word Android Library](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/12/image-11.png) 


## Download Project

If you still not able to run project. Download complete project from Link below.



[Download Now](https://github.com/JustInClicks-com/static-cdn/raw/main/Downloads/android/NumberToWordsExample2.zip)


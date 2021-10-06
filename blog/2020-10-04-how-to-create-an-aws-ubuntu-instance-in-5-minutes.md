---
title: How to Create an AWS Ubuntu Instance in 5 minutes?
date: 2020-10-04T17:10:46+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /how-to-create-an-aws-ubuntu-instance-in-5-minutes/


---
 



## Let's See: How to Create an AWS Ubuntu Instance in 5 minutes?



In this tutorial you are going to Learn , How to create an AWS Ubuntu instance in 5 minutes.

To use any AWS service you must have your AWS account. [Create your account here](https://kaustubhk24.netlify.app/how-to-create-aws-account/).

Once account is created, visit <https://console.aws.amazon.com/>

Now Click **Services** on Top left corner.You will see below screen .
![How to Create an AWS Ubuntu Instance in 5 minutes?](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/10/Screenshot-from-2020-10-04-22-15-45-1024x576.png) Pic : AWS Console Home

Now to create an instance, we have to click on **EC2 (Elastic Compute Cloud)** . After clicking EC2, you have to scroll down till see below screen.
![How to Create an AWS Ubuntu Instance in 5 minutes?](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/10/Screenshot-from-2020-10-04-22-15-58-1-1024x576.png) 



Now click on **Launch Instance** Button. Now we are going to configure our instance details.


![How to Create an AWS Ubuntu Instance in 5 minutes?](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/10/Screenshot-from-2020-10-04-22-16-40-1024x576.png) 





## **Step 1:** 

In this step we have to select An Amazon Machine Image (AMI). we will simply click on "**FREE Tier Only** " button. So It will show only the FREE options to us.
![How to Create an AWS Ubuntu Instance in 5 minutes?](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/10/Screenshot-from-2020-10-04-22-17-08-1024x576.png) 



For this tutorial we are going to use **Ubuntu Server 20.04 LTS (HVM), SSD Volume Type - ami-0cda377a1b884a1bc (64-bit x86) / ami-086c142842468ba9d (64-bit Arm)**. Now click on **select** button as shown in image.
![How to Create an AWS Ubuntu Instance in 5 minutes?](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/10/Screenshot-from-2020-10-04-22-17-38-1024x576.png) 



## **Step 2 :** 

In this step we are going to select an Instance type. for this tutorial we will use General Purpose instance which is FREE Tier eligible. see image.

Then we will click on **Next Configure Instance details.**
![How to Create an AWS Ubuntu Instance in 5 minutes?](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/10/Screenshot-from-2020-10-04-22-17-44-1024x576.png) 



## **Step 3:** 

We will keep settings as it is. There is NO need to make changes here. Now click **Next: Add Storage**
![How to Create an AWS Ubuntu Instance in 5 minutes?](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/10/Screenshot-from-2020-10-04-22-18-04-1024x576.png) 

## **Step 4:** 

Here we have to select storage for our instance. As we are creating FREE tier instance . we must use the storage less than 30 GB. here I am using 20 GB storage

Now see option **Delete on Termination** . If you want delete your storage automatically once your instance is terminated,then select that option.

& Select Default encryption option available there.

How to Create an AWS Ubuntu Instance in 5 minutes?

_Free tier eligible customers can get up to 30 GB of EBS General Purpose (SSD) or Magnetic storage. [Learn more](https://aws.amazon.com/free/) about free usage tier eligibility and usage restricti_s._
![](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/10/Screenshot-from-2020-10-04-22-18-16-1024x576.png) 

## **Step 5 :** 

This step is completely option. In this step we add tags to our instance. Like tag **Name** saves the tag_name as instance name. We can do that later also.

How to Create an AWS Ubuntu Instance in 5 minutes?
![](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/10/Screenshot-from-2020-10-04-22-18-42-1024x576.png) 

## **Step 6:** 

This is major part of instance creation. In this step we setup security of instance. In this tutorial , I am keeping settings as it is. You may change according to your needs.
![](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/10/image-1024x263.png) 

These are some possible configurations, You may change them according to your need. You have to setup this correctly to keep your instance secure.
![](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/10/Screenshot-from-2020-10-04-22-18-44-1024x576.png) 

## **Step 7:**

In step 7 AWS shows us complete configuration we selected till now to review. After reviewing just hit **Launch** Button.


![](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/10/Screenshot-from-2020-10-04-22-18-58-1024x576.png) 



This is the last step. now just click on **Create a new key pair** and enter the name for the key. & **Click Launch Instance**

I**mportant Note**: Keep the downloaded key safe. If you lost key, You will NOT be able to access your instance again.
![](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/10/Screenshot-from-2020-10-04-22-19-27-1024x576.png) 

Our Instance is **Pending** Now. In few seconds status will be changed to **running**.

That's it. You successfully created your first **AWS Ubuntu instance**.

You can use your AWS Ubuntu instance to Host your website , web apps etc. 

While using EC2 instance for webhosting. use another SMTP servers. using similar servers **may** blacklist or mark spam your server.

I hope this tutorial helped you creating your first AWS Ubuntu instance.




---
title: How to Install LAMP Stack on AWS EC2 Instance Easy Way
date: 2020-11-16T08:31:23+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /how-to-install-lamp-stack-on-aws-ec2-instance-easy-way/
---
In this tutorial we will see, How to Install LAMP Stack on AWS EC2 Instance?

# Pre-requisites:

## Create AWS Account

If you don't have AWS account previously, You can create your aws [account here](https://blog.kaustubh.codes/how-to-create-aws-account/).

## Creating Instance

We are going to create Ubuntu 20.04 EC2 instance . To [create EC2 instance click here.](https://blog.kaustubh.codes/how-to-create-an-aws-ubuntu-instance-in-5-minutes/)

## Accessing Instance from your PC

If you don't know how to access VPS ( Virtual Private Server). Then please follow [this guide.](https://blog.kaustubh.codes/how-to-access-digital-ocean-droplet-the-best-way/) 

_This is written for digital ocean, but it will work on ec2 too. Except method #1 [from console]_

# Installing LAMP Stack

Now we are going to install [LAMP](https://en.wikipedia.org/wiki/LAMP_(software_bundle)) Stack on EC2 instance, First you will need to login your aws account & copy the instance IP address. 

## Accessing Server from Putty

To connect , first we will need to generate Private Key (.ppk) from PuttyGen. _(PuttyGen Comes with Putty App)_. Open PuttyGen & Click on **Load** after clicking , from file select window , click **All Files** and select valid key file , we downloaded from aws console , while creating EC2 instance.

Now click on **Save private key** . save it as (.ppk) file.
![How to Install LAMP Stack on AWS EC2 Instance?
](https://www.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-2.png) 

Now open **Putty** App, fill below fields as per instructions.

Host Name (IP Address)

```cmd title="cmd"
ubuntu@your_instance_ip_address
```

Port

keep port **22** as it is.

Now from left menu , select Connection -> SSH -> Auth

Check for option **Private Key for file authentication** & select the file we generated in last step & Click on Open Button.
![How to Install LAMP Stack on AWS EC2 Instance?](https://www.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-3.png) 

Once everything added , Go to session windows again & in saved session add this session, So next time, you will not require do this stuff again. Now Click on **Open** button.

SSH will go you warning click on **Allow** / **OK**.
![How to Install LAMP Stack on AWS EC2 Instance?](https://www.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-4.png) 

Now you have access to your SSH.

## Initial Server Setup

First thing we have to do once logged in is, switching user to **root** from **ubuntu**. To do that paste below command in terminal.

### Updates

```cmd title="cmd"
$ sudo -i
```

(You can just copy paste commmands, Just change them according to your requirements. While exectuing commands below if asked click "**y** " and hit enter)

```cmd title="cmd"
$ apt update
$ apt upgrade
```

Above 2 commands will update all the apps in our EC2 Ubuntu instance.

```cmd title="cmd"
$ apt autoremove
```

It will remove all the non-required packages.

### Setting Up Sudo - User

```cmd title="cmd"
$ adduser enter_username_here
```

Now fill complete details of user and once asked for confirmation type **y** and hit enter.
![How to Install LAMP Stack on AWS EC2 Instance?](https://www.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-5.png) 

Now we're going to add sudo / root privileges to this user , So the user can do tasks by using word sudo. To do that

```cmd title="cmd"
$ usermod -aG sudo enter_username_here
```



### Configuring Firewall 

We need to configure firewall to prevent unauthorised access to our instance. By default the firewall is turned off .

```cmd title="cmd"
$ ufw status
```

This command will tell you status for firewall.

```cmd title="cmd"
$ ufw app list
```

It will show apps needs access to firewall. for example **OpenSSH**.

```cmd title="cmd"
$ ufw allow OpenSSH
$ ufw enable
```

**IMPORTANT NOTE : DO NOT ENABLE FIREWALL WITHOUT ALLOWING OpenSSH, ELSE YOU WILL NOT BE ABLE TO ACCESS INSTANCE AGAIN.**

## Installing Apache

[Apache](https://en.wikipedia.org/wiki/Apache) is web server we are going to use for serving our sites. To install Apache paste below commands and enter **y** when asked.

```cmd title="cmd"
$ apt install apache2
$ service apache2 restart
```

We need to update firewall rules again & need to add **"Apache"** to allowed list. To allow execute below commands.

```cmd title="cmd"
$ ufw allow "Apache Full"
```

Once done visit your **EC2 IP address**, You will see success apache configuration success page. as shown below,
![How to Install LAMP Stack on AWS EC2 Instance?](https://www.kaustubh.codes/imgs/wp-content/uploads/2020/10/image-17.png) 

If you are unable to view above page, then that's not issue, We can update some setting and you will be able to see this page. To do that,

visit [console.aws.amazon.com](https://console.aws.amazon.com)

Click on the **services** in top corner -> **EC2**, after click on **Security Groups** & select the security group associated with our instance. After selecting Click on **Edit Inboud rules**,

Now make all the settings as shown in this image.
![How to Install LAMP Stack on AWS EC2 Instance?](https://www.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-6-1024x307.png) 

Once rules updated you can visit your IP address and you can see that confirmation page.

## Installing MySQL

To install Mysql use below commands.

```cmd title="cmd"
$ apt install mysql-server
```

You can also install phpMyAdmin , if you need , but it's not required. To install PhpMyAdmin use below commands,

```cmd title="cmd"
$ apt install phpmyadmin
```

You can access PhpMyAdmin at _your_instance_ip_address/phpmyadmin_. View Video Version of this tutorial for more details.

## Installing PHP

Installing PHP is the last step, Let's complete that too,

```cmd title="cmd"
$ apt install libapache2-mod-php php-mysql
```

enter **y** when asked, That's it. You just completed installation of LAMP Stack on your aws EC2 Ubuntu instance.






## Looking for Alternative of EC2? 


Get the $100 free credits by Digital Ocean for free. You can get $100 by clicking below button.



[Try DigitalOcean & Get $100 Credits for FREE](https://m.do.co/c/253fdc8807b5)


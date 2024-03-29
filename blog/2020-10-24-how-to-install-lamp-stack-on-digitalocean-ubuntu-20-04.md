---
title: How to Install LAMP Stack on DigitalOcean Ubuntu 20.04?
date: 2020-10-24T08:12:30+00:00
authors: kaustubh

slug: /how-to-install-lamp-stack-on-digitalocean-ubuntu-20-04/



---
How to Install LAMP Stack on DigitalOcean Ubuntu 20.04?

Before starting this process please [create your Digital Ocean Account here.](https://m.do.co/c/253fdc8807b5)

Or visit [Digital Ocean Directly here With $100 FREE Credits.](https://m.do.co/c/253fdc8807b5)



Now Visit [Digital Ocean](https://m.do.co/c/253fdc8807b5) & Click on Sign In. You will be redirected to [https://cloud.digitalocean.com/](https://m.do.co/c/253fdc8807b5)

## Creating Droplet

In [Digital Ocean](https://m.do.co/c/253fdc8807b5) we call a server as Droplet.

Now click on **Create** Button Top right corner and Select **Droplet** Option.
![](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/10/image-11.png) 

Now once we click on Create Droplets , next we have to select Droplet Configuration.

For This tutorial We are going to use below configuration. If you are going to follow this tutorial. Kindly use below configuration.

```cmd title="cmd"
Distributions : Ubuntu 20.04
Choose Plan : $5/month
Authentication : Password
Password : Create a secure Password(Keep safe)
Hostname : Set a Name you can use to identify the droplet

```

Now click on that Create **Droplet button**.

Done. Now our droplet is queue. Digital Ocean will create a droplet for us, & we will Get Public IPV4 address for that droplet.

Once a droplet created You'll see its IP address, copy that IP Address.

If you are using any Linux or Mac version in your PC.

Login our Droplet using below command in terminal.

```cmd title="cmd"
$ ssh root@ip_address_of_droplet
```

If you are using Windows you will use Putty.

Or simply use the Console Provided by Digital Ocean.
![How to Install LAMP Stack on DigitalOcean Ubuntu 20.04?](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/10/image-12.png) 

Now click on that **Console** button right corner. It will open a Prompt with terminal. If your internet speed is slow. You will see your commands slow.
![How to Install LAMP Stack on DigitalOcean Ubuntu 20.04?](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/10/image-13.png) 

Now you will see below screen. 

```cmd title="cmd"
yoursitename login : root
```

```cmd title="cmd"
Enter password . which we created while creating droplet.
```



This are some commands you have to run .

```cmd title="cmd"
$ apt update
```

```cmd title="cmd"
$ apt upgrade
```

```cmd title="cmd"
$ apt autoremove
```

Press Y if prompts any where.

## Installing Apache 

To install apache we will run a very simple command 

```cmd title="cmd"
$ apt install apache2
```

Click Y if prompted.

Now our Apache is installed. If you visit your_ip_address you will see the apache2 default page. if you don't see the page, No problem. We need to [configure our firewall.](#firewall-config)

## Installing MySQL

Let's install MySQL. Paste below commands in your terminal.

```cmd title="cmd"
$ apt install mysql
```

Now we have completed installing MySQL.

Next step we will install PhpMyAdmin

## Installing PhpMyAdmin

Like other software we installed. php My admin is also has similar and tricky installation

```cmd title="cmd"
$ apt install phpmyadmin
```

Now you have to complete remaining setup by reading options correctly.
![How to Install LAMP Stack on DigitalOcean Ubuntu 20.04?](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/10/image-15.png) 



in this configuration window, You have to select **apache2**.

to select click on space bar. You will see [ * ] this mean the option is selected.
![How to Install LAMP Stack on DigitalOcean Ubuntu 20.04?](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/10/image-14.png) 

In this you have to select **Yes** option.

That will create a database for you to configure users.

In next step you have to setup password for PhpMyAdmin
![How to Install LAMP Stack on DigitalOcean Ubuntu 20.04?](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/10/image-16.png) 

also, add a confirm password. That's it. PhpMyadmin installation is done. Now the last and important part of the setup is firewall configuration.

## Firewall Configuration {#firewall-config}

To configure firewall we will paste below commands. In Ubuntu we have ufw.

```cmd title="cmd"
$ ufw status
```

If you see output. you have firewall installed. basically os comes with firewall. In case not installed paste below command.

```cmd title="cmd"
$ apt install ufw
```

After that run status command again, now we will add apache in allowed apps & OpenSSH also.

```cmd title="cmd"
$ ufw allow "Apache Full"
```

```cmd title="cmd"
$ ufw allow OpenSSH
```

```cmd title="cmd"
$ ufw enable
```

```cmd title="cmd"
$ sudo service apache2 restart
```

Now , Our Droplet needs to restart.

```cmd title="cmd"
$ reboot
```

Now login to system again. Once you login.use below command to start apache server

```cmd title="cmd"
$ sudo service apache2 restart
```



Now we have completed installation of LAMP stack on Ubuntu 20.04.

We will check installation now.

Open Any browser type droplet's your public ip_address. 

If you see below page your installation is successful.
![How to Install LAMP Stack on DigitalOcean Ubuntu 20.04?](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/10/image-17.png) 

Above is default page of apache server to tell that configuration is successful.

Now check the installation of PhpMyAdmin. Visit

your_ip_address/phpmyadmin

If you see below screen
![How to Install LAMP Stack on DigitalOcean Ubuntu 20.04?](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/10/image-18-1024x475.png) 

Done . we have completed LAMP installation on Digital Ocean Ubuntu 20.04 .

## Special Offer for My Readers

Below is the special Link. Which is Gift from us for you. You just have to click on below link & Create Your FREE Digital Ocean Account & Get FREE $100 Credit. That means you'll get your first cloud completely FREE.





[Get That Offer Now [FREE $100]](https://m.do.co/c/253fdc8807b5)










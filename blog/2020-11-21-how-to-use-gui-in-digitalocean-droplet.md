---
title: 'How To Use GUI in DigitalOcean Droplet? - 2 Easy Steps'
date: 2020-11-21T11:20:46+00:00
authors: kaustubh

slug: /how-to-use-gui-in-digitalocean-droplet/




---
Let's see How To Use GUI in DigitalOcean Droplet? 

If you are looking for running [DigitalOcean](https://m.do.co/c/253fdc8807b5) Ubuntu Droplet using GUI ( Graphical User Interface ) Then you are at right place. to Follow this tutorial you must have Droplet.

If you don't have your droplet then Create your first [DigitalOcean Droplet here](https://blog.kaustubh.codes/how-to-install-lamp-stack-on-digitalocean-ubuntu-20-04/#Creating_Droplet).

## Access your Droplet

To use install [GUI (Graphical User Interface)](https://en.wikipedia.org/wiki/Graphical_user_interface) on your droplet. You must have [root level access](https://en.wikipedia.org/wiki/Superuser) to your Droplet. 

If you don't know how access your DigitalOcean droplet. Please read [this article.](https://blog.kaustubh.codes/how-to-access-digital-ocean-droplet-the-best-way/)

## Installing Required Packages

Ubuntu server does NOT comes with GUI. We need to install GUI.
![How To Use GUI in DigitalOcean Droplet](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/11/image-17.png) 

```cmd title="cmd"
$ sudo apt update
```

```cmd title="cmd"
$ sudo apt upgrade
```

Above 2 commands will update your Ubuntu System ( enter **y** if asked ) & Apps. Follow Next Commands

```cmd title="cmd"
$ sudo apt install tasksel
```

Enter **y** when asked.

```cmd title="cmd"
$ tasksel install ubuntu-desktop
```


![How To Use GUI in DigitalOcean Droplet](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/11/image-16.png)


This will install desktop GUI. After installing we need to reboot droplet. To reboot execute,

```cmd title="cmd"
$ sudo reboot
```

After rebooting it will open, in GUI. 

Now you will need to follow and complete the wizard. That's it done! 
![How To Use GUI in DigitalOcean Droplet](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2020/11/image-18.png) 

If you still have issues watch video version below.

**NOTE: MAKE SURE YOU TAKE NECESSARY CARE OF DROPLET SECURITY, IN THIS PROCESS.**

 


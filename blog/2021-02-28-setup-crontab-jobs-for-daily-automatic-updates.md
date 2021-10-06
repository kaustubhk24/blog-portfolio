---
title: Setup Crontab Jobs for Daily Automatic Updates
date: 2021-02-28T02:08:14+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /setup-crontab-jobs-for-daily-automatic-updates/
---
One of our reader Aksed us, How to add cronjob , So That it will automatically update , System daily and reboot system.

**Question Posted :**



I want to execute some commands daily on my ubuntu 20.04 server , at 11.25pm. & also if we can add logs in any file

What I tried?

I did steps as below. But I dont know why its not working.
![](https://kaustubhk24.netlify.app/imgs/wp-content/uploads/2021/02/image-1024x498.png)

**Answer**



You correctly mentioned crontab. You can configure this as a script to run every day at 11:55pm.       

Let’s first start with creating the script. SSH to your droplet and start executing the following commands

```cmd title="cmd"
touch ~/updateScript

```

The above will create the file for you. Now it’s time to edit it.

```cmd title="cmd"
nano ~/updateScript

```

Inside of it, you can type in the following

```cmd title="cmd"
**#!/bin/bash**
sudo service apache2 restart
sudo apt update
sudo apt upgrade -y
sudo apt autoremove -y
sudo reboot
```

 

Save the file and exit. Now time to make sure your script is executable

```cmd title="cmd"
sudo chmod +x ~/updateScript
```



Now the last bit, add it to your crontab. To do that, type in

```cmd title="cmd"
crontab -e
```



When the file opens at the bottom of it, add the following line

```cmd title="cmd"
55 23 * * * bash ~/updateScript
```



**How it Works?**





```cmd title="cmd"
# ┌───────────── minute (0 - 59)
# │ ┌───────────── hour (0 - 23)
# │ │ ┌───────────── day of the month (1 - 31)
# │ │ │ ┌───────────── month (1 - 12)
# │ │ │ │ ┌───────────── day of the week (0 - 6) (Sunday to Saturday;
# │ │ │ │ │ 7 is also Sunday on some systems)
# │ │ │ │ │
# │ │ │ │ │
# * * * * * tool.

## What does \* \* \* \* * mean in cron?

When you use \* for any field that means, it will be for each. Suppose you use this at the place of minute then task will execute on each minute. if you use for hour then will execute on each hour. So \* \* \* \* \* means every minute of every hour of every day of every month and every day of the week       

## Is there any tool to help?

Yes we made this tool specially for crontab, Its completely free to use.



[Crontab Scheduling Tool](https://tools.Kaustubh.codes/crontab-jobs-schedule-maker/)
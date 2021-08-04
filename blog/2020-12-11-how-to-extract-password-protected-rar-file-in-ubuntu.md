---
title: How To Extract Password Protected rar file in Ubuntu?
date: 2020-12-11T14:08:15+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /how-to-extract-password-protected-rar-file-in-ubuntu/
---
Let us see How To Extract Password Protected rar file in Ubuntu?

To extract file with password or without password you have to install rar Command Line utility.

```cmd title="cmd"
$ sudo apt-get install rar

```

Now enter the below command in terminal.

```cmd title="cmd"
$ sudo rar e file_name.rar

```

for example, if your file name is **file.rar** then run below command in terminal

```cmd title="cmd"
$ sudo rar e file.rar
```

IF your file is password protected it will prompt for password. if file is not protected then it will automatically start extracting rar file. Output when password is required.

```cmd title="cmd"
Enter password (will not be echoed) for file.zip
```

That's it , I carried out this practical on Ubuntu 20.04 on 11/12/2020. If you are facing issues with your OS then just comment with os version. will help you in setup.
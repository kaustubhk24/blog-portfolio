---
title: Video Forward-Reverse Controls in HTML
date: 2020-08-16T12:25:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /video-forward-reverse-controls-in-html/








enclosure:
 https://static-cdn.Kaustubh K..com/assets/videos/sample-video.mp4
 6609513
 video/mp4
 

---

```
  
  
	  
                                                                        var vd = document.getElementById("myVd");  
             
            function vdFwd()  
            {  
                vd.currentTime=vd.currentTime+10;  
                vd.play();  
            }  
            function vdRev()  
            {  
                vd.currentTime=vd.currentTime-10;  
                vd.play();  
            }
```


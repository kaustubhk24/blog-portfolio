---
title: User Audio Playlist using HTML
date: 2020-08-16T12:24:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /user-audio-playlist-using-html/
---
Article has been moved to


```html title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>Songs Lists</title>
    </head>
    <body>
      <center>
       <div>
      <audio id="myAd" controls>
         <source id="firstAd" src="file.mp3" type="audio/mpeg">
      </audio><br></div>
           </center>
            <H3>Music Play-list!</H3>
              <ol>
                    <li onClick="chgAudio('1.mp3)">1.mp3</li>
                    <li onClick="chgAudio('2.mp3')">2.mp3</li>
                    <li onclick="chgAudio('3.mp3')">3.mp3</li>
                    <li onclick="chgAudio('4.mp3')">4.mp3</li>
                    <li onclick="chgAudio('5.mp3')">5.mp3</li>
             </ol>
             	<script type="text/javascript">
                  var ad = document.getElementById("myAd");
                   function chgAudio(path)
                  {
                      document.getElementById("firstAd").src=path;
                      document.getElementById("myAd").load();
                      document.getElementById("myAd").currentTime=0;
                      document.getElementById("myAd").play();
                  }
               </script>
        </body>
</html> 
```
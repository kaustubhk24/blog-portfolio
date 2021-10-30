---
title: Video Forward-Reverse Controls in HTML
date: 2020-08-16T12:25:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /video-forward-reverse-controls-in-html/

---
Article has been moved to

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
	<title>Video-Forward,Reverse</title>

</head>
<body>
    <center>
        <video width="400" height="400" id="myVd" controls>
                  <source id="firstVd" src="1.mp4" type="video/mp4"></video>
       <button id="btFwd" type="button" onClick="vdFwd()">Forward</button>
       <button id="btBhd" type="button" onClick="vdRev()">Reverse</button><br>
        </center>
        <script type="text/javascript">
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
            }</script>
</body>
</html>
```
---
title: Video Forward-Reverse Controls in HTML
date: 2020-08-16T12:25:00+00:00
authors: kaustubh

slug: /video-forward-reverse-controls-in-html/

---

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
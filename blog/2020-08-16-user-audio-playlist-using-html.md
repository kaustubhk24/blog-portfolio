---
title: User Audio Playlist using HTML
date: 2020-08-16T12:24:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200

slug: /user-audio-playlist-using-html/








enclosure:
 https://static-cdn.Kaustubh K..com/assets/audios/sample-audios/Breatha%20-%20josh%20pan.mp3
 7350894
 audio/mpeg
 
 https://static-cdn.Kaustubh K..com/assets/audios/sample-audios/Spring%20In%20My%20Step%20-%20Silent%20Partner.mp3
 4751360
 audio/mpeg
 
 https://static-cdn.Kaustubh K..com/assets/audios/sample-audios/Calvin%20Harris%20-%20josh%20pan.mp3
 6251661
 audio/mpeg
 
 https://static-cdn.Kaustubh K..com/assets/audios/sample-audios/Muriel%20-%20Bobby%20Richards.mp3
 4193212
 audio/mpeg
 
 https://static-cdn.Kaustubh K..com/assets/audios/sample-audios/Phrase%20Prant%20-%20josh%20pan.mp3
 7897375
 audio/mpeg
 
 https://static-cdn.Kaustubh K..com/assets/audios/sample-audios/Voices%20-%20Patrick%20Patrikios.mp3
 6084478
 audio/mpeg
 

---
```vb title="file.vb"



Songs Lists






  


### Music Play-list!


1. 1.mp3
2. 2.mp3
3. 3.mp3
4. 4.mp3
5. 5.mp3



 var ad = document.getElementById("myAd");
 function chgAudio(path)
 {
 document.getElementById("firstAd").src=path;
 document.getElementById("myAd").load();
 document.getElementById("myAd").currentTime=0;
 document.getElementById("myAd").play();
 }
 

 
```


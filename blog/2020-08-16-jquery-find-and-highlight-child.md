---
title: Jquery Find and Highlight Child
slug: /jquery-find-and-highlight-child/
date: 2020-08-16T12:31:00+00:00
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://www.gravatar.com/avatar/b76fcfc82fc2e8fdc8075636f1735f61?s=200
---
```html title="index.html"
<!DOCTYPE html>
<html>
<head>
	<title>find children and highlight</title>
	<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
	<style>
    .highlight{
        background: yellow;
    }        
</style>
</head>
<body>
<div>
	<h1>We will trace children of ul element here</h1>
	<ul>
		<li>I am the eldest</li>
		<li>I am the youngest</li>

	</ul>
</div>
<script>
$(document).ready(function(){
    $("ul").children().addClass("highlight");
});
</script>

</body>
</html>
```
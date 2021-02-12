$(document).ready(function(){
   $(document).mousemove(function(event){
      $("#light").css({"top": event.pageY - 250, "left": event.pageX - 300}); 
   }); 
   
   
});

var root=true;

$(document).keypress(function(e){
   var key = e.which;
   if (key == 76 || key==108) {
if(root)
{
   $("#light").hide();
   $("body").css("background-color", "white");
   root=false
}
else
{
   $("#light").show();
   $("body").css("background-color", "black");
   root=true;
}
  
   }
});

/*

$(document).ready(function(){
   $("body").css("background-color", "white");
   $("#light").hide();
}
);*/
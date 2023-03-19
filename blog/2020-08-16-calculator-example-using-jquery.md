---
title: Calculator Example using JQuery
slug: /calculator-example-using-jquery/
date: 2020-08-16T12:27:00+00:00
authors: kaustubh

---

```html title="index.html"
<html>    
    <head>    
    <title>    
        Calculator    
    </title>    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>    
    <script>    
     
        $(document).ready(function(){    
            $("#btnAdd").on('click',function(){    
                Add();    
            });    
            $("#btnSubstract").on('click',function(){    
                Substract();    
            })    
            $("#btnMultiply").on('click',function(){    
                Multiply();    
            })    
            $("#btnDivide").on('click',function(){    
                Divide();    
            })    
        });    
        function Add(){    
         var no1=parseInt($("#txtNo1").val());    
         var no2=parseInt($("#txtNo2").val());    
         var result =no1+no2;    
                   $('#result').val(+result);
  
        }    
        function Substract(){    
         var no1=parseInt($("#txtNo1").val());    
         var no2=parseInt($("#txtNo2").val());    
         var result =no1-no2;    
                     $('#result').val(+result);
 
        }    
        function Multiply(){    
         var no1=parseInt($("#txtNo1").val());    
         var no2=parseInt($("#txtNo2").val());    
         var result =no1*no2;    
                    $('#result').val(+result);
  
        }    
        function Divide(){    
         var no1=parseInt($("#txtNo1").val());    
         var no2=parseInt($("#txtNo2").val());    
         var result =no1/no2;    
          
           $('#result').val(+result);
  
        }    
    </script>    
    </head>    
    <body>  
    <div align="center"> 
       First Number <input type="text" id="txtNo1" placeholder="Enter first number"><br>    
        Second Number<input type="text" id="txtNo2" placeholder="Enter second number"><br>   
         Result<input type="text" id="result" ><br>   
        <input type="button" id="btnAdd" value="+">    
        <input type="button" id="btnSubstract" value="-">    
        <input type="button" id="btnMultiply" value="*">    
        <input type="button" id="btnDivide" value="/">    
        </div> 
    </body>    
    </html>  
  ```
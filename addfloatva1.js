<!DOCTYPE html>
<html>
   <head>
      <title>FLAOT ADDITION IN JAVASCRIPT</title>
   </head>
   <body>
      <h1>Adding float values in JavaScript</h1>
      <p id="num1">4.12</p>
      <p id="num1">9.87</p>
      <button onclick="add()">Click To add values </button>
      <h3 id="result">
      <h3>
      <script>
         var num1 = document.getElementById("num1").innerHTML;
            var num2 = document.getElementById("num2").innerHTML; 
          function add() { 
            		result.innerHTML = Math.round((parseFloat('4.12') +  
                               parseFloat('9.87'))*100)/100
            } 
      </script>
   </body>
</html>
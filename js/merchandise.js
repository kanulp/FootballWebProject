
      function openColorBox(){
        $.colorbox({iframe:true, width:"80%", height:"80%", href:""});
      }
      
      setTimeout(openColorBox, 3000);

        //Get the button
        var mybutton = document.getElementById("myBtn");
        window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }
        
        function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }

//IIFE
(function(){

    // Start code here

     // declare variable
     var pricePounds;
     var exchangeRate;
     var priceEuros;

     // Form input
     var convertForm = document.getElementById("myForm");
     // out put
     var msg = document.getElementById("msg");
      
     // capture the form input
       convertForm.addEventListener("submit", function(ev) {
           ev.preventDefault();
           
           pricePounds = parseFloat(document.getElementById("pounds").nodeValue);

           if(isNaN(pricePounds)) {
               msg.innerHTML = "You must enter a number";
               msg.setAttribute("class", "error");
           }else{
               if(pricePounds=== 0){
                msg.innerHTML = "You must enter a number not a zero";
                msg.setAttribute("class", "error");
               }else{
            priceEuros = pricePounds * exchangeRate;
            priceEuros = pricePounds.toFixed(2);
            msg.removeAttribute("class");
            msg.innerHTML = "You will get $eruo:" + priceEuros;
           }
        }
            // end the form capture
            // reset on focus
            document.getElementById("pounds").addEventListener("focus", function(ev) {
                //document.getElementById("pounds").nodeValue = "";
                //this.nodeValue = "";

                msg.removeAttribute("class");
                msg.innerHTML = "";
                ev.target.nodeValue = "";

            }); 
       });
    // End code here
}) ();
var inputs = document.getElementsByTagName("input");
 for (var i=0; i<inputs.length; i++)
   if (inputs[i].type.toLowerCase() === "password")
     inputs[i].type = "text";


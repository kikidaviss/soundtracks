
var emaildigitado = "kiki@gmail.com";
var passworddigitada = "123";

var my_name="kiki";
var my_lastname="davis";

var enter_button_var = document.getElementById("enter_button"); 

//enter_button_var.onclick = function () {
    //alert(my_name+",You Clicked! " + sum_er(27482, 274739 ));
    //return false;
//};

//function sum_er(num_1,num_2){
  //  var result = num_1 + num_2;
    //return result;
//}



//function concatenator( text1 , text2)
//{ return text1+" "+text2 
    
//}

//enter_button_var.onclick = function () {
  //  alert("You Clicked!" + sum_er(my_name, my_lastname ));
    //return true; 
    
    //};


enter_button_var.onclick = function () {

var my_emailfield = document.getElementById("email");
var my_email = email.value; 



//var my_passwordfield = document.getElementById("password");
//var my_password = password.value; 

var my_password = document.getElementById("password").value; 


 //alert(" The Email: " + my_email + " The pass: " + my_password);    
 
    
  if(my_email == emaildigitado && my_password == passworddigitada) {
      console.log("is true");
      alert ("welcome");
      return true;
      }
    else {
        console.log("is false");
        alert ("wrong email");
                    return false;
    }
    
    
    
    
    
    
};





































//$(document).ready(function(){
  //  alert("ready!");
//});


function changeScreen(){
    changeImg();
    paintList();
    
    
    
    function changeImg(){
    document.getElementById("myImg").src = "images/musicafilme.jpg" ;
    } 
    
    function paintList(first,second,third){
    
    document.getElementById("myParagraph").innerHTML =
    //var x = {"firstValue":"Hola1", "secondValue":"Hola2", "thirdValue":"Hola3"};
    
    
     "<ol><li>"
    +first  +  "</li><li>"
    +second +  "</li><li>"
    +third  +  "</li></ol>"; 
    
}
    
    
    //var firstValue = document.getElementById("firstField").value;
    //var secondValue = document.getElementById("secondField").value;
    //var thirdValue = document.getElementById("thirdField").value;
    
    
    
    //var encriptedPass = 
    
    //alert(firstValue);
    
    //paintList (x.firstValue, x.secondValue, x.thirdValue);
  
    //localStorage.setItem("myPassword","secondValue"); 

//}

}
    




function checkPassword(){
    
    var thirdValue = document.getElementById("thirdField").value;
    
    var savedPassword = localStorage.getItem("myPassword");
    
    if(thirdValue = savedPassword){
        
        alert("You're logged in");
        }
    else{
        alert("NO!");
    }
    
    
    
    
    
    
    
}
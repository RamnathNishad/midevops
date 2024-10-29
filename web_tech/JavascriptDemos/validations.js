function validateForm(){
    return validateName() && validateAge();
}
function validateName(){
 var nameValue=document.getElementById("uname").value;
 var namePattern=/^[aA-zZ]{5,10}$/;
 
 if(namePattern.test(nameValue)){
    document.getElementById("nameErr").style.visibility="hidden";
    return true;    
 }else{
    document.getElementById("nameErr").innerHTML="username must be only alphabets between 5 and 10 char";
    document.getElementById("nameErr").style.visibility="visible";
    return false;
 }
}

function validateAge(){
    var ageValue=document.getElementById("age").value;
    var agePattern=/^[0-9]{1,3}$/;
    
    if(agePattern.test(ageValue)){
       document.getElementById("ageErr").style.visibility="hidden";
       return true;    
    }else{
       document.getElementById("ageErr").innerHTML="age must be 3-digits";
       document.getElementById("ageErr").style.visibility="visible";
       return false;
    }
}
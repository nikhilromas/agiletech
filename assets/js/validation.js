var nameError=document.getElementById('name-error');
var lnameError=document.getElementById('lname-error');
var emailError=document.getElementById('email-error');
var subjectError=document.getElementById('subject-error');
var messageError=document.getElementById('message-error');
var submitError=document.getElementById('submit-error');

function validatename(){
    var name=document.getElementById('name').value;
    if(name.length == 0){
    nameError.innerHTML='First name is required';
    return false;
   }
   if(name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
   return true;
   }
    else if(name.match(/^[a-zA-Z]+$/)){
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
   return true;
   }

   nameError.innerHTML='write valid name';
return false;
}


function validatelname(){
    var lname=document.getElementById('lname').value;
    if(lname.length == 0){
    lnameError.innerHTML='Last name is required';
    return false;
   }
   if(lname.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){
    lnameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
   return true;
   }
    else if(lname.match(/^[a-zA-Z]+$/)){
    lnameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
   return true;
   }

   lnameError.innerHTML='write valid name';
return false;
} 

function validateemail(){

    var email=document.getElementById('email').value;
    var emailRegEx=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    

    if(email.length == 0){
        emailError.innerHTML='Email is required';
        return false;
       }

    if(email.match(emailRegEx)){
        emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
   return true;
  
    }

   emailError.innerHTML='write a valid email id';
   return false;
}

function validatesubject(){
    var number=document.getElementById('number').value;
    var numberRegx=/^[0]?[789]\d{6,14}$/;
     if(number.length == 0){
        subjectError.innerHTML='Number is required';
        return false;
       }
       else if(number.match(numberRegx)){
        subjectError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;  

       }else{
        subjectError.innerHTML='enter a valid number';
        return false;
       }  

}

function validatemessage(){

    var message=document.getElementById('message12').value;
    console.log(message);
    var required=20;
    var left1=required-message.length;

    if(message.length == 0){
        messageError.innerHTML='message is required';
        return false;
       }
       if(left1>0){
        messageError.innerHTML=left1 +'more characters required';
 return false;
       }
         messageError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
         return true;   

}

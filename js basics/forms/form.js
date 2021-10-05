function detailsValidation(){
    var username= document.getElementById('username').value;
    var email= document.getElementById('email').value;
    var contact= document.getElementById('contactNumber').value;
    var password= document.getElementById('password').value;
    console.log(username,email,contact,password);


if(username=="" || username==null){
    var userErrorMessage = document.getElementById('userErrorMessage');
    userErrorMessage.innerHTML ="user name is required";
    userErrorMessage.className = "text-danger";
    return false
}

if(email=="" || email==null){
    var emailErrorMessage = document.getElementById('emailErrorMessage');
    emailErrorMessage.innerHTML ="email is required";
    
  return false;
}


if(contact=="" || contact==null){
    var ContactErrorMessage = document.getElementById('ContactErrorMessage');
    ContactErrorMessage.innerHTML ="contactNumber is required";
    ContactErrorMessage.className = "text-danger";
    return false
}

if(password=="" || password==null){
    var passwordErrorMessage = document.getElementById('passwordErrorMessage');
    passwordErrorMessage.innerHTML ="password  is required";
    passwordErrorMessage.className = "text-danger";
    return false
}
return false;
}
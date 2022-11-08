let pass = document.getElementById("pass");
let confirm = document.getElementById("confirm");
let messages = document.getElementsByClassName("message");
submitButton = document.querySelector(".submit");
confirm.disabled= true;
submitButton.style.display = "none";
messages = [...messages];

messages.forEach(e=>{
    e.style.display = "none";
})

//check if the passwod is less than 6 
pass.onkeyup = () =>{
    numberOfPass = pass.value ; 
    
    if(numberOfPass.length <6){
        messages[0].style.display = "inline-block";
    }
    else{
        messages[0].style.display = "none";
        confirm.disabled= false;
    }

}


confirm.onkeyup = ()=> {
    password = pass.value;
    confirmPass = confirm.value ;

     if(password != confirmPass){
        messages[1].style.display = "inline-block";
     }
     else{
        messages[1].style.display = "none";
        submitButton.style.display = "block";
     }
}
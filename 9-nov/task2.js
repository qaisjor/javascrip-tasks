document.forms[0].onsubmit =  function (e) {
    e.preventDefault();
    saveInfo ();
}


// if(localStorage.getItem("user") !== null)
// createCard();

// save info in local storage 
function saveInfo (){
let subject = document.getElementById("subject");
let usertypes = document.getElementsByName("user");
let languages = document.getElementsByName("language");
let desc = document.getElementById("desc");


let usertype = []; 
for(let i =0 ; i <usertypes.length ; i++){
    if(usertypes[i].checked){
        usertype.push(usertypes[i].value);
    }
}



let langs = []; 
for(let i =0 ; i <languages.length ; i++){
    if(languages[i].checked){
        langs.push(languages[i].value);
    }
}



let project = {
   subject:`${subject.value} `,
   langs:`${langs}`,
   desc:`${desc.value}`,
   users:`${usertype}` 
}

  sessionStorage.setItem("project",JSON.stringify(project));

  createCard();
} 





function createCard() {
    let card = document.querySelector(".card");
    let project = JSON.parse(localStorage.getItem("project")) ;
    
    card.innerHTML = 
    `   
        <h2>name : ${project.subject}</h2>
        <h2>user type : ${project.users}</h2>        
        <h4>Technolgeys</h4>
        <h4>${project.langs}</h4>
        <h4>Description</h4>
        <p>${project.desc}</p>   
    `     
}
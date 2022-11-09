document.forms[0].onsubmit =  function (e) {
    e.preventDefault();
    saveInfo ();
}


if(localStorage.getItem("user") !== null)
createCard();

// save info in local storage 
function saveInfo (){
let name = document.getElementById("name");
let age = document.getElementById("age");
let major = document.getElementById("major");
let univar = document.getElementById("univar");
let gender = document.getElementsByName("gender");
let languages = document.getElementsByName("language");
let desc = document.getElementById("desc");



for(let i =0 ; i <gender.length ; i++){
    if(gender[i].checked){
        gender =  gender[i].value
    }
}

let langs = []; 
for(let i =0 ; i <languages.length ; i++){
    if(languages[i].checked){
        langs.push(languages[i].value);
    }
}

 console.log(langs);

let user = {
   name:`${name.value}`,
   age:`${age.value}`,
   major:`${major.value}`,
   univarsity:`${univar.value}`,
   gender:`${gender}`,
   langs:`${langs}`,
   desc:`${desc.value}`, 
}


  localStorage.setItem("user",JSON.stringify(user));

  createCard();
} 





function createCard() {
    let card = document.querySelector(".card");
    let user = JSON.parse(localStorage.getItem("user")) ;
    
    card.innerHTML = 
    `   
        <h2>name : ${user.name}</h2>
        <h3>age:${user.age}</h3>
        <h3>univarsity : ${user.univarsity}</h3>
        <h4>major : ${user.major}</h4>
        <h4>gender : ${user.gender}</h4>
        <h4>languages</h4>
        <h4>${user.langs}</h4>
        <h4>Description</h4>
        <p>${user.desc}</p>   
    `     
}


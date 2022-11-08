
let changeFlag  = document.querySelector(".flag"); 
let img = document.querySelector(".img");

changeFlag.onchange  = function () {
    
    countryName = changeFlag.value ; 
    console.log(changeFlag)
    if(countryName.toLowerCase() =="norway"){
       img.src =  "img/1.jpg"
    }
    else if  (countryName.toLowerCase() =="jordan"){
        img.src =  "img/two.jpg"
    }
    else if  (countryName.toLowerCase() =="syria"){
        img.src =  "img/three.jpg"
    }
    else if  (countryName.toLowerCase() =="ksa"){
        img.src =  "img/four.jpg"
    }
} 
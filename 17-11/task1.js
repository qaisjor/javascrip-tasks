var data ; 

async function getData(){
    let response = await fetch("https://www.breakingbadapi.com/api/characters"); 

     data = await response.json();
     await createOptions(data);
     console.log(data)
}

function createOptions(data){
    
    let select = document.getElementById("option");
    let list  ; 
    for(let i= 0 ; i <data.length ; i++){
        list += `<option  value = ${data[i].char_id}> ${data[i].name} </option> `;
        
    }

    select.innerHTML =list ;
}
getData();


function  changeImage(selected) {
    // console.log(selected.value);
    // console.log(data)
    
    let img =  document.getElementById("image")
    // console.log(img);
    
    console.log(selected.value);
    console.log(data[0].name)
    for(let i = 0 ; i<data.length ; i++){
        if(data[i].char_id == selected.value){
            img.src = data[i].img;
        }
    }
}
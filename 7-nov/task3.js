let names = ["qais" , "mohammad" , "khalid" , "samer" , "shaddy" , "jon"];

function shorterInArray (names){
    let shortest = names[0] ; 
    for(name of names)
        if(name.length < shortest.length )
             shortest = name ; 

    return shortest ;
}

document.write(shorterInArray(names));
//document.write(names[0].length);


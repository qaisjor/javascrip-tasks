let changeFont = document.getElementById("font");
let changeSize = document.getElementById("size");
let changeItalic = document.getElementById("italic");
let changeBold = document.getElementById("bold");
let putUnderLine = document.getElementById("underline");

para = document.querySelector(".para");

console.log(changeItalic);
changeFont.onchange = function  () {
    let fontFamily =  this.value ;
    console.log(para) 
    para.style.fontFamily= fontFamily ;
}


changeSize.onchange = function () {
    let fontSize = this.value + "px";
    console.log(fontSize)
    para.style.fontSize = fontSize ;
}


putUnderLine.onchange = function() {
   if(this.checked){
     para.style.textDecoration =  "underline" ; 
   }else{
    para.style.textDecoration =  "none" ; 
   }
}


changeBold.onchange = function() {
    if(this.checked){
        para.style.fontWeight = "bold";
        
      }else{
        para.style.fontWeight = "none";
      }
}

changeItalic.onchange =  function () {
    if(this.checked){
        para.style.fontStyle = "italic" 
      }else{
        para.style.fontStyle = "none" 
      }
}
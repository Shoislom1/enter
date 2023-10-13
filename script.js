let warn = document.querySelector("#warn");
let color = document.querySelector("#color");
let fontSize = document.querySelector("#font-size");
let background = document.querySelector("#background");
let fontWeight = document.querySelector("#font-weight");
let textTransfrom = document.querySelector("#text-transfrom");
let textAlign = document.querySelector("#text-align"); 
let text = document.querySelector("#text"); 
let textInp = document.querySelector("#textInp"); 

 function previewFunc(){
 text.innerHTML = textInp.value 
 // color
text.style.color = color.value; 
// fontsize 
text.style.fontSize = fontSize.value; 
// background 
text.style.background = background.value;
 // fontWeight 
text.style.fontWeight = fontWeight.value; 
// textTransfrom 
text.style.textTransfrom = fontWeight.value; 
// textAlign 
text.style.textAlign = textAlign.value; 
if(fontSize.value <= 40){
     warn.innerHTML = " "
}
else{
warn.innerHTML = "Eng katta fontsize 40"
}
}
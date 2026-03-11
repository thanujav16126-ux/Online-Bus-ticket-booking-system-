function nextPage(){

let boarding=document.getElementById("boardingPoint").value;
let destination=document.querySelector('input[name="location"]:checked');

if(boarding==""){
document.getElementById("popup").style.display="flex";
document.querySelector("#popup p").innerText="Please select boarding point";
return;
}

if(!destination){
document.getElementById("popup").style.display="flex";
document.querySelector("#popup p").innerText="Please select destination";
return;
}

window.location.href="seats.html";

}

function closePopup(){
document.getElementById("popup").style.display="none";
}

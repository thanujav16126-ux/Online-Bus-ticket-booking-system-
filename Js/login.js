function showPopup(message){
document.getElementById("popup-message").innerText = message;
document.getElementById("popup").style.display = "flex";
}

function closePopup(){
document.getElementById("popup").style.display = "none";
}

function validateLogin(){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;

if(name=="" || phone==""){
showPopup("Enter the details");
return;
}

let phonePattern = /^[0-9]{10}$/;

if(!phonePattern.test(phone)){
showPopup("Enter valid phone number");
return;
}

showPopup("Login successful");

setTimeout(function(){
window.location.href = "destination.html";
},1500);

}

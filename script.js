var fullName = prompt ("Enter your full name here: ");
document.getElementById("fname").innerHTML=fullName;
var usrName = prompt ("Please enter your username: ");
document.getElementById("username").innerHTML=usrName;
var gender = "What is your gender?\nPress OK if MALE\nPress cancel, if FEMALE. ";

if (confirm(gender)== true){
    alert("Your profile gender is set to MALE.")
    document.getElementById("gender").innerHTML="M";
} else{
    alert("Your profile gender is set to FEMALE.")
    document.getElementById("gender").innerHTML="F";
}

var briefDesc = prompt ("Enter a brief description about yourself: ");
document.getElementById("desc").innerHTML=briefDesc;

var Yearbirth = prompt ("Enter your birthyear: ");
document.getElementById("year").innerHTML=Yearbirth;
const d = new Date();
let yearNow = d.getFullYear();
let urage = yearNow - Yearbirth;
document.getElementById("age").innerHTML=urage;

var pfp = "Do you want to use a custom profile picture?";
 
if (confirm(pfp)== true){    
    let custompic = prompt("Please enter the file name of the picture. (Ex: wow.jpg)");
    alert ("Profile picture has been updated.")
    document.getElementById("ppic").src=custompic;
} else{
    alert ("No profile image has been set.")
    document.getElementById("ppic").src=prof.png;
}


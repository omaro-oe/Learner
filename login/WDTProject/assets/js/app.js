let registerBtn=document.getElementById("register");
let registForm=document.getElementById("regist-form");
let loginBtn=document.getElementById("login");
let loginForm=document.getElementById("login-form");

registerBtn.addEventListener("click",translate);
loginBtn.addEventListener("click",reverseTranslate)

function translate(){
    registForm.style.transform="translateY(-75%)";
    document.getElementById("height").style.height="35%";
    document.getElementById("login-form").style.transform="translateY(-100%)";
    registerBtn.classList.add("active-two")
    loginBtn.classList.remove("active")
};

function reverseTranslate(){
    registForm.style.transform="translateY(75%)";
    document.getElementById("height").style.height="28%";
    document.getElementById("login-form").style.transform="translateY(00%)";
    registerBtn.classList.remove("active-two")
    loginBtn.classList.add("active")
}
var x = window.matchMedia("(min-width:340px) and (max-width:600px)")

function myFunction(x) {
    if (x.matches) { // If media query matches
        loginBtn.addEventListener("click",mediaReverseTranslate);
        registerBtn.addEventListener("click",mediaTranslate);
    }
}

function mediaTranslate(){
    registForm.style.transform="translateY(-70%)";
    document.getElementById("login-form").style.transform="translateY(-100%)";
    document.getElementById("height").style.height="310px";
    registerBtn.classList.add("active-two")
    loginBtn.classList.remove("active")
};

function mediaReverseTranslate(){
    document.getElementById("height").style.height="200px";
    registForm.style.transform="translateY(75%)";
    document.getElementById("login-form").style.transform="translateY(00%)";
    registerBtn.classList.remove("active-two")
    loginBtn.classList.add("active")
}
myFunction(x) // Call listener function at run time

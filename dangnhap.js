const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// quy

// singup
// checkName
let messagerName = document.getElementById("checkName");
let nameInput = document.getElementById("name");

function checkName() {
  if(nameInput.value.trim() === ''){
    messagerName.textContent = "vui lòng nhập vào trường này!!!";
  }else{
    messagerName.textContent = '';
  }
}


//check email
let emailInput = document.getElementById("email");
let messagerEmail = document.getElementById("checkEmail");
const REGEX_MAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

function checkEmail(){
  let emailValue = emailInput.value;
  let checkEmail = validateMail(emailValue);

  if(emailInput.value.trim()=== ""){
    messagerEmail.textContent = "Vui lòng nhập vào trường này!!!"
  }else if(!checkEmail){
    messagerEmail.textContent = "vui lòng nhập đúng định dạng email"
  }else{
    messagerEmail.textContent = "";
  }

}
function validateMail(mail){
  return REGEX_MAIL.test(mail);
}


//check Pasword
let passwordInput = document.getElementById("password");
let messagerPass = document.getElementById("checkPass");

function checkPass(){
  if(passwordInput.value.trim() === ""){
    messagerPass.textContent = "Vui lòng nhập vào trường này!!!"
  }else{
    messagerPass.textContent = "";
  }
};
//check repass
let repassInput = document.getElementById("repassword");
let messagerRepass = document.getElementById("checkRepass");
function checkRepass(){
  if(repassInput.value.trim() === ""){
    messagerRepass.textContent = "Vui lòng nhập vào trường này!!!";
  }else{
    messagerRepass.textContent = "";
  }
}




//singIn
// emailLogin
let emailInputLogin = document.getElementById("emailLogin");
let messagerLogin = document.getElementById("checkEmailLogin");
function checkEmailLogin(){
  let emailValue = emailInput.value;
  let checkEmail = validateMail(emailValue);
 

  if(emailInputLogin.value.trim()=== ""){
    messagerLogin.textContent = "Vui lòng nhập vào trường này!!!"
  }else if(!checkEmail){
    messagerLogin.textContent = "vui lòng nhập đúng định dạng email"
  }else{
    messagerLogin.textContent = "";
  }
}




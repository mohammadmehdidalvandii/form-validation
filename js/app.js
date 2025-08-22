const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');


username.addEventListener('input',() =>{
    if(username.value.trim().length < 3){
        showError(username , 'Username must be at least 3 characters long.')
        valid = false
    }else{
        showSuccess(username,'value is true ✅')
    };
})
email.addEventListener('input',() =>{
    if(!validateEmail(email.value)){
        showError(email , 'Email is not valid ❌')
        valid = false
    }else{
        showSuccess(email , "Email is valid ✅")
    }
})
password.addEventListener('input',() =>{
    if(password.value.length < 6){
        showError(password , "Password must be at least 6 characters long. ")
        valid = false
    }else{
        showSuccess(password , "Password is valid ✅")
    }
})
confirmPassword.addEventListener('input',() =>{
    if(password.value !== confirmPassword.value) {
    showError(confirmPassword, "Password does not match its repetition ❌");
    valid = false;
  } else {
    showSuccess(confirmPassword, "Confirm password is valid ✅");
  }
})


form.addEventListener('submit',function(e){
    e.preventDefault();
    if(
        username.value.trim().length >=3 &&
        validateEmail(email.value) &&
        password.value.length >= 6 &&
        password.value === confirmPassword.value
    ){
        alert("Register is successfully ✅");
        form.reset();
        clearAllMessages();
    }else{
    alert("Please fix the errors ❌");
  }
})


function showError(input ,message){
    const error = input.nextElementSibling;
    error.textContent = message
    error.classList.add('error')
    error.style.display = 'block'
}

function showSuccess(input ,message){
    const error = input.nextElementSibling;
    error.textContent = message
    error.classList.add('success')
    error.style.display = 'block'
}

function clearAllMessages() {
  document.querySelectorAll("small.error , small.success").forEach(el => {
    el.textContent = "";
    el.style.display = "none";
  });
}


 function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
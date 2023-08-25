let inputElement = document.getElementById("userId");
let messageEl = document.getElementById("logInText");

function logIn(){
    let inputElValue = inputElement.value ;
    let message = "Hi " + inputElValue + ", verifying your account......";
    messageEl.textContent = message;
}

console.log(inputElement);

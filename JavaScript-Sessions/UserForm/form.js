let myFormEl = document.getElementById('myForm');

myFormEl.addEventListener('submit', function(event){
    event.preventDefault();
});


let nameInputEl = document.getElementById('nameInput');
let nameErrorMessageEl = document.getElementById('nameErrorMessage');

let emailInputEl = document.getElementById('emailInput');
let emailErrorMessageEl = document.getElementById('emailErrorMessage');

nameInputEl.addEventListener('blur', function(event){
    if(event.target.value === ""){
        nameErrorMessageEl.textContent = "Required*"
    }
    else{
        nameErrorMessageEl.textContent = "";
    }
});

emailInputEl.addEventListener('blur', function(event){
    if (event.target.value === ""){
        emailErrorMessageEl.textContent = "Required*";
    }
    else{
        emailErrorMessageEl.textContent = "";
    }
});







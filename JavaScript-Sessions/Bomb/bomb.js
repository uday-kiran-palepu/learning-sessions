let defuserEl = document.getElementById('defuser');
let timerEl = document.getElementById('timer');

let countdown = 10;

let intervalId = setInterval(function(){
    countdown = countdown - 1;
    timerEl.textContent = countdown;
    if (countdown === 0){
        timerEl.textContent = "Boom";
        clearInterval(intervalId);
    }

}, 1000)


defuserEl.addEventListener('keydown', function(event){
    let userEnteredText = defuserEl.value ;
    if (userEnteredText === "defuse" && countdown !== 0 && event.key === "Enter"){
        timerEl.textContent = "You did it....";
        clearInterval(intervalId);
    }

});
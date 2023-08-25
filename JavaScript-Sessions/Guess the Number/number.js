let userInputEl = document.getElementById("userInput");
let gameResultEl = document.getElementById('gameResult');
let gameResultEl1 = document.getElementById('gameResult1');

let randomNumber = Math.ceil(Math.random()*100)

function below50(){
    gameResultEl1.textContent = "HINT : The number is below 50";   
}

let above50 = function(){
    gameResultEl1.textContent = "HINT : The number is above 50";   
}


function checkResult(){
    let userValue = parseInt(userInputEl.value) ;
    if (randomNumber === userValue){
        gameResultEl.textContent = "Congratulations! You got it right.";
        gameResultEl.style.backgroundColor = "green";
    }
    else if (randomNumber >= userValue){
        gameResultEl.textContent = "Too Low! Try Again.";
        gameResultEl.style.backgroundColor = "blue";
    }
    else if (randomNumber <= userValue){
        gameResultEl.textContent = "Too High! Try Again.";
        gameResultEl.style.backgroundColor = "blue";
    }
    else{
        gameResultEl.textContent = "Please Provide a Valid Input";
        gameResultEl.style.backgroundColor = "blue";
    }

    if (randomNumber < 50){
        below50()
    }else{
        above50()
    }

}






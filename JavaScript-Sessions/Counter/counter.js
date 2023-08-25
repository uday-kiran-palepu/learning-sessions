let counterValueEl = document.getElementById('counterValue');

function onDecrease(){
    let previousCounterValue = counterValueEl.textContent;
    let currentCounterValue = parseInt(previousCounterValue) - 5 ;

    if (currentCounterValue == 0){
        counterValueEl.style.color = "black";
    }
    else if (currentCounterValue < 0){
        counterValueEl.style.color = "red";
    }
    else{
        counterValueEl.style.color = "green";
    }

    counterValueEl.textContent = currentCounterValue;  

}

function onReset() {
    counterValueEl.textContent = 0;
    counterValueEl.style.color = "black";
}


function onIncrease(){
    let previousCounterValue = counterValueEl.textContent;
    let currentCounterValue = parseInt(previousCounterValue) + 5;
    if (currentCounterValue < 0){
        counterValueEl.style.color = "red";
    }
    else if (currentCounterValue == 0){
        counterValueEl.style.color = "black";
    }
    else{
        counterValueEl.style.color = "green";
    }

    counterValueEl.textContent = currentCounterValue;
}


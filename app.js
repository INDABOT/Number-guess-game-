function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

let randomNumber = getRandomInt(1, 100);
const feedback = document.getElementById('feedback');
const lives = document.getElementById('Lives');
let attempt = 0;
const maxAttempt = 3;


document.getElementById('button').addEventListener('click', function(){
if(attempt < maxAttempt){
    const inputElement = document.getElementById('number'); //gets the input element ID
    const inputValue = parseInt( inputElement.value, 10);

    if(isNaN(inputValue)){
        feedback.innerText = 'please input a valid number';
        return;
    }
    attempt++;

const remainingLives = maxAttempt - attempt;
lives.innerText = 'Remaining Lives: ' + remainingLives; 

    if (inputValue === randomNumber){
        feedback.innerHTML = 'congrats you won';
    } else if (inputValue < randomNumber){
        feedback.innerText = ' too low try again';
    }else if (inputValue > randomNumber){
        feedback.innerText = 'too high try again';
    }

    if (attempt >= maxAttempt){
        feedback.innerHTML = 'Game Over!  the correct number was ' + randomNumber;
    };
};

});

document.getElementById('restart').addEventListener('click', function(){
    randomNumber = getRandomInt(1,100);
    attempt = 0;
    lives.innerText ="Remaining Lives: " + maxAttempt;
    document.getElementById('number').value = "";
    feedback.innerText = "";
});


//todo:
// number of lives remaining
//
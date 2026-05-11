const Dice = document.getElementById('dice');
const Button = document.querySelector('button');
const rollHistory = document.getElementById('roll-history');
const modal = document.querySelector('.modal-box');
const span = document.querySelector('.close');

let history = [];

function rollDice () {
    const roll = Math.floor(Math.random()* 6) + 1;
    const diceFace = getDiceFace(roll);
    history.push(roll);
    Dice.innerHTML = diceFace;
    
    if(history.length > 4) {
        modal.style.display = "block";

        span.onclick = function() {
            modal.style.display = "none";
        }
        return;

    }

    updateFace();
}

function getDiceFace(roll) {
    switch (roll) {
        case 1:
            return '&#9856';
            break;
        case 2:
            return '&#9857';
            break;
        case 3:
            return '&#9858';
            break;
        case 4:
            return '&#9859';
            break;
        case 5:
            return '&#9860';
            break;
        case 6:
            return '&#9861';
            break;
            return '';
    }
}

function updateFace() {
    rollHistory.innerHTML = '';
    for(let i = 0; i < history.length; i++) {
        const listTry = document.createElement('li');
        listTry.style.height = '35px';
        listTry.innerHTML = `roll ${i + 1}: <span>${getDiceFace(history[i])}</span>`;
        rollHistory.appendChild(listTry);
    }

}

Button.addEventListener('click', () => {
    Dice.classList.add('roll-animation');
    setTimeout(() => {
        Dice.classList.remove('roll-animation');
        rollDice();
    }, 1000);

})
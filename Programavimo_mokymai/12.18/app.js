function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
 
const diceImage = document.querySelector('.image');
 
const diceNumber = document.querySelector('.diceNumber');
 
const button = document.querySelector('.roll');
 
const kauliukas = [
    "&#9856;",  // i = 0 // sk 1
    "&#9857;",  //  i = 1  // sk 2
    "&#9858;",  // i = 2
    "&#9859;",  // i = 3
    "&#9860;",  // i = 4 // sk 5
    "&#9861;"  // i = 5  // sk 6
];
 
button.addEventListener('click', rollDice);
 
function rollDice() {
    let rollResult = rand(1, 6);
    console.log(rollResult);
    diceNumber.innerText = rollResult;
    diceImage.innerHTML = kauliukas[rollResult-1];
}
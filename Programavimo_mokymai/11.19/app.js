console.log ('Labas treciadieni')
function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
// 1. Ridenam kamuoliuką. Į atitinkamus tag'us parašom skaičių ir ar skaičius lyginis/nelyginis.
// Lyginį skaičių nudažom mėlynai, nelyginį - raudonai.

const skaicius = document.querySelector('.uzduotis1 > p > span');
// skaicius.innerText = 'skaicius11';

const lygNeLyg = document.querySelector('.uzduotis1 > p + p > span')
// lygNeLyg.innerText = 'lyg pataikem';

const ridenam = rand(1,6);
skaicius.innerText = ridenam;

if (ridenam == 2 || ridenam == 4 || ridenam == 6 ) {
    lygNeLyg.innerText = 'Lyginis';
    skaicius.style.color = 'blue';
} else {
    lygNeLyg.innerText = 'Nelyginis';
    skaicius.style.color = 'crimson';
}

// 2. Petras ir Birutė ridena kamuoliuką. Į atitinkamus tagus įrašyti išridentus skaičius. 
// Didesnį skaičių nuspalvinti žaliai.
// Parašyti kas nugalėjo.

const petroRez = document.querySelector('.uzduotis2 > p > span');
const birutesRez = document.querySelector('.uzduotis2 > p + p > span');
const nugaletojas = document.querySelector('.uzduotis2 > p + p + p > span');

const ridenam1 = rand(1,6);
petroRez.innerText = ridenam1;

const ridenam2 = rand(1,6);
birutesRez.innerText = ridenam2;

if (ridenam1 > ridenam2 ) {
    nugaletojas.innerText = 'Petras';
    petroRez.style.color = 'green';
} else {
    if (ridenam2 > ridenam1) {
    nugaletojas.innerText = 'Birute';
    birutesRez.style.color = 'green';
    } else {
        nugaletojas.innerText = 'Lygiosios';
    }    
}

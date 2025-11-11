function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


const h1 = document.querySelector('h1');
h1.innerText = '1';

const h2 = document.querySelector('h2');
h2.innerText = '2';

const h3 = document.querySelector('h3');
h3.innerText = '3';

const h4 = document.querySelector('h4');
h4.innerText = '4';

const div = document.querySelector('div');




let myFancyRandom = rand(0, 4);

console.log (myFancyRandom);
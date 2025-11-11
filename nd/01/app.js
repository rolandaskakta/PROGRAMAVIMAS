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

const divai = document.querySelectorAll('div');

let div1Color = 'blue';

const kvadratas = divai[0];
kvadratas.style.width = '150px';
kvadratas.style.height = '150px';
kvadratas.style.backgroundColor = div1Color;
kvadratas.style.display = 'inline-block';
kvadratas.style.margin = '20px';



let div2Color = 'red';
const apskritimas = divai[1];

apskritimas.style.width = '150px';
apskritimas.style.height = '150px';
apskritimas.style.backgroundColor = div2Color;
apskritimas.style.borderRadius = '50%';
apskritimas.style.display = 'inline-block';
apskritimas.style.margin = '20px';


// const divai = document.querySelectorAll('div');

// let div1Color = 'blue';

// const kvadratas = divai[0];
// divai[0].style.width = '150px';
// divai[0].style.height = '150px';
// divai[0].style.backgroundColor = div1Color;
// divai[0].style.display = 'inline-block';
// divai[0].style.margin = '20px';



// let div2Color = 'red';
// const apskritimas = divai[1];

// divai[1].style.width = '150px';
// divai[1].style.height = '150px';
// divai[1].style.backgroundColor = div2Color;
// divai[1].style.borderRadius = '50%';
// divai[1].style.display = 'inline-block';
// divai[1].style.margin = '20px';








let myFancyRandom = rand(0, 4);

console.log (myFancyRandom);
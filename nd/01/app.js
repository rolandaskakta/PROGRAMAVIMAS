function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
// let myFancyRandom = rand(0, 4);

// console.log (myFancyRandom)


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

//. 3 uzduotis


const span11 = document.querySelector('span')

const span22 = document.querySelector('span + span')

const span33 = document.querySelector('span + span + span')

const span1 = rand(0, 4);

const span2 = rand(0, 4);

const span3 = (span1 / span2)

span11.innerHTML = span1;
span22.innerHTML = span2;
span33.innerHTML = span3;

if (span1 >= span2) {
    span1 / span2
}
if (span2 > span1) {
    span2 / span1
    span11.innerHTML = span2;
    span22.innerHTML = span1;
}

//. 4 uzduotis

// const divasPirmas = document.querySelector (go4.div)
// const divasAntras = document.querySelector (go4.div + go4.div)
// const divasTrecias = document.querySelector (go4.div + go4.div + go4.div);

// Sukuriame tris atsitiktinius skaičius nuo 50 iki 200
const size1 = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
const size2 = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
const size3 = Math.floor(Math.random() * (200 - 50 + 1)) + 50;

// Sudarome masyvą su dydžių reikšmėmis
const sizes = [size1, size2, size3];

// Išrikiuojame dydžius mažėjančia tvarka (nuo mažiausio iki didžiausio - pakeiskime)
sizes.sort((a, b) => a - b);

// Gauname atitinkamus div'us iš html ir paverčiame juos į apskritimus
const go4Section = document.getElementById('go4');

for (let i = 0; i < sizes.length; i++) {
  const div = document.createElement('div');
  div.style.width = sizes[i] + 'px';
  div.style.height = sizes[i] + 'px';
  div.style.borderRadius = '50%';
  div.style.backgroundColor = 'lightblue'; // pasirinktinė spalva
  div.style.display = 'inline-block';
  div.style.marginRight = '10px'; // tarpas tarp apskritimų
  go4Section.appendChild(div);
}

// 5 uzduotis

const spanas1 = document.querySelector ('#go5');

for (let i = 0; i < 3; i++) {
    const number = rand(-10, 10);
    const span = document.createElement('span');
    span.textContent = number;

    if (number > 0) {
        span.style.color = 'blue';
    } else if (number < 0) {
        span.style.color = 'red';
    } else {
        span.style.color = 'green';
    }

     spanas1.appendChild(span);
console.log (span1);
}

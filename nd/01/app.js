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
  div.style.backgroundColor = 'green'; // pasirinktinė spalva
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


//6 uzduotis. Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip 1000 EUR taikoma 3 % nuolaida, 
// daugiau kaip už 2000 EUR - 4 % nuolaida.
//  Paskaičiuokit,  žvakių kainą ir užpildykite formą easnčią section tage su id=go6.
//  Žvakių kiekį generuokite ​rand() funkcija nuo 5 iki 3000.

let zvakiuKiekis = document.querySelector('#go6 > p > span');
let zvakiuKaina = document.querySelector('#go6 > p + p > span');
let nuolaida = document.querySelector('#go6 > p + p + p> span');
let galutineKaina = document.querySelector('#go6 > p + p + p + p> span');

let nuolaida1 = 0;
let zvakiuKrepselis = rand(5, 3000);
let sumaBeNuolaidos = zvakiuKrepselis * 1;
let nulaidosSuma = 0;
let galutinesKainosSuma = sumaBeNuolaidos + nuolaida1;


if (zvakiuKrepselis < 1000){

} else {
    if (zvakiuKrepselis >= 1001 && zvakiuKrepselis < 2000) {
        nulaidosSuma = 2;
        nuolaida1 = zvakiuKrepselis * 0.02;
    } else {
        nulaidosSuma = 4;
        nuolaida1 = zvakiuKrepselis * 0.04;
    }

}
zvakiuKiekis.innerText = zvakiuKrepselis;
zvakiuKaina.innerText = sumaBeNuolaidos;
nuolaida.innerText = nulaidosSuma;
galutineKaina.innerText = galutinesKainosSuma - nuolaida1;


//7 uzduotis. Naudokite funkciją rand(). Parašykite kodą, 
// kuris atsitiktine tvarka generuotų ir iš section su  id=go7 esančio div tago padarytų apskritimą, arba keturkampį arba trikampį.



// 8uzduotis. Suskaičiuoti kiek kiekvienos spalvos apskritimų yra section su id=go8.
//  Rezultatus įrašyti į šalia tam skirtas vietas.


const circles = document.querySelectorAll('#go8 > div');

// Initialize counters for each color
let greenCount = 0;
let redCount = 0;
let blueCount = 0;

// Iterate over each circle and count the colors
circles.forEach(circle => {
    let color = circle.style.backgroundColor;
    switch(color) {
        case 'green':
            greenCount++;
            break;
        case 'red':
            redCount++;
            break;
        case 'blue':
            blueCount++;
            break;
    }
});

// Update the results in the HTML
document.querySelector('#go8 [data-result] [data-green] span').textContent = greenCount;
document.querySelector('#go8 [data-result] [data-red] span').textContent = redCount;
document.querySelector('#go8 [data-result] [data-blue] span').textContent = blueCount;



//9 uzduotis.


// let pirmaEileSpanas1 = document.querySelector('#go9 > div > span');
// let pirmaEileSpanas2 = document.querySelector('#go9 > div > span + span');
// let pirmaEileSpanas3 = document.querySelector('#go9 > div > span + span + span');

// if (0, 9){

// }
// let pirmaEileSpanas1rez = pirmaEileSpanas1 * pirmaEileSpanas2;

// console.log(pirmaEileSpanas1);
// console.log(pirmaEileSpanas2);
// console.log(pirmaEileSpanas3);

const rows = document.querySelectorAll('#go9 div');

// Iterate over each row
rows.forEach(row => {
    // Get the span elements containing the numbers
    const spans = row.querySelectorAll('span');

    // Extract the numbers
    const num1 = Number(spans[0].textContent);
    const num2 = Number(spans[1].textContent);

    // Calculate the product
    // const product = num1 * num2;

    // Update the third span with the result
    spans[2].textContent = num1 * num2;
});




console.log('vel pirmadienis...');


const animal = {
    name: 'Zuikis',
    eat: 'morkas',
    tail: 'trumpa'
}

const colorPensOb = {
    one: 'Raudona',
    two: 'Zalias',
    four: 'Geltonas'
}
console.log(colorPensOb.two);

// masyvas yra objektas skirtas saugoti vienodiems*, is eiles sudeliotiems kintamiesiems
// nebutinai jie turi buti vienodi
const colorPens = [
    'Raudona',
    'Zalias',
    'Geltonas'
]
console.log(colorPens);
console.log(colorPens[1])

colorPens[1] = 85;
colorPens[7] = 'juodas';
//1 , 7 vadinasi indeksai

console.log(colorPens);
console.log(colorPens[3], colorPens.lenght);

//---------------------------------------------------------------------------------------///

const animals = []; //tuscias masyvas, veliau galima i ji krauti

animals[0] = 'Bebras';
animals[1] = 'Barsukas';

animals.push('Briedis'); // dedame sekanti is eiles elementa
animals.push('Vilkas');
animals.push('zuikis', 'Kiskis');// kelis( daug) iskkart ikeliam, su PUSH

// animals.push(50, 87);

console.log(animals);

//--------------------------------------------//

const word = 'rabarbaras';

let found = [];


// radimas
for (let i = 0; i < word.length; i++) {
    if (word[i] == 'r') {
        found.push(i);
    }
}

console.log(found);


//---------------------------------------------------------------------//

// 1. padaryti masyvą iš skaičių 55, 77, 2 (naudojant push)

const myNumbers1 = [];

myNumbers1.push(55, 77, 2);

console.log(myNumbers1);

// 2. padaryti masyvą iš skaičių 1, 2, 3... 100 naudojant for ciklas

const myNumbers2 = [];

for (let i = 1; i <= 100; i++) {
    myNumbers2.push(i);
}

console.log(myNumbers2);


//---------------------------------------------------------//

const h2First = document.querySelector('h2');
const h2Second = document.querySelector('h2 + h2');

console.log(h2First.innerText);
console.log(h2Second.innerText);

const h2All = document.querySelectorAll('h2'); // node list - kuris is principo yra masyvas

console.log(h2All[2].innerText);

for (let i = 0; i < h2All.length; i++) {
    console.log(h2All[i].innerText)
}

h2Second.style.color = 'crimson';
// h2All.style.color = 'skyblue';  nesigauna taip, viso masyvo neina nuspalvinti

for (let i = 0; i < h2All.length; i++) {
    h2All[i].style.color = 'skyblue'
} // kad visus h2 nuspalvint

// 3. elemente section sukurti 3 h3 tagus su skaiciais 1, 2 , 3


const section = document.querySelector('section');
for (let i = 1; i <= 3; i++) {
    const h3 = document.createElement('h3');
    h3.innerText = i;
    section.appendChild(h3);
}


console.clear();

const colors = [];

colors.push('red');
colors.push('Blue');
colors.push('Green');



colors.unshift('Black'); // prideda i pradzia

console.log(colors);
console.log('helooo')

// const clickMeNo1 = function() {
//     console.log('Button No1')
// }
const buttonNo1 = document.querySelector('#nr1');


//inline funkcija
buttonNo1.addEventListener('click', function () {
    console.log('Button No1')
});





// const clickMeNo2 = function() {
//     console.log('Button No2')
// }
// arrow funkcija

const clickMeNo2 = () => {
    console.log('Button No2')
}

// skiriaasi zodziu 'this'

const buttonNo2 = document.querySelector('#nr2');

//inline arrow
// buttonNo2.addEventListener('click', () => {
//     console.log('Button No2')
// });

buttonNo2.addEventListener('click', _ => console.log('Button No2'));


const sum1 = (a, b) => {
    return a + b;
}

const sum2 = function (a, b) {
    return a + b;
}

// jeigu funkcija bloke yra tik 1 eilute galime supaprastinti


const sum3 = (a, b) => a + b;
console.log(sum1(5, 3));
console.log(sum2(5, 4));
console.log(sum3(9, 4));


const add5 = function (a) {
    return a + 5;
}

const add6 = (a) => {
    return a + 5;
}

// jeigu yra tik vienas parametras galima praleisti parametru skliaustelius
const add7 = a => a + 5;

console.log(add5(12));
console.log(add6(13));
console.log(add7(14));


const bebras1 = () => {
    return 'Bebras1';
}

const bebras2 = () => 'Bebras2';

const bebras3 = nenaudoju => 'Bebras3';

// kintamasis vardu _ yra naudojamas sintaksei uzpildyti bet nenaudojamas skaiciavimams
const bebras4 = _ => 'Bebras4';

console.log(bebras1());
console.log(bebras2());
console.log(bebras3());
console.log(bebras4());

console.clear();


for (let i = 0; i < 10; i++) {
    console.log('Bla Bla', i);
}

// for (let i = 0; i > -10; i--) {
//     console.log('Bla Bla', i);
// }


// panaudojimas 1. Radimas  2. agregacija

const word = 'rabarbaras';

let found = '"r" raide nerasta';


// radimas
for (let i = 0; i < word.length; i++) {
    if (word[i] == 'r') {
        found = `"r" ${i} rasta vietoje`; //uzrasas nieko ${i} bendro su ciklu
    }
}

console.log(found);

//agregacija

let count = 0;

for (let i = 0; i < word.length; i++) {
    if (word[i] == 'r') 
        count++;
}

console.log(`Zodyje ${word} yra ${count}`)

//--------------------------------------------------------------------------------////
let found1 = ''; 

for (let i = 0; i < word.length; i++) {
    if (word[i] == 'r') {
        found1 += `"r" ${i} rasta vietoje \n` ; //uzrasas nieko ${i} bendro su ciklu
    }
}

console.log(found1);

/*

CIKLAI:
for
while
do while
for in
for of
switch

CIKLO VALDYMAI:
break
continue

*/
console.log('labas pratimai')

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// 0. kintamajam priskirti atsitiktine reiksme nuo 10 iki99 ir ta reiksme atspausdinti konsolej

const rand0 = rand(10, 99);
console.log(rand0);

// 1. Sugeneruoti atsitiktinę reikšmę nuo 10 iki 99. Jeigu ta reikšmė maženė už 50 kitamajam
// animal priskirti reikšmę 'Bebras'. Kitu atveju priskriri reikšmę 'Barsukas'. Atsitiktinę
// reikšmę ir animal kintamąjį atspausdinti konsolėje


let animal;

const rand1 = rand(10, 99);

if (rand1 < 50) {
    animal = 'Bebras';

} else {
    animal = 'Barsukas';
}

console.log(rand1, animal);



// 2. Parašyti funkciją, kuri spausdina atsitiktinį skaičių nuo 1 iki 5; 

const fun2 = function () {
    const sk1 = rand(1, 5); {
        return sk1;
    }
}

console.log(fun2());


// 3.// 3. Parašyti funkciją, kuri grąžina atsitiktinį skaičių nuo 1 iki 5. Grąžintą skaičių reikia priskirti
// kintamąjam skaicius15. Kintamąjį skaicius15 padauginti iš 5 ir gautą rezultatą atspausdinti konsolėje

const fun3 = function () {
    const A = rand(1, 5); {
        return A;
    }
}
let skaicius15 = fun3()
skaicius15 = skaicius15 * 5;


console.log(skaicius15);


// 4. Parašyti funkciją kuri grąžina stringą 'Puiki diena'. Gautą stringą priskirti kintamąjam
// tą kintamąjį atspausdinti

function fun4() {
    const B = 'Puiki diena';
    return B;
}

const zuikis = fun4();

console.log(zuikis);


// 5. Parašyti funkciją kuri grąžina atsitiktine tvarka arba stringą 'A' arba 'B'
// Gautą grąžintą stringą priskirti kintamajam raide. Kintamąjį atspausdinti

function penkta() {

    const raide = rand(0, 1);
    if (raide) {
        return 'A';
    }
    return 'B';

}
const r = penkta();
console.log(penkta());

console.clear();

//-------------------------------------------------------------------------------------------------------------//


let kas;

if (24 > 15) {
    kas = 'TAIP'
} else {
    kas = "NE"
};

console.log(kas);

const kas2 = 24 > 105 ? 'Taip' : 'NE';  // ternary operator - priskiriamoji salyga

console.log(kas2);


//--------------------------------------------------------------------------------------------------------//

// 6. Parašyti funkciją kuriai duodate bet kokį stringą, o ji grąžina pirmą stringo raidę.
// Pademonstruoti veikimą konsolėje

function betkoks() {
    Barsukas = 'Barsukas';
    return Barsukas[0];
}
console.log(betkoks());


// 7. Parašyti funkciją kuriai duodate bet kokį stringą, o ji grąžina paskutine stringo raidę.
// Pademonstruoti veikimą konsolėje

const lastLetter = function(pranasJonas) {
    return pranasJonas[pranasJonas.length - 1];

}

console.log(lastLetter('Bebras'));
console.log(lastLetter('kakakrieK'));


// 8.// 8. Parašyti funkciją kuri konsolėje spausdina 'Labas'
// Funkcija turi pasileisti paspaudus mygtuką html faile (html faile reikia sukurti tokį mygtuką)

const showHello = function() {
    console.log('Labas')
}

const button1 = document.querySelector('#nr1');
button1.addEventListener('click', showHello);


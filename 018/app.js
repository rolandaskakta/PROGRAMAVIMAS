console.log('labas ketvirtadiooeniiii');
function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// duotas zodis "Meskenas". reikia konsoleje atskirai atspausdinti po 1 visas raides

const word = 'Meskenas';

for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
}


// duotas zodis "Meskenas". reikia html zodi atspausdinti stulpeliu
const body = document.querySelector('body');
const word1 = 'Meskenas';

for (let i = 0; i < word1.length; i++) {
    const divWord1 = document.createElement('div');
    divWord1.innerText = word1[i];
    body.appendChild(divWord1);
}

console.clear();

let number1;

do {
    number1 = rand(0, 10);
    console.log(number1)

} while (number1 > 5);


/// sakykime kad metate moneta ir ji gali iskrist H, kaip herbas arba S kaip skaicius. tam panaudojam
///rand funkcija

// let coin = rand(0, 1) ? 'H' : 'S';
// console.log(coin);


/// mesti moneta kol iskris H
// let coin;
// do {
//     coin = rand(0, 1) ? 'H' : 'S';
//     console.log(coin);
// } while (coin != 'H');


/*

== <----> !=
> <----> <=
< <----> >=
|| <----> &&


*/
console.clear();

/// mesti monet kol iskris 3 H ty 3 kartus herbas
let coin = 0;
let times = 0;

let saugiklis = 100;

do {
    coin = rand(0, 1) ? 'H' : 'S';
    console.log(coin);
    if (coin == 'H'){
        times++;
    }
    saugiklis--;
    if(!saugiklis) {
        console.log('Suveike saugiklis');
        break;
    }


} while (times < 3);

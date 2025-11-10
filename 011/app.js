console.log('Labas Bebriau!');


var x = 10;

console.log(x);

var pasisveikinimasSuBarsuku = 'labas rytas ponas barsukai!';

console.log('pasisveikinimasSuBarsuku', pasisveikinimasSuBarsuku)

console.log(x, pasisveikinimasSuBarsuku)

var x = 20;

console.log(pasisveikinimasSuBarsuku, x)

x = 30;

console.log(x, pasisveikinimasSuBarsuku)

let L = 20; //deklaracija - vardo ir reiksmes suteikimas
const N = 30;

// 1. kintamojo vardas (L/N)
// 2. kintamojo reiksme(turinys) (20/30)
// 3. kintamojo tipas:

let K1 = 25; // tipas Number
let K2 = 'Barsukas'; // tipas String(susidaro is simboliu:pvz tekstas,skaiciai)
let K3 = '102'; // tipas String
let K4 = 54.78; // tipas Number
let K8 = -78.0002; // tipas Number


let K20 = K1 + 30;

console.log(K20)

let K30 = 100 + 20 * 5;

console.log(K30)

let K40 = K1 + K3; // sulipdymas

console.log(K40, typeof K40) //tipo pasirinkimas

let K50 = K3 + K1;

console.log(K50, typeof K50)

let K60 = K2 + ' ' + K2;
console.log(K60);


console.log(5 + 12 + ' Labas ' + 20 + 6 * 4)




let bebrasVardas = 'Jonas';
let bebrasAmzius = 12;

//object tipas
let bebras = {
    vardas: 'Jonas', //cia yra property (savybes)
    amzius: 12
}

bebras.uodega = 'pusiilge';
bebras.amzius = 14;

console.log(bebras);

console.log(bebras.amzius);

let h1 = document.querySelector('h1')

console.log(h1, typeof h1);

let b = document.querySelector('body');

console.log(b, typeof b);
let color = 'blue'
let like = 'sky'
let dark = 'dark'
let bodyColor = like + color;

b.style.background = bodyColor;
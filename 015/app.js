console.log('Labas pirmadieni')

console.log('Top')

if (true) {
    console.log('If');
}

function fun1() { //funkcijos deklaracija
    console.log('Block')
}

console.log('Bottom0');


fun1();
console.log('Bottom1');
fun1();
console.log('Bottom2');
fun1();

function fun2() {
    console.log('%cFancy', 'color:skyblue; font-size: 25px');
}

fun2();
fun2();

//anonimine funkcija
const fun3 = function () {
    console.log('%cFancy', 'color:crimson; font-size: 25px');
}

fun3();
fun3();


const fun4 = function () {
    console.log('Button Clicked');
    const h2 = document.querySelector('h2');
    h2.innerText = 'FUN FUN FUN';
}

const button1 = document.querySelector('#nr1');

button1.addEventListener('click', fun4); // kai click ant button1 paleidziam fun4 funkcija


const fun5 = function () {
    console.log('%cTRUE', 'color:darkgreen; font-size: 25px');
}

const fun6 = function () {
    console.log('%cFALSE', 'color:crimson; font-size: 25px');
}

if (52 > 6) {
    fun5();
} else {
    fun6();
}


const fun7 = function (pirmasParametras, antrasParametras) {
    console.log(pirmasParametras * antrasParametras);
}
fun7(8, 10, 3);

let pirmasArgumentas = 2;
let antrasArgumentas = 5;

fun7(pirmasArgumentas, antrasArgumentas);


const nr2 = document.querySelector('#nr2');
const nr3 = document.querySelector('#nr3');

const fun8 = function (sk1, sk2) {
    const rez = sk1 * sk2;
    return rez;
}

nr2.innerText = fun8(8, 4);

const rez1 = fun8(7, 2);

nr3.innerText = rez1;


fun8();


//Parasyti funkcija kuri gauna du skaicius ir grazina didesni. grazinta skaiciu atspausdiname konsoleje



const fun9 = function (sk1, sk2) {
    if (sk1 > sk2) {
        return sk1; // nutraukiam funkcijos veikima
    }
    return sk2;
}
// dar ne dabar
const fancyFun = (sk1, sk2) => sk1 > sk2 ? sk1 : sk2; // arrow funkcija + ternary

console.log(fancyFun(19, 9));
console.log(fancyFun(3, 10));

// Parasyti funkcija kur gauna du stringus ir grazina ilgesni, grazinta stringa atspausdinti konsoleje


const fun10 = function (st1, st2) {
    if (st1.length > st2.length) {
        return st1;
    }
    return st2;
}
 console.log(fun10('bebras', 'barassasas'));



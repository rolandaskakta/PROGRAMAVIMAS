console.log('ketvirtadienis')


// 1. Atspausdinti žinutę

// Sukurti funkciją hello(), kuri atspausdina „Hello!“.


function pasisveikinimas() {
    console.log('Hello!');
}

pasisveikinimas();

// 2. Atspausdinti bet kokį skaičių

// Sukurti funkciją, kuri atspausdina perduotą (kaip argumentas) skaičių.


const funkcija1 = function (sk1) {
    console.log(sk1);
};

funkcija1(14);

// 3. Sudėti du skaičius
// Sukurti funkciją sum(a, b), kuri grąžina a + b rezultatą.

const funkcija2 = function (a, b) {
    return a + b;
}
console.log(funkcija2(3, 9));

//// 4. Padidinti skaičių

// Sukurti funkciją padidinti(num), kuri grąžina skaičių, padidintą +10.

const funkcija3 = function (num) {
    return num + 10;
}
console.log(funkcija3(7));

// 5. Sujungti du žodžius tarpu
// Sukurti funkciją sujungti(a, b), kuri grąžina tekstą „a - b“.
// (Galima naudoti " " tiesiog kaip tekstą. Jokių metodų.)

const funkcija4 = function (a, b) {
    return a + ' ' + b;
}

console.log(funkcija4('labas', 'rytas'));

// 6. Grąžinti tą pačią reikšmę

// Sukurti funkciją, kuri atspausdina konsolėje tą patį, kas perduota.

const funkcija5 = function (a) {
    a = 'Labas';
    console.log(a);
}

funkcija5();

//7. // 7. Sukurti „prisistatymą“

// Sukurti funkciją prisistatymas(vardas), kuri grąžina:

// „Mano vardas VARDAS“ (vietoj VARDAS įrašyti perduotą argumentą).
 

const funkcija7 = function(vardas) {
    return 'Mano vardas'+ ' ' + vardas;
}

console.log(funkcija7('Rolandas'))

const funkcija8 =(vardas1) => `Mano vardas yra ${vardas1}`;

console.log(funkcija8('Rolandas'))

// 8. Pakėlimas kvadratu
// Sukurti funkciją square(x), kuri grąžina x * x.

const x2 = (x) => x**2;

console.log(x2(11))

// 9. Grąžinti dvigubą tekstą
// Sukurti funkciją dvigubasTekstas(text), kuri grąžina text + text.

const dvigubasTekstas =(text) => text + ' ' + text;

console.log(dvigubasTekstas('Labas'));

// 10. Paversti skaičių neigiamu

// Sukurti funkciją makeNegative(num), kuri grąžina skaičių -num.

 const makeNegative = function(num) {
return - num;
 }

 console.log(makeNegative(100))

 const neigiamu = (x) => -x;
 
console.log(neigiamu(7));
 
function neg(a) {
    return '-' + a
}
console.log(neg(5))
 
console.log('ALio')

const zmogus = {
    vardas: 'Antanas',
    amzius: 35,
    miestas: 'Vilnius'
}

console.log(zmogus)

// 2. Pakeiskite objekto savybę 
// Turite objektą:
// let masina = { marke: 'Audi', metai: 2010 };
// Pakeiskite metai į 2020 ir pridėkite naują savybę spalva.
// Atspausdinkite atnaujintą objektą.

let masina = { marke: 'Audi', metai: 2010 };

masina.metai = 2020;
masina.spalva = 'red';

console.log(masina);

// 3. Objekte esantis masyvas
// Sukurkite objektą studentas su savybėmis:
// vardas
// pazymiai (masyvas su 5 skaičiais)
// Atspausdinkite konsolėje pirmą pažymį ir paskutinį pažymį.

const studentas = {
    vardas: 'Tomas',
    pazymiai: [7, 8, 9, 4, 6]
}

console.log(studentas.pazymiai[0])
console.log(studentas.pazymiai[studentas.pazymiai.length - 1]);

// 4. Patikrinkite, ar savybė egzistuoja
// Turite objektą:
// let knyga = { pavadinimas: 'Harris Poteris', puslapiai: 500 };
// Patikrinkite, ar egzistuoja savybė autorius.
// Jei nėra — pridėkite su reikšme 'Nežinomas'.

let knyga = { pavadinimas: 'Harris Poteris', puslapiai: 500 };



if (!knyga.autorius) {
    knyga.autorius = 'Nežinomas';
}
console.log(knyga);

// Masyvo elementų atvirkštinis išvedimas
// Turite masyvą:
// let gyvunai = ["šuo", "katė", "bebras"];
// Užduotis:
// Atspausdinkite masyvo elementus atvirkštine tvarka (bebras, katė, šuo).

let gyvunai = ["šuo", "katė", "bebras"];


console.log(gyvunai);
console.log(gyvunai.reverse());


// 1. Suskaičiuoti kiek masyve yra lyginiu skaičių
// let numbers2 = [2, 7, 4, 9, 12, 15, 18];
// Parašyti funkciją, kuri gauna masyvą kaip argumentą ir grąžina kiek masyve yra lyginių skaičių.
// Rezultatas: 4

let numbers2 = [2, 7, 4, 9, 12, 15, 18];
const counteven = () => {
    let count = 0;

    for (let i = 0; i < numbers2.length; i++) {
        if (numbers2[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}

console.log(counteven(numbers2));

// 2. Pirkinių krepšelis
// Sukurkite funkciją, kuri priima masyvą (kaip argumentą) su prekių objektais:

// let pirkiniuKrepselis = [
//   { name: "Milk", price: 2.00, count: 2 },
//   { name: "Bread", price: 1.20, count: 1 },
//   { name: "Eggs", price: 3.00, count: 1 },
//   { name: "Bacon", price: 3.50, count: 1 }
// ]

// Apskaičiuoti bendrą krepšelio kainą.
// Jeigu bendra suma > 10 €, taikyti 10% nuolaidą.
// Grąžinti galutinę sumą, suapvalintą iki 2 skaičių po kablelio

let pirkiniuKrepselis = [
    { name: "Milk", price: 2.00, count: 2 },
    { name: "Bread", price: 1.20, count: 1 },
    { name: "Eggs", price: 3.00, count: 1 },
    { name: "Bacon", price: 3.50, count: 1 }
];

function finalPrice(cart) {
    let sum = 0;

    for (let i = 0; i < cart.length; i++) {
        sum += cart[i].price * cart[i].count;
    }
    if (sum > 10) {
        sum = sum * 0.9;
    }
    return sum.toFixed(2)

};

console.log(finalPrice(pirkiniuKrepselis));

// 3. Teigiamų skaičių suma
// Duotas masyvas:
// let numbers = [4, -2, 7, -1, 0, 5];
// Užduotis:
// Parašyti funkciją, kuri suskaičiuoja tik teigiamų skaičių sumą.
// Rezultatas: 4 + 7 + 5 = 16


// 4. Atrinkti masyvo elementus, kurie ilgesni nei 4 raidės:
//let zodziai = ["labas", "rytas", "tu", "as", "programavimas", "trys"];
//Atspausdinti konsolėje ilgų žodžių masyvą


// 5. Sugeneruoti (atspausdinti konsolėje) tekstą: 15-14-12-11-10-9-8
// (atkrepkit dėmesį kad nėra '13')


//6.  Parašykite kodą, kuris suskaičiuos kiek kartų raidė 'a' arba 'A' pasikartoja duotame tekste.
// let tekstas  = 'Ar norėtum arbatos ar dar kavos.'
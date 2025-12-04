console.log('alio')

const namas = {
    kaminas: 'yra didelis',
    durys: 'metalines'
}

console.log(structuredClone(namas)); // gilus kopijavimas
console.log({...namas});// seklus kopijavimas

namas.langai = 5;

console.log(namas);
////---- rusiavimas 
const unshuffled = ['hello', 'a', 't', 'q', 1, 2, 3, {cats: true}];
 
const shuffled = unshuffled.sort(() => Math.random() - 0.5); // atsitiktinis išdėstymas paremtas rūšiavimu
console.log(shuffled);

/////------------


// Naujos statybos name parduodami du butai (analogija product1 ir product2)
 
// Butas. numeris: 45; užbaigtumas: "euroremontas", balkonas: nėra, kambariai: virtuvė 10m2,
// miegamasis: 15m2, svetainė: 18m2; kaina 75500eur
 
// Butas. numeris: 12; užbaigtumas: "neįrengtas", balkonas: yra,  kambariai: virtuvė 9m2,
// miegamasis: 12m2, svetainė: 20m2, vaikų kambarys: 14m2; kaina 92500eur
 
// Klausimas pirmas: Kuris butas turi daugiau kambarių?
// Klausimas antras: Kurio buto kvadratinis metras yra brangesnis (nesikartojome šito, tiesiog kam
//  per paprastas pirmas klausimas, kad turėtų ką veikti - tema masyvo metodai)


const flat1 = {
    number: 45,
    finish: 'euroremontas',
    balcone: false,
    rooms: [
        {
            name: 'virtuve',
            sq: 10
        },
        {
            name: 'miegamasis',
            sq: 15,
        },
        {
            name: 'svetaine',
            sq: 18,
        }
    ],
    price: 75500
}

const flat2 = {
    number: 12,
    finish: 'neirengtas',
    balcone: true,
    rooms: [
        {
            name: 'virtuve',
            sq: 9
        },
        {
            name: 'miegamasis',
            sq: 12,
        },
        {
            name: 'svetaine',
            sq: 20,
        },
        {
            name: 'vaiku kambarys',
            sq: 14,
        }
    ],
    price: 92500
}


if(flat1.rooms.length > flat2.rooms.length){
    console.log(flat1.number);
} else {

 console.log(flat2.number);
}

const oneSqPrice = flat => {

    const size = flat.rooms.reduce((counter,room) => {
        return counter + room.sq;

    },0);

    return flat.price / size;
}

if (oneSqPrice(flat1) > oneSqPrice(flat2)){
      console.log(flat1.number);
} else {

 console.log(flat2.number);
}

function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const skaiciusA =rand(1, 45);
const skaiciusB =rand(1, 45);
console.log('A', skaiciusA, 'B',skaiciusB)
if (skaiciusA > skaiciusB) {
    console.log('Didesnis A') // Taip
} else {
    console.log('Didesnis B') // Ne
}


/// duoti random skaiciai


const a1 = rand(1, 25);
const a2 = rand(1, 25);
const b1 = rand(1, 25);
const b2 = rand(1, 25);

// Rasti didesnį iš A
let maxA;
if (a1 > a2) {
  maxA = a1;
} else {
  maxA = a2;
}

// Rasti didesnį iš B
let maxB;
if (b1 > b2) {
  maxB = b1;
} else {
  maxB = b2;
}

console.log("Didesnis iš A:", maxA);
console.log("Didesnis iš B:", maxB);

// Rasti kuris iš dviejų mažesnis
let smaller;
if (maxA < maxB) {
  smaller = maxA;
} else {
  smaller = maxB;
}

console.log("Mažesnis iš didžiausių:", smaller);


// priskiriamoji salyga ternary
console.log('A1', a1, 'A2', a2, 'B1', b1, 'B2', b2);

const A = a1 > a2 ? a1 : a2;
const B = b1 > b2 ? b1 : b2;
const rez = A < B ? A : B;

console.log(rez)

const rez2 = Math.min(Math.max(a1,a2), Math.max(b1,b2));

console.log(rez2)


const a10 = rand(1,17);
const b10 = rand(1,17);
console.log('A', a10, 'B', b10)
if(a10 > 11 && b10 > 11) {
    console.log ('Abu didesni')
} else {
    console.log('Nera didesni')
}
if (a10 > 14 || b10 > 14) {
     console.log ('yra daugiau uz 14')
} else {
    console.log(' nera daugiau uz 14')
}


// 


const word = 'Karakumai';
let kasAntra = '';

for (let i = 0; i < word.length; i += 2) {
  kasAntra += word[i];
}

console.log(kasAntra);
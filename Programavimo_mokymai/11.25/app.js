console.log('jau antradienis')
function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
function pasisveikinti() {
    console.log('Sveiki prisijunge');
}

pasisveikinti();

function pasisveikinti2(vardas) {
    console.log('Sveiki prisijunge' + ' ' + vardas);
}

pasisveikinti2('Aldona');

function pasisveikinti3(vardas) {
    console.log(`Sveiki prisijunge ${vardas}. Geru pirkiniu`);
}

pasisveikinti3('Aldona');


// 1. Prisijungimas prie paskyros. 

// Patikrinti ar vartotojo vardas užregustruotas. Jei ne, konsolėje atspausdinti // "Toks vartotojas neegzistuoja"

// Patikrinti ar slaptažodis teisingas. Jei teisingas, konsolėje atspausdinti "Sveiki atvykę".

// Jei slaptažodis neteisingas, konsolėje atskžpausdinti "Slaptažodis ir vartotojo vardas neatitinka".

// Vartotojo vardas ir slaptažodis atsitiktinai yra true/false.

// Parašyti funkciją, kurį sukurtų ir patikrintų prisijungumo duomenis.


function paskyra() {
    let vartotojoVardas = rand(0, 1) ? true : false;
    console.log(`Vartotojo vardo reiksme - ${vartotojoVardas}`);
    let slaptazodis = rand(0, 1) ? true : false;
    console.log(`Slaptazodzio reiksme -${slaptazodis}`);

if (!vartotojoVardas) {
    console.log("Toks vartotojas neegzistuoja")
} else {
    if(slaptazodis) {
        pasisveikinti();
    } else {
        console.log("Slaptažodis ir vartotojo vardas neatitinka")

    }
}

}
paskyra();

// Parašykite funkciją, kuri gauna amžių ir parašo konsolėje ar žmogus yra pilnametis.

let amzius = rand(0, 100)
const pilnametis = _ => {
    if (amzius >= 18){
        console.log('Pilnametis', amzius)
    } else{
        console.log('Nepilnametis', amzius)
    }
}
pilnametis(amzius);

const pilnametis2 = amzius => (amzius>= 18) ? console.log('Pilnametis', amzius) : console.log('Nepilnametis', amzius);

pilnametis2(17);
pilnametis2(19);
pilnametis2(102);

const pilnametis3 = amzius => console.log((amzius>= 18) ? 'Pilnametis' : 'Nepilnametis');


pilnametis2(15);
pilnametis2(124);
pilnametis2(30);

// Parašykite funkciją, kuri: atspausdina „Lyginis“, jei duotas skaičius dalijasi iš 2;
// kitaip – „Nelyginis“.

const arLyginis = _ => (_ % 2 == 0) ? (console.log('Lyginis')) : (console.log('Nelyginis'));

arLyginis(3);
arLyginis(12);

const arLyginis2 = _ => console.log((_ % 2 == 0) ? 'Lyginis' : 'Nelyginis');

arLyginis2(11);
arLyginis2(8);

///---------------------------------------------------------------------------------------------------/////
console.clear();

function suma (a, b) {
    console.log('skaiciuojam a ir b suma');
    return a + b ;
    console.log(('skaiciuojam a ir b suma'));
}

console.log(suma (5, 7));

const elektrosSkaitliukas = (sioMen, praeitoMen) => {
    return ((sioMen - praeitoMen) * 0.24).toFixed(2);

}

const elektraSpalis = elektrosSkaitliukas (123456, 123356);
console.log(elektraSpalis);

const elektraLapkritis = elektrosSkaitliukas (124002,123456);
console.log(elektraLapkritis);

const elektraGruodis =  elektrosSkaitliukas(124379, 124002);
console.log(elektraGruodis);

//sukurti funkcija kuri skaiciuotu kuno mases indeksa, funkcijai paduodam du argumentus (svori, ugi)

function kmi  (svoris, ugis) {
    return (svoris / ((ugis/100)**2)).toFixed(1);
}

let manoSvoris = kmi(105, 195);
console.log(manoSvoris);

let tavoSvoris = kmi(65, 165);
console.log(tavoSvoris);


// sukurti funkcija, kuri gauna ( x , y) ir grazintu rezultata x *y


function daugyba (x, y){
    return (x * y);
}

let kazkas = daugyba(7, 9);
console.log(kazkas)


const daugyba2 = (x, y) => {
    return (x *y);
}

let kazkas2 = daugyba2(5, 10);
console.log(kazkas2);
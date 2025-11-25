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
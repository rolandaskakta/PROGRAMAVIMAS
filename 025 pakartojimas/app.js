console.log('Pakartojimai')

// Mergaite turi 5 spalvotus piestukus

let mergaiteTuriSpalvotusPiestukus = 5; // ne lygybe, o priskirimas
console.log(mergaiteTuriSpalvotusPiestukus);
mergaiteTuriSpalvotusPiestukus = 7;
console.log(mergaiteTuriSpalvotusPiestukus);
mergaiteTuriSpalvotusPiestukus = 9;
console.log(mergaiteTuriSpalvotusPiestukus);

mergaiteTuriSpalvotusPiestukus = 25;
console.log(mergaiteTuriSpalvotusPiestukus);

// mergaites vardas Maryte

const mergaitesVardas = 'Maryte';

// Berniukas, kurio vardas Tomukas, turi 5 piestukus

const berniukas = {} // berniukas tuscias objektas

berniukas.piestukuKiekis = 5;
berniukas.vardas = 'Tomukas';

console.log(berniukas)


const kazkas = {};

const piestukai = []; // tuscias masyvas


piestukai[0] = 'Raudonas';
piestukai[1] = 'Geltonas';
piestukai[2] = 'Zalias';

// gyveno zveris - bebras. jis turejo uztvanka ant neries upes. uztvankoje buvo sutempta 59 pagaliai
//bebro uodega buvo ilga 39cm; bebras turejo tris vaikus; 'Bebrike' bebrius' ir 'bebroidas'
// aprtasyti bebra

const zveris = {};

zveris.tipas = 'Bebras';
zveris.uztvankosUpe = 'Neris';
zveris.uztvankosPagaliuKiekis = 59;
zveris.uodegosIlgis = '39cm';
zveris.vaikai = [];
zveris.vaikai[0] = 'Bebrike';
zveris.vaikai[1] = 'Bebrius';
zveris.vaikai[2] = 'Bebroidas';


console.log(zveris)

// Prekė 'Rašiklių rinkinys'. Prekės kodas: 6548942158789. 
// Kaina: 3.75 Rašiklių spalvos: 'Mėlyna', 'Juoda', 'Raudona'

const product = {};

product.title = 'Rašiklių rinkinys';
product.productCode = '6548942158789';
product.price = 3.75;
product.penColor = [];
product.penColor[0] = 'Mėlyna';
product.penColor[1] = 'Juoda';
product.penColor[2] = 'Raudona';

console.log(product, product.penColor.length)

const product1 = {
    title: 'Rašiklių rinkinys TRYS',
    code: '6548942158789',
    price: 3.75,
    colors: ['Mėlyna', 'Juoda', 'Raudona']
}
 
const product2 = {
    title: 'Rašiklių rinkinys KETURI',
    code: '5666465135954',
    price: 4.25,
    colors: ['Mėlyna', 'Juoda', 'Raudona', 'Geltona']
}


// kurio rinkinio vienas rasiklis yra pigesnis?

// if (salygos vieta) {
// TAIP veiksmas
// }else {
// NE veiksmas
// };

if (product1.price / product1.colors.length < product2.price / product2.colors.length) {
    console.log(product1.title)
} else {
    console.log(product2.title)
};
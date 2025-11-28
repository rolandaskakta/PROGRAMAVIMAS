console.log('pagaliau penktadienisssss')
function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
//  function funkcija1(par) {
//     'kodas';
// }

// const funkcija2 = function(par) {
//     'kodas';
// }

// const funkcija3 = () => {'kodas'}

// const funkcija4 = () => 'kodas';

// if ('sąlyga') {
//     'ką darom jei true';
// } else {
//     'ką darom jei false';
// }

// function funkcija4(par) {
//     if ('sąlyga') {
//         'ką darom jei true pvz console.log()';
//     } else {
//         'ką darom jei false pvz return ';
//     }
// }

// funkcija4();
// console.log(funkcija4()); // retun rez matysim konsolėje

// 1. Patikrinti ar skaičius teigiamas
// Sukurti funkciją, kuri gauna skaičių (kaip argumentą) ir:
// išspausdina konsolėje „Teigiamas“ arba „Neigiamas“

function fun1(a) {
    if (a > 0) {
        console.log('Teigiamas');
    } else {
        if (a < 0) {
            console.log('Neigiamas')
        } else {
            console.log('0')
        }
    }
}

fun1(-5);
fun1(121);
fun1(0);

// 2. Patikrinti slaptažodį
// Jei slaptažodis yra „labas“ , spausdinam konsolėje -  „Teisingas“
// Kitu atveju - „Neteisingas“

const arLabas = (x) => console.log(x == 'Labas' ? 'Teisingas' : 'Neteisingas');
arLabas('Nelabas');
arLabas('Labas');

// 3. Temperatūros tikrinimas. Sukurti funkciją

// Jei temp > 20 , spausdinam konsolėje - „Šilta“

// Kitu atveju - „Vėsu“


const temperatura = (t) => {
    if (t > 20) {
        console.log('Silta')
    } else {
        console.log('Vesu')
    }
};
temperatura('25');
temperatura('-25');

// 4. Sukurti funkciją kuri patikrintų ar vardas lygus „Jonas“. Sukurti funkciją
// Jei vardas "Jonas" spausdinam konsolėje - „Labas, Jonai!“
// Kitu atveju  -  „Sveiki.“

const arVardas = (v) => {
    if (v == 'Jonas') {
        console.log('Labas, Jonai!')
    } else {
        console.log('Sveiki')
    }
};

arVardas('Jonas');
arVardas('Petras');

// 5. Sukurti funkciją kuri patikrintų ar skaičius didesnis už 100.

// Jei >= 100 = „Daug!“

// Kitu atveju = „Mažai.“

const skaicius1 = (s) => {
    if (s >= 100) {
        console.log('Daug!')
    } else {
        console.log('Mazai.')
    }
};

skaicius1(10);
skaicius1(121);

const skaicius2 = (s) => console.log(s >= 100 ? 'Daug!' : 'Mazai.');

skaicius2(121);
skaicius2(5);

// 6. Sukurti funkciją kuri patikrintų ar tekstas yra tuščias

// Jei textas yra  "" - „Tuščia“

// Kitu atveju - „Yra tekstas“


const fun6 = (tekstas) => {
    if (tekstas == '') {
        console.log('Tuscias')
    } else {
        console.log('Yra tekstas')
    }
};

fun6('');
fun6('lasas');

const ArTuscias = (word) => {
    if (word.length > 0) {
        return 'Yra tekstas';
    } else {
        return 'Tuscia';
    }
};

console.log(ArTuscias(15));

// Petras ir Birutė ridena kauliuką. 

// Parašyti funkciją, kuri sukurtų ir konsolėje atspausdintų išridentus skaičius.

// Parašytų kas nugalėjo.

const fun12 = () => {
    let birutesKauliukas = rand(1, 6);
    let petroKauliukas = rand(1, 6)
    if (birutesKauliukas > petroKauliukas) {
        console.log('Birutes skaicius', birutesKauliukas, 'Petro skaicius', petroKauliukas, 'Birute laimejo')
    } else {
        if (birutesKauliukas < petroKauliukas) {
            console.log('Birutes skaicius', birutesKauliukas, 'Petro skaicius', petroKauliukas, 'Petras laimejo')
        } else {
            console.log('Birutes skaicius', birutesKauliukas, 'Petro skaicius', petroKauliukas, 'Lygu')
        }
    }


}

fun12();

function kauliukoRidenimas() {
    let bir = rand(1, 6);
    let pet = rand(1, 6);
    console.log(`Birutei iškrito ${bir} o Petrui ${pet}`);
    if (bir > pet) {
        console.log('Nugalėjo Birutė');
    } else if (pet > bir) {
        console.log('Nugalėjo Petras');
    } else {
        console.log('Meskit dar kartą, nes turit išsiaiškinti nugalėtoją');
    }
}

kauliukoRidenimas();


//Užduotis:
//Parašykite funkciją, kurį gauna krepšelio sumą ir kliento tipą ir grąžina galutinę kainą:
// Klientas "bazinis:  nuolaidos nėra
// Klientas "vip" -  20% nuolaida
// Klientas "darbuotojas" -  30% nuolaida

const kainosPaskaiciavimas = (krSuma, klientoTipas) => {
    if (klientoTipas === 'bazinis') {
        return krSuma;
    } else if (klientoTipas === 'vip') {
        return krSuma * 0.8;
    } else if (klientoTipas === 'darbuotojas') {
        return krSuma * 0.7;
    } else {
        return krSuma;
    }
}   


console.log(kainosPaskaiciavimas(100, 'bazinis'));
console.log(kainosPaskaiciavimas(100, 'vip'));
console.log(kainosPaskaiciavimas(100, 'darbuotojas'));
console.log(kainosPaskaiciavimas(100, 'akcija'));

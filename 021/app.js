console.log('masyvai ir objektai juose');

const animals = [
    {
        name: 'Briedis',
        age: 54
    },
    {
        name: 'Lapė',
        age: 12
    },
    {
        name: 'Vilkas',
        age: 8
    },
    {
        name: 'Kiškis',
        age: 4
    },
    {
        name: 'Erelis',
        age: 16
    },
    {
        name: 'Voverė',
        age: 3
    }
];

console.log(animals);

// ieskom vilko

let findIndex = -1;
for (let i = 0; i < animals.length; i++) {
    //animals yra visi zverys
    // animals[i] konkretus itasis zveris
    // animals[i].name konkretaus itojo zveries vardas
    if ('Vilkas' == animals[i].name) {
        findIndex = i;
    }
}

console.log(findIndex);

//. uzduotis maryte paise paise, kuri marytes piestuko mylimiausias

const pencils = [
    {
        color: 'Raudonas',
        size: 12
    },
    {
        color: 'Mėlynas',
        size: 8
    },
    {
        color: 'Žalias',
        size: 15
    },
    {
        color: 'Geltonas',
        size: 7
    },
    {
        color: 'Juodas',
        size: 10
    },
    {
        color: 'Violetinis',
        size: 9
    },
    {
        color: 'Oranžinis',
        size: 11
    }
];



let favorite = null;  // null, dar nezinom koks piestukas
for (let i = 0; i < pencils.length; i++) {
    if (null === favorite) { // jeigu dar neturim favorito
        favorite = pencils[i]; // tai favoritu padarom pirma pasitaikiusi piestuka
    } else { // jeigu turim favorita
        if (favorite.size > pencils[i].size) { // lyginam favorita su sekanciu piestuku
            favorite = pencils[i]; // jeigu sekantis geresnis nei turimas favoritas - sekanti padarom favoritu
        }
    }
}
console.log(favorite.color);

// maryte sudeliojo savo piestukus i viena linija. kokio ilgumo linija gavosi (agregacija)

let line = 0;

for (let i = 0; i < pencils.length; i++) {
    // line = pencils[i].size + line;
    line += pencils[i].size; // abu nieko nesiskiria
}

console.log(line);

// maryte geltona piestuka ismete per balkona likusius sudeliojo sudeliojo savo piestukus i viena linija. kokio ilgumo linija gavosi (agregacija)

let line1 = 0;

for (let i = 0; i < pencils.length; i++) {
    if (pencils[i].color != 'Geltonas') {
        line1 += pencils[i].size;
    }
}

console.log(line1);

if (true) {
    console.log('Taip');
} else {
    console.log('Ne');
}
 
// Bloga praktika, bet sintaksė teisinga
if (false) console.log('Taip'); // jeigu viena eilutė, galima praleisti garbanotus skliaustus
else console.log('Ne');
 

const oldAnimals = []; // tiems kam yra virs 10 metu

for ( let p =0; p < animals.length; p++) {
    if (animals[p].age > 10) {
        oldAnimals.push(animals[p]);
    }
}

console.log(oldAnimals);

// Marytė susisrinko pieštukus ilgesnius nei 10 ir išėjo. Kokie pieštukai liko voliotis (filtaravimas)
const shortPencils = [];

for (let i = 0; i > pencils.length; i++) {
    if (pencils[i].size <= 10) {

    }
}

// Bubble sort pencils by size
for (let i = 0; i < pencils.length - 1; i++) {
    for (let j = 0; j < pencils.length - 1 - i; j++) {
        if (pencils[j].size > pencils[j + 1].size) {
            const temp = pencils[j];
            pencils[j] = pencils[j + 1];
            pencils[j + 1] = temp;
        }
    }
}
 
console.log(pencils);
console.log(' Pagaliau ketvirtadienissssss ir masyvo triukai')

const numbersArray = [45, 5, 87, 96, -1, 51, 0, 36];

//rast 96 indeksa

let indexOf96 = -1;

const find96Index = (number, i) => {
    if (number == 96) {
        indexOf96 = i;
    }
}

// for( let i = 0; i <numbersArray.length; i++){

//    find96Index(numbersArray[i], i);
// }
//analogija

numbersArray.forEach((number, i) => {
    if (number == 96) {
        indexOf96 = i;
    }
});


console.log(indexOf96);

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

// let indexAge;

animals.forEach(zveris => {
    if (zveris.name === 'Vilkas') {
        indexAge = zveris.age;
    }
});

console.log(indexAge);

// koks visu gyvunu bendras amzius

let bendrasAmzius = 0;

animals.forEach(amzius => {
    bendrasAmzius += amzius.age;
});

console.log(bendrasAmzius);

// Koks visų gyvūnų amžiaus vidurkis?

let amziausVidurkis = 0;
animals.forEach(amzius => {
    amziausVidurkis += amzius.age / animals.length;
});

console.log(amziausVidurkis);
console.log((amziausVidurkis).toFixed(2));

//ieskojimas

const surastasErelis = animals.find(zveris => {
    let arTas;
    if (zveris.name == 'Erelis') {
        arTas = true;
    } else {
        arTas = false;
    }
    return arTas;
})

console.log(surastasErelis);

const surastasKiskis = animals.find(zveris => zveris.name == 'Kiškis');

console.log(surastasKiskis)

const kiskioMetai = animals.find(zveris => zveris.name == 'Kiškis').age;

console.log(kiskioMetai);

const { age : kiskioMetai2, name } = animals.find(zveris => zveris.name == 'Kiškis');

console.log(kiskioMetai, kiskioMetai2, name);

const animalsAgePlus1 = animals.map( zveris => {
    const zverisPlus = {};
    zverisPlus.name = zveris.name;
    zverisPlus.age = zveris.age +1;
    return zverisPlus
})

console.log(animalsAgePlus1)

const animalsAgePlus1a = animals.map( zveris =>({...zveris, age: zveris.age +1}));

console.log(animalsAgePlus1a);

const ufo1 = {
    speed: 500,
    size: 'Big',
    power: 2000
};

const ufo2 = ufo1;

const ufo3 = {...ufo1} // naujas objektas

const ufo5 = {...ufo1, size: 'Small'} ;

ufo2.power = 3000;

const ufo4 = {...ufo1} // naujas objektas po ufopower pridejimo


console.log(ufo1, ufo2, ufo3, ufo4,ufo5)
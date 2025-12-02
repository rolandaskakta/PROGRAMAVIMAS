console.log(' Good morning Vietnam!!!!!!!!!!!')


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

//1. paciupinej,m visus elementus is eiles

animals.forEach(animal => {
    console.log(animal.name);
})

// 2. sukuriam patobulinta masyva is seno masyvo

const animalsPlus1Age = animals.map(animal => {
    return{...animal, age : animal.age + 1} // ...animal kopija seno objekto, age: uzrasom ant virsasus nauja age
})

console.log(animalsPlus1Age)

// 3 surandame masyve tai kas mus domina ===> find

const wolf = animals.find(animal => {
    if (animal.name == 'Vilkas'){
        return true; // paieska nutraukta, objektas su vilku rastas
    } 
    return false; // paieska eina prie sekancio objekto
})

console.log(wolf);

// 4. suskaiciuojame kazka masyve ===> reduce

const allAges = animals.reduce((sum, animal) => {
    return sum + animal.age; // iraso nauja sum reiksme
}, 0); // 0 - pradinė sum reikšmė
 
console.log(allAges);
 

// 5. naujo isfiltruoto masyvo sudarymas ===> filter

const youngAnimals = animals.filter(animal => {
    if(animal.age <= 10) {
        return true; // tinka pridedam prie issfiltruoto masyvo
    }
    return false; // netinka, nededam
});

console.log(youngAnimals)

//6. nauji surusioto masyvo sudarymas ===> to.Sorted

const byAge = animals.toSorted((a, b) =>{
    return a.age - b.age; // jeigu a > b grazins teigiama skaiciu a <b grazins neigiama
})



 const byAge2 = animals.toSorted((a, b) => {
    if (a.age > b.age) {
        return 1;
    } if (a.age < b.age) {
        return -1
    }
    return 0;
 });

console.log(byAge, byAge2);

animals.push(
    {
        name: 'Žąsis',
        age: 2
    },
    {
        name: 'Zebras',
        age: 12
    },
        {
        name: 'Šarka',
        age: 6
    },
    {
        name: 'Silkė',
        age: 12
    }
);


const byName = animals.toSorted((a, b) => {
    return a.name.localeCompare(b.name, 'lt');
})

const byName2 = animals.toSorted((a,b) =>{
    if(a.name > b.name) {
        return 1;
    } if (a.name < b.name) {
        return -1;
    }
    return 0;
})

// susortins pati animals masyva
// animals.sort((a, b) => {
//     return a.name.localeCompare(b.name, 'lt');
// })


console.log(byName, byName2);


////--------------------------------------------------------------------------------------------////
////-----------------------CIKLAS 'SWITCH' ------------------------------------------------------//////

const pack = 'M' // S, M, L, XL
 
 
if (pack == 'S') {
    console.log('S');
}
if (pack == 'S' || pack == 'M') {
    console.log('M');
}
if (pack == 'S' || pack == 'M'|| pack == 'L') {
    console.log('L');
}
console.log('XL');
console.log('-------------------------------------------------');

switch(pack) {
    case 'S': console.log('S');
    case 'M': console.log('M');
    case 'L': console.log('L');
    default: console.log('XL');
};
 
if (pack == 'S') {
    console.log('Mazas');
} else if (pack == 'M') {
    console.log('Vidutinis')
} else if (pack == 'L') {
    console.log('Didelis');
} else if (pack == 'XL') {
    console.log('Labai didelis')
}

switch(pack) {
    case 'S': 
    console.log('Mazas');
    break;
    case 'M': 
    console.log('Vidutinis');
    break;
    case 'L': 
    console.log('Didelis');
    break;
    case 'XL': console.log('Labai didelis');
};
 

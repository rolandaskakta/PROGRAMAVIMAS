console.log('alio antradieni')

const animals = [];

animals.push('Zukis', 'Bebras', 'Barsukas');

animals.unshift('Briedis', 'Mamutas'); // indexai persiskaiciuoja

console.log(animals);

animals.pop(); // ismeta paskutini elementa (tik viena)

console.log(animals);

animals.shift(); // ismeta pirma elementa (tik viena) // indexai persiskaiciuoja

console.log(animals);

const pushResult = animals.push('Vilkas'); // grazina  masyvo dydi su pridetais elementais

console.log(animals);
console.log(pushResult);

const popResult = animals.pop();

console.log(animals);
console.log(popResult); // grazina ismesta elementa

console.clear();
/*

Paieska
Agregacija
Filtracija
Rusiavimas

*/


const numbers = [54, 85, 31, -4, 57, 131, -78, 54, 54, 798, 0, 3, 74];

//Paieska

let findWhat = 54;
let findRow = 2; // kelinto rezultato mums reikia

let findResultIndex = -1; //rasto skaiciaus indexas -1 reiskia kad inexo dar nerado
let findResultRow = 0; // kelinto rezultato mes ieskome

for (let i = 0; i < numbers.length; i++) {
    if (findWhat == numbers[i]) {
        findResultIndex = i;

        findResultRow++; // skaiciuojam kelintas rezultatas

        if (findRow == findResultRow) {
            findResultIndex = i;
            break; // nutraukia cikla ir is jo iseina
        }
    }



}

console.log(findResultIndex);

//1. koks meskos numeris

const gyvunai = document.querySelectorAll('li');
let wordMeska = -1;

for (let i = 0; i < gyvunai.length; i++ ){
    if (gyvunai[i].innerText == 'Meška') {
        wordMeska = i;
        break;
    }
}

console.log("Meška", wordMeska + 1);

// const nr = [...document.querySelectorAll('li')].findIndex(li => li.textContent === 'Meška') + 1;
// console.log("Meška", nr);


// 2. sarase varna nuspalvinkit baltai

const gyvunai2 = document.querySelectorAll('li');
let wordVarna = -1;

for (let i = 0; i < gyvunai2.length; i++ ){
    if (gyvunai2[i].innerText == 'Varna') {
        gyvunai2[i].style.color = 'white'; //stilius ant varnos elemento
        break;
    }
}


//3. sarase visus isskyrus  peleda ir gaidy nuspalvinti oranzine


for (let i = 0; i < gyvunai.length; i++ ){
    if(gyvunai[i].innerText == 'Pelėda' || gyvunai[i].innerText == 'Gaidys'){
        continue; // pradeda nauja iteracija (ciklo prasukima)
    }
   gyvunai[i].style.color = 'orange';

    }

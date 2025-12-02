console.log('labas rytas')
function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
for (let i = 0; i <= 4; i++) {
    console.log('labas rytas')
}

// Emilija planuoja atostogas po 1 metų (12mėn). Šiam momentui kelionei pinigų neturi. 
// Kiekvieną mėn planuoja atsidėti (atsitiktinis skaičius) po 120 - 180 eur. 
// Paskaičiuoti kiek pinigų Emilija sutaupys po metų.

let isViso = 0;

for (let i = 1; i <= 12; i++) {
    let suma = rand(120, 180);
    isViso += suma;
} 
console.log(isViso)



// 3 kartus iš eilės išmesti tą patį skaičių (kauliukas)

let skaicius = 0;
let isEiles = 1;

for( let i = 1; i <= 10000; i++) {
let ridenam = rand(1, 6);
if (ridenam === skaicius) {
    isEiles++;
} else {
    isEiles = 1;
}
skaicius = ridenam;
if (isEiles === 3) {
    break;
}
}
console.log(skaicius, isEiles,)


// let iskrito = 0;
// let saugiklis2 = 1000;
// let praejesMetimas = 0;
// let kiekMetimu = 0;
 
// do {
//     let kauliukas = rand(1, 6);
   
//     kiekMetimu += 1;
//     saugiklis2--;
   
//     if (kauliukas == praejesMetimas) {
//         iskrito += 1;
//     }
//     else if (iskrito == 3) {
//         console.log(`Pagaliau iskrito! Po ${kiekMetimu}`)
//         break;
//     } else {
//         console.log('Nekrito', saugiklis2);
//         iskrito = 0;
//     }
//     praejesMetimas = kauliukas;
//     //Saugiklis
//     if (!saugiklis2) {
//         console.log('Sudeginom saugikli..');
//         break;
//     }
 
// } while (iskrito <= 3 && saugiklis2 > 0);

// let trysKartai = function() {
 
//   let n1 = 0;
//   let n2 = 0;
//   let n3 = 0;
//   let n4 = 0;
//   let n5 = 0;
//   let n6 = 0;
 
//   let laimingas = null;
 
//   do {
//     const dice = Math.floor(Math.random() * 6) + 1;
//     console.log("Iškrito:", dice);
 
//     if (dice === 1) n1++;
//     else if (dice === 2) n2++;
//     else if (dice === 3) n3++;
//     else if (dice === 4) n4++;
//     else if (dice === 5) n5++;
//     else if (dice === 6) n6++;
 
//     if (n1 === 3) laimingas = 1;
//     else if (n2 === 3) laimingas = 2;
//     else if (n3 === 3) laimingas = 3;
//     else if (n4 === 3) laimingas = 4;
//     else if (n5 === 3) laimingas = 5;
//     else if (n6 === 3) laimingas = 6;
 
//   } while (laimingas === null);
 
//   return laimingas;
// };
 
// const r = trysKartai();
// console.log("Skaičius", r, "iškrito 3 kartus (nebūtinai iš eilės)!");

// 4. Spausdinti skaičių kvadratus nuo 1 iki 5

// // Išveskite: 1 4 9 16 25

 for (let i = 1; i <=5; i++){
    console.log(i * i)
 }

 // 5. Sudėti skaičius nuo 1 iki 10

// // Išveskite sumą: 55

let skaicius5 = 0;

for(let ii = 0; ii <=10; ii++) {
    skaicius5 = skaicius5 + ii;

}
console.log(skaicius5)

// 7. Atspausdinti skaičius nuo 1 iki 10, bet tik jei jie didesni už 5

// // Išveskite: 6 7 8 9 10
 
for(let i = 1; i <=10; i++) {
    if (i > 5) {
        console.log(i)
    }
}

// 8. Atvirkštinis kvadratų spausdinimas

// // Išveskite: 25 16 9 4 1
 
for ( i = 5; i >= 1; i--) {
    console.log(i**2)
};

// 9. Sudėti tik lyginius skaičius nuo 1 iki 10

// // Išveskite sumą: 30
 let sk9 = 0;
for (let i = 1; i <=10; i++){
    if(i % 2 == 0){
        sk9 += i;
    }
    console.log(sk9)
}

// 10. Spausdinti skaičių su žodžiu

// // Išveskite: "Skaičius 1", "Skaičius 2", ... iki 5
 
for (let i = 1; i <=5; i++) {
    console.log('Skaicius' + ' ' + i);
}
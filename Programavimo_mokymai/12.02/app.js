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
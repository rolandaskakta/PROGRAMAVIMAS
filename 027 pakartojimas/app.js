console.log('cykles')


// "Bebras nori banano" kiek yra a raidžių?
const sakinys = "Bebras nori banano";
let aRaides = 0;

for (let i = 0; i < sakinys.length; i++) {
    if (sakinys[i] == 'a') {
        aRaides++
    }
}

console.log(aRaides);


// "Bebras nori banano" sukurti masyvą, kurio elementai sakinio raidės ir tarpai


const lettersArray = [];

for (let i = 0; i < sakinys.length; i++) {
    lettersArray.push(sakinys[i])
}

console.log(lettersArray);

// "Bebras nori banano" sukurti masyvą, kurio elementai sakinio raidės ir tarpai, a raidžių nedėti


const lettersArray2 = [];

for (let i = 0; i < sakinys.length; i++) {

    sakinys[i] == 'a' || lettersArray2.push(sakinys[i]);
    // where[i] == 'a' ==> true
    // po || operatoriaus push daromas




    // if (sakinys[i] == 'a') {
    //     continue;
    // }
    // lettersArray2.push(sakinys[i])
}

console.log(lettersArray2);


// where[i] == 'a' || letterArray2.push(sakinys[i]);


/*

TRUE || nesvarbu kas cia ===> visada bus TRUE

FALSE && nesvarbu kas cia ===> visada bus FALSE

*/


const masyvas = [
    45,
    87,
    'a',
    32,
    74,
    53
];

//suskaiciuoti skaiciu suma

let suma = 0;

for (let i = 0; i < masyvas.length; i++) {
    if (typeof masyvas[i] === "number") {
        suma += masyvas[i];
    }
}

console.log(suma);

const masyvas2 = [
    '45',
    87,
    32,
    '74',
    53
];
// suskaičiuoti skaičių sumą (visų)

let suma2 = 0;
for (let i = 0; i < masyvas2.length; i++) {
    suma2 += parseInt(masyvas2[i]); // konvertuojame į skaičių
}

console.log(suma2);


//<!-- užpildyti h2 po lygybės -->


const h2 = document.querySelectorAll("h2");
const sk1 = parseInt(h2[0].innerText);
const sk2 = parseInt(h2[1].innerText);
h2[2].innerText = sk1 + sk2;



//  <!-- X pakeisti atitinkamu skaičiumi -->

const h3 = document.querySelectorAll("h3");
const sks1 = Number(h3[0].innerText);
const sks2 = Number(h3[2].innerText);
h3[1].innerText = sks2 - sks1;


const button = document.getElementById("nr1");

button.addEventListener("click", eventas => {

    console.log(button.innerText);
    console.log(eventas.target);
    console.log(eventas.target.innerText);
});
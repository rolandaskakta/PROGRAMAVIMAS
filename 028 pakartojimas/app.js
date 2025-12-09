console.log('alio alio')


// ciklas cikle. "Kotleto valgymas"


const kasniu = 7;
const kramtymo = 4;

for (let i = 1; i <= kasniu; i++) { // i skaiciuoja kasniu kieki

    for (let j = 1; j <= kramtymo; j++) { // j skaiciuoja kramtymo kieki

        console.log('kasnis nr', i, 'kramtom', j, 'karta');
    }
}

const masyvas = [
    [5, 9],
    [8, 0, 9, 7],
    [1, 6, 3]
];

console.log(masyvas);

for (let i = 0; i < masyvas.length; i++) {
    for (let j = 0; j < masyvas[i].length; j++) {
        console.log(masyvas[i][j])
    }

    // console.log(masyvas[i])
}


////kokia skaiciu suma


const masyvas2 = [
    [5, 9],
    ['C', 'B', 3],
    [8, 0, 9, 7],
    [1, '', 3]
];

let suma = 0;

// for (let i = 0; i < masyvas2.length; i++) {
//     for (let j = 0; j < masyvas2[i].length; j++) {
//         if (typeof masyvas2[i][j] === "number") {
//             suma += masyvas2[i][j];
//         }
//     }
// }

masyvas2.forEach(eil => {
    eil.forEach(num => {
        if (typeof num == 'number') {
            suma += num;
        }
    })
})


console.log(suma)


const sq1 = document.querySelector('.sq1');
const sq2 = document.querySelector('.sq2');


sq1.addEventListener('click', e => {
    setTimeout(_ => {
    e.target.style.backgroundColor = 'orange';
}, 1000);
});

sq2.addEventListener('click', e => {
    e.stopPropagation(); // stabdo evento plitima i tevinius elementus
    e.target.style.backgroundColor = 'crimson';
})

const a = document.querySelector('a');

a.addEventListener('click', e => {
    e.preventDefault(); // stabdo defaultini tago evento veikima
    e.target.innerText = 'Gal neik';
    setTimeout(() => {
        window.location.href = e.target.href; // atidaro puslapi e.target.href (tago a linkas)
    }, 2000);
})
const fun = _ => {
    document.querySelector('body').style.backgroundColor = 'grey'
}
setTimeout(fun, 3000); // fun ====> funkcija, 3000 ===> laikas milisekundem

// setTimeout( _ => {
//     document.querySelector('body').style.backgroundColor = 'gray';
// }, 3000)
 // inline funkcijos variantas


 const h1Tag = document.querySelector('h1');
  const h2Tag = document.querySelector('h2');

 let count = 0;
 let count2 = 0;

 const add1 = _ => {
    count++;
    h1Tag.innerText = count;
 }
  const add2 = _ => {
    count2++;
    h2Tag.innerText = count2;
 }


 const intId1 = setInterval(add1, 1); //00 intervalo id 
 const intId2 = setInterval(add2, 1000);

 setTimeout(_ => {
//nutraukia veikima
clearInterval(intId1);
clearInterval(intId2);
 }, 10000)
console.log('labas, ifai');

//loginis Boolen

const taip = true;
const ne = false;

console.log(taip, typeof taip);
console.log(ne, typeof ne);

let bebras = 'Bebras'; // true

const nieko = ''; // false


/*

Neigimas zymisi !

Arba zymisi ||

IR zymisi &&


*/


console.log('!taip', !taip);
console.log('!ne', !ne);

console.log('!!taip', !!taip);
console.log('!!!ne', !!!ne);

{
    console.log('!Bebras', !bebras);
    console.log('!!Bebras', !!bebras);
}


if (bebras) {
    console.log('TAIP')
} else {
    console.log('NE');
}


if (nieko) {
    console.log('TAIP')
} else {
    console.log('NE');
}


if (5 > 3) {
    console.log('TAIP')
} else {
    console.log('NE');
}

if (5 > 8) {
    console.log('TAIP')
} else {
    console.log('NE');
}

/*


> daugiau
< maziau
>= daugiau arba lygu
<= maziau arba lygu
=
==  lygu
=== grieztai lygu



*/


const sk1 = -124;
let sk2 = 0;
const sk3 = NaN;
const sk4 = Infinity;

console.log(!!sk1, !!sk2, !!sk3, !!sk4);



if (sk2) {
    console.log('TAIP')
} else {
    console.log('NE');
}
if (sk2) {
    console.log('TAIP')
} else {
    console.log('NE');
}

if (8 - 7) {
    console.log('TAIP')
} else {
    console.log('NE');
}

if (8 - 7 - 1) {
    console.log('TAIP')
} else {
    console.log('NE');
}
if (10 === '10') {
    console.log('TAIP')
} else {
    console.log('NE');
}

if ('a' > 'A') {
    console.log('TAIP')
} else {
    console.log('NE');
}



const animalInput = document.querySelector('input');

animalInput.style.border = '1px solid skyblue';

animalInput.addEventListener('input', _ => {
    console.log('Raso!', animalInput.value)
    if (animalInput.value.length > 7) {
        animalInput.style.border = '1px solid crimson';
    } else {
        animalInput.style.border = '1px solid skyblue';
    }
});



if (55 > 111) {
    console.log('Šaka 1');
}

 else if (5 == 51) {
    console.log('Šaka 2');
}
else if (5 == 5) {
    console.log('Šaka 55');
}

else {
    console.log('Šaka 3');
}


console.clear();


console.log('true || true', true || true);
console.log('true || false', true || false);
console.log('false || true', false || true);
console.log('false || false', false || false);
 
console.log('true && true', true && true);
console.log('true && false', true && false);
console.log('false && true', false && true);
console.log('false && false', false && false);


if (5 > 10 || 10 >3 ) {
    console.log('TAIP');
} else {
    console.log('NE');
}

if (5 > 10 && 10 >3 ) {
    console.log('TAIP');
} else {
    console.log('NE');
}
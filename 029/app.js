console.log('Local storage')

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
}
 

const manoSkaicius = rand(1, 10);
console.log(`Sugeneruotas skaicius: ${manoSkaicius}`);

//localStorage.setItem('skaicius', manoSkaicius); // padedu skaiciu i storage

const gautasSkaicius = localStorage.getItem('skaicius');

console.log(`Gautas skaicius: ${gautasSkaicius}`, typeof gautasSkaicius);

const bebras = {
    name: 'bebras',
    age: 11
}

localStorage.setItem('animal', bebras); // ===> [object Object] suplotas objektas kai objektas paverciamas i stringa

const bebrasStringas = JSON.stringify(bebras); // pries irasant verciame i json formata

localStorage.setItem('animal2', bebrasStringas); // uzsaugojam

const gautasBebras = localStorage.getItem('animal2'); // gaunam atgal uzsaugota jsona

const bebroObjektas = JSON.parse(gautasBebras); // is json vel gauname objekta

console.log(bebroObjektas.name)


const nr1 = document.querySelector('#nr1');

nr1.addEventListener('click', _ => {
    localStorage.setItem('skaicius', manoSkaicius);
});


// "mano_skaiciai"
// informacijos vizualus atvaizdavimas vadinamas renderinimu

const renderList = _ => {
    const ol = document.querySelector('ol');
    ol.innerHTML = ''; // isvalau ol elementa
    daugSkaiciu.forEach( sk => {
        const li = document.createElement('li')
        li.innerText = sk;
        ol.appendChild(li);
    })
}






let daugSkaiciu;

daugSkaiciu = localStorage.getItem('mano_skaiciai'); //bandom paimti skaicius is local storage

if(null === daugSkaiciu) {
    //true jeigu local storage neturi tokio iraso (pradzia)
    daugSkaiciu = [];
} else {
    daugSkaiciu = JSON.parse(daugSkaiciu); // tai ka radau paverciu i objekta
}


const nr2 = document.querySelector('#nr2');

nr2.addEventListener('click', _ => {
    daugSkaiciu.push(manoSkaicius); // pridedu i sarasa
    const daugSkaiciuStringas = JSON.stringify(daugSkaiciu); //paverciu stringu
    localStorage.setItem('mano_skaiciai', daugSkaiciuStringas);
    renderList();// sitas renderina kiekviena karta paspaudus
});

// console.log(daugSkaiciu);
renderList(); //rendirina pradzioje


/*
   
    Yra trys mygtukai: Žalias, mėlynas ir raudonas. Paspaudus vieną iš mygtukų jo spalva įsirašo
    į localStorage. Kiekvienas mygtuko paspaudimas prideda savo spalvą prie sąrašo.
    Sąrašo spalvos atvaizduojamos html spalvotų (atitinkamai išsaugotai spalvai) kvadratukų pavidale.
    Sąrašas atsinaujina dinamiškai
 
*/

let spalvos;

spalvos = localStorage.getItem('Spalva');

if (null === spalvos) {
    spalvos = [];
}  else {
    spalvos = JSON.parse(spalvos);
}

const zalias = document.querySelector('#zalias');
const melynas = document.querySelector('#melynas');
const raudonas = document.querySelector('#raudonas');
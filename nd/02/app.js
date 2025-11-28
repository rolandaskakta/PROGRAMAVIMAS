console.log('functions');
function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
/// 1 uzduotis
function getRandomAnimal() {
  const animals = ["Bebras", "Barsukas", "Briedis"];
  const i = Math.floor(Math.random() * animals.length);
  return animals[i];
}

const result = getRandomAnimal();
console.log(result);

// 2 uzduotis

document.getElementById("spauskMane").addEventListener("click", function () {
  const result = getRandomAnimal();
  document.getElementById("animal").innerText = result;
});

//3. Parašykite funkciją, kuri priima vieną argumentą- stringą ir grąžina tris pirmas to stringo raides.
//  Jeigu stringas yra trumpesnis nei trys raidės- grąžina visas raides. Funkcijos grąžinamą rezultatą
//  priskirkite kintamajam ir jį atspausdinkite konsolėje.

const pirmosTris = (pirma) => {
  return pirma.slice(0, 3);
}

let rez1 = pirmosTris("Kugelis");
console.log(rez1);

// 4. Parašykite funkciją, kuri priima vieną argumentą- stringą ir grąžiną vidurinę raidę. 
// Jeigu stringe yra porinis simbolių skaičius vietoj vidurinės raidės grąžina pranešimą: 
// “Simbolių skaičius lyginis”. Konsoleje pademostruokite funkcijos veikimą su lyginius
//  ir nelyginius simbolių kiekius turinčiais stringais.

const vidurineRaide = (vidurine) => {
  if (vidurine.length % 2 === 0) {
    return "Simbolių skaičius lyginis";
  } else {
    let vidurys = Math.floor(vidurine.length / 2);
    return vidurine[vidurys];
  }
}

console.log(vidurineRaide("Kebabas"));
console.log(vidurineRaide("Pica"));

//5.Parašykite funkciją, kuri priimtų tris argumentus. Du pirmieji argumentai skaičiai,
//  o trečias matematinio veiksmo ženklas (“+”, “-”, “*”, “/”) kaip stringas.
//  Funkcija turi atlikti atitinkamą veiksmą su duotais skaičiais ir grąžinti rezultatą.
//  Pademonstruokite funkcijos veikimą, rezultatus spausdindami konsolėje.

function trysArgumentai(pirmas, antras, trecias) {
  if (trecias === "+") {
    return pirmas + antras;
  } else if (trecias === "-") {
    return pirmas - antras;
  } else if (trecias === "*") {
    return pirmas * antras;
  } else if (trecias === "/") {
    return pirmas / antras;
  }
}

console.log(trysArgumentai(1, 5, "+"));
console.log(trysArgumentai(8, 7, "-"));
console.log(trysArgumentai(15, 70, "*"));
console.log(trysArgumentai(358, 40, "/"));

//6. Parašykite funkciją, kuri priimtų du argumentus. 
// Abu argumentai skaičiai. Funkcija su skaičiais turi atlikti sumos ir sandaugos 
// matematines operacijas ir argumentus bei abiejų operacijų rezultatus grąžintų objekto 
// tipo kitamajame, turinčiame atitinkamas savybes: “pirmas”, “antras”, “suma”, “sandauga”. 
// Funkcijos grąžinamą rezultatą priskirkite kintamajam ir jį atspausdinkite konsolėje.#object

function duArgumentai(a, b) {
  return {
    pirmas: a,
    antras: b,
    suma: a + b,
    sandauga: a * b
  };
}

const rez2 = duArgumentai(7, 11);
console.log(rez2);


//7. Naudodami Html ir CSS nupaišykite mėlyną kvadratą. 
// Kvadratui uždėkite “click” įvykį, kuris paleistų funkciją, kuri kvadratą nudažytų raudonai.
//  Paspaudus mygtuką antrą kartą, turi pasileisti ta pati funkcija, bet kvadratą vėl nudažytų mėlynai. 
// Spaudinėjant ant kvadrato, kvadrato spalva turėtų pastoviai keistis iš mėlynos į raudoną ir iš 
// raudonos vėl atgal į mėlyną.

const kv = document.getElementById('kvadratas');

function toggleColor() {
  kv.classList.toggle('red');
  const isRed = kv.classList.contains('red');
  kv.setAttribute('aria-pressed', isRed);
}

kv.addEventListener('click', toggleColor);

kv.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleColor();
  }
});

// 8. Html faile sukurkite button elementą su skaičiumi “0” elemento viduje. 
// Parašykite funkciją, kuri pasileidinėtų spaudinėjant mygtuką ir kiekvienu 
// paspaudimu didintų mygtuke esantį skaičių vienetu. Spaudinėjant mygtuką, 
// jo viduje esantis skaičius turi pastoviai didėti: 0, 1, 2, 3…

const button8 = document.getElementById('batonas')

button8.addEventListener('click', () => {
  let nulis = Number(button8.textContent);
  button8.textContent = nulis + 1;
});


// 9. Html faile sukurkite button elementą ir tuščią H2 elementą.
//  H2 elemente pradžioje įrašytas “1” nuspalvintas juodai. 
// Paspaudus mygtuką, paleidžiama funkcija, kuri atsitiktiniu būdu
//  į H2 elementą įrašo skaičius nuo 1 iki 6. Jeigu atsitiktinis skaičius
//  tampa 6, jis nuspalvinamas raudonai ir toliau spaudinėjant mygtuką skaičius 
// nebesikeičia.#elektroninisKauliukas

const button9 = document.getElementsByClassName('butonas')[0];
const h2 = document.getElementsByClassName('juodas')[0];


button9.addEventListener('click', () => {
  let skaicius = rand(1, 6);

  if (skaicius === 6) {
    h2.innerText = skaicius;
     h2.style.color = 'crimson';
     button9.disabled = true;
    
  } else {
    h2.innerText = skaicius;
    h2.style.color = 'black'
  
  }

});

// 10

const btn = document.getElementById('skaiciuoti');
    const rez = document.getElementById('rezultatas');

    btn.addEventListener('click', () => {
      const a = Number(document.getElementById('skaicius1').value);
      const b = Number(document.getElementById('skaicius2').value);
      const veiksmas = document.getElementById('veiksmas').value;

      const rezultatas = trysArgumentai(a, b, veiksmas);

      rez.textContent = `Rezultatas: ${rezultatas}`;
    });
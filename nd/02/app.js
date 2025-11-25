console.log('functions');

/// 1 uzduotis
function getRandomAnimal() {
  const animals = ["Bebras", "Barsukas", "Briedis"];
  const i = Math.floor(Math.random() * animals.length);
  return animals[i];
}

const result = getRandomAnimal();
console.log(result);

// 2 uzduotis



// 1. Funkcija, kuri grąžina atsitiktinį gyvūną
  function getRandomAnimal() {
    const animals = ["Bebras", "Barsukas", "Briedis"];
    const i = Math.floor(Math.random() * animals.length);
    return animals[i];
  }

  // 2. Mygtuko paspaudimo įvykis
  document.getElementById("btn").addEventListener("click", function() {
    const result = getRandomAnimal();      // gauname gyvūną
    console.log(result);                   // atspausdiname konsolėje
    document.getElementById("animal").innerText = result; // įrašome į H2
  });

//Sukurti klasę Puodelis. Puodelis turi dvi savybes: spalva ir ipilta. 
// Sukurti statinį metodą gamintiPuodelius(), kuris pagamina du objektus 
// su savybių reikšmėm: “raudonas”, “pilnas” ir “geltonas”, “tuščias”. 
// Sukurti statinį metodą perpilti(), kuris “pilną” puodelį padaro tuščią 
// ir atvirkščiai. Jeigu abu puodeliai tušti arba pilni - nieko nepadaro.
//  Sukurti statinį metodus ispiltiViska(), kuris abu puodelius padaro 
// “tuščius” ir ipiltiIAbu(), kuris abu puodelius padaro “pilnus”. 
// Po šių metodų iškvietimo, metodas perpilti() turi veikti korektiškai
//  ir logiškai (arba abu “tušti” arba abu “pilni”).



class Puodelis {
  static pilnas = 'pilnas';
  static tuscias = 'tuščias';

  constructor(spalva, ipilta) {
    this.spalva = spalva;
    this.ipilta = ipilta;
  }

  // Sukuria ir grąžina du puodelius
  static gamintiPuodelius() {
    const p1 = new Puodelis('raudonas', Puodelis.pilnas);
    const p2 = new Puodelis('geltonas', Puodelis.tuscias);
    return [p1, p2];
  }

  // Perpilti tarp dviejų nurodytų puodelių
  static perpilti(p1, p2) {
    if (!p1 || !p2) return;

    // jeigu skirtingi – sukeičiam būsenas
    if (p1.ipilta !== p2.ipilta) {
      p1.ipilta = p1.ipilta === Puodelis.pilnas ? Puodelis.tuscias : Puodelis.pilnas;
      p2.ipilta = p2.ipilta === Puodelis.pilnas ? Puodelis.tuscias : Puodelis.pilnas;
    }
    // jei abu pilni arba abu tušti – nieko nedarom
  }

  // Abu padaro tuščius
  static ispiltiViska(p1, p2) {
    if (!p1 || !p2) return;
    p1.ipilta = Puodelis.tuscias;
    p2.ipilta = Puodelis.tuscias;
  }

  // Abu padaro pilnus
  static ipiltiIAbu(p1, p2) {
    if (!p1 || !p2) return;
    p1.ipilta = Puodelis.pilnas;
    p2.ipilta = Puodelis.pilnas;
  }
}

// Pavyzdinis naudojimas
const [p1, p2] = Puodelis.gamintiPuodelius();
console.log(p1, p2);

Puodelis.perpilti(p1, p2);
console.log(p1, p2);

Puodelis.ispiltiViska(p1, p2);
console.log(p1, p2);

Puodelis.perpilti(p1, p2); // nieko neįvyks (abu tušti)
console.log(p1, p2);

Puodelis.ipiltiIAbu(p1, p2);
console.log(p1, p2);

Puodelis.perpilti(p1, p2); // nieko neįvyks (abu pilni)
console.log(p1, p2);
//Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  
// kuri lygi 0. Parašyti šiai klasei metodus, 
// pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) ir
//  metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). 
// Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.

class Kibiras1 {
  constructor() {
    this.akmenuKiekis = 0;
  }
  prideti1Akmeni() {
    this.akmenuKiekis++;
  }
  pridetiDaugAkmenu(kiekis) {
    this.akmenuKiekis += kiekis;
  }
  kiekPririnktaAkmenu() {
    console.log(this.akmenuKiekis);
  }
}
const kibiras = new Kibiras1();
kibiras.prideti1Akmeni();
kibiras.prideti1Akmeni();
kibiras.pridetiDaugAkmenu(8);
kibiras.pridetiDaugAkmenu(3);
kibiras.kiekPririnktaAkmenu();

//Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir
//  metaliniaiPinigai. Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę.
//  Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip-
//  prie popieriniaiPinigai. Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir 
// išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės objektą ir
//  pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja 
// realiame pasaulyje.


class Pinigine {
  constructor(popKiekis = 0, metKiekis = 0) {
    this.popieriniaiPinigai = popKiekis;
    this.metaliniaiPinigai = metKiekis;
  }

  ideti(kiekis1) {
    if (kiekis1 <= 2) {
      this.metaliniaiPinigai += kiekis1;
    } else {
      this.popieriniaiPinigai += kiekis1;
    }
  } 
   skaiciuoti() {
    console.log('Metaliniai pinigai =', this.metaliniaiPinigai);
    console.log('Popieriniai pinigai =', this.popieriniaiPinigai);
    
  }
}

const pinigine1 = new Pinigine(1100,1);

pinigine1.ideti(1);
pinigine1.ideti(1.5);
pinigine1.ideti(5);
pinigine1.ideti(5);

pinigine1.skaiciuoti();


//Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0.
//  Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).
//  O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu 
// važiuojančių keleivių skaičių. Atkreipkite dėmesį, kad troleibusu važiuoti 
// neigiamas keleivių skaičius negali.

class Troleibusas {
  constructor() {
    this.keleiviuSkaicius = 0;
  }

  ilipa(keleiviuSkaicius){
this.keleiviuSkaicius += keleiviuSkaicius;
  };
  islipa(keleiviuSkaicius) {
    this.keleiviuSkaicius -= keleiviuSkaicius;
  };
  vaziuoja() {
    if(this.keleiviuSkaicius >= 1) {
    console.log('Vaziuoja', this.keleiviuSkaicius)
    } else {
      console.log('Vaziuoja', 0)
    }

  };
}

const troleibusas = new Troleibusas();

troleibusas.ilipa(6);
troleibusas.islipa(5);
troleibusas.ilipa(7);
troleibusas.islipa(9);

troleibusas.vaziuoja();
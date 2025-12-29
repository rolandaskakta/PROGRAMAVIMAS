//Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  
// kuri lygi 0. Parašyti šiai klasei metodus, 
// pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) ir
//  metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). 
// Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.

class Kibiras1 {

  static visiAkmenys = 0;

  constructor() {
    this.akmenuKiekis = 0;
  }
  static pridetiAkmenis(kiekis) {
    Kibiras1.visiAkmenys += kiekis;
  }
  prideti1Akmeni() {
    this.akmenuKiekis++;
    Kibiras1.pridetiAkmenis(1);
  }
  pridetiDaugAkmenu(kiekis) {
    this.akmenuKiekis += kiekis;
    Kibiras1.pridetiAkmenis(kiekis);
  }
  kiekPririnktaAkmenu() {
    return this.akmenuKiekis;
  }
  static akmenuSkaiciusVisuoseKibiruose() {
    return Kibiras1.visiAkmenys;
  }
}
const kibiras = new Kibiras1();
const kibiras2 = new Kibiras1();

kibiras.prideti1Akmeni();
kibiras.prideti1Akmeni();
kibiras.pridetiDaugAkmenu(8);
kibiras.pridetiDaugAkmenu(3);
kibiras.kiekPririnktaAkmenu();

kibiras2.prideti1Akmeni();
kibiras2.prideti1Akmeni();
kibiras2.pridetiDaugAkmenu(9);
kibiras2.pridetiDaugAkmenu(4);
kibiras2.kiekPririnktaAkmenu();

Kibiras1.akmenuSkaiciusVisuoseKibiruose();

console.log('Kibiras1', kibiras.kiekPririnktaAkmenu()); 
console.log('Kibiras2', kibiras2.kiekPririnktaAkmenu());
console.log('viso kibiruose', Kibiras1.akmenuSkaiciusVisuoseKibiruose()); 

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
    console.log('Suma =', this.metaliniaiPinigai + this.popieriniaiPinigai);
    // console.log('Metaliniai pinigai =', this.metaliniaiPinigai);
    // console.log('Popieriniai pinigai =', this.popieriniaiPinigai);

  }
}

const pinigine1 = new Pinigine(1100, 1);

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

  ilipa(keleiviuSkaicius) {
    this.keleiviuSkaicius += keleiviuSkaicius;
  };
  islipa(keleiviuSkaicius) {
    this.keleiviuSkaicius -= keleiviuSkaicius;
  };
  vaziuoja() {
    if (this.keleiviuSkaicius >= 1) {
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

// 6 Patobulinti 2 uždavinio piniginę taip, kad būtų galima skaičiuoti kiek
//  piniginėje yra monetų ir kiek banknotų. Parašyti metodą monetos(), 
// kuris skaičiuotų kiek yra piniginėje monetų ir metoda banknotai() -
//  popierinių pinigų skaičiavimui. Kiekvieną atskirą dėjimą (ideti(kiekis) 
// metodo kvietimą) 
// laikykite vienu banknotu ar viena moneta.------------------------------------------------------------/////////////
class Pinigine6 {
  constructor(popKiekis = 0, metKiekis = 0) {
    this.popieriniaiPinigai = popKiekis;
    this.metaliniaiPinigai = metKiekis;

    this.monetosKiekis = 0;
    this.banknotaiKiekis = 0;
  }

  ideti(kiekis) {
    if (kiekis <= 2) {
      this.metaliniaiPinigai += kiekis;
      this.monetosKiekis++;
    } else {
      this.popieriniaiPinigai += kiekis;
      this.banknotaiKiekis++;
    }
  }

  monetos() {
    return this.monetosKiekis;
  }

  banknotai() {
    return this.banknotaiKiekis;
  }

  skaiciuoti() {
    // console.log('Metaliniai pinigai =', this.metaliniaiPinigai);
    // console.log('Popieriniai pinigai =', this.popieriniaiPinigai);
    console.log('Suma =', this.metaliniaiPinigai + this.popieriniaiPinigai);
    console.log('Monetų skaičius =', this.monetos());
    console.log('Banknotų skaičius =', this.banknotai());
  }
}

const pinigine2 = new Pinigine6();

pinigine2.ideti(1);
pinigine2.ideti(1.5);
pinigine2.ideti(5);
pinigine2.ideti(5);
pinigine2.ideti(5);

pinigine2.skaiciuoti();


//-------------------------------------------------------------------------/////////

//Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. 
//Turis turi būti pasirenkamas objekto kūrimo metu. 
//Parašyti metodą ipilti(kiekis), kuris keistų savybę kiekis. 
//Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis 
//netelpa ir būna lygus tūriui. Parašyti metodą ispilti(), kuris grąžiną kiekį. 
//Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  
//Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje yra skysčio.
//Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. Didžiausią pripilti pilną 
//ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.

class Stikline {
  constructor(turis) {
    this.turis = turis;
    this.kiekis = 0;
  }

  ipilti(kiekis) {
    this.kiekis += kiekis;

    if (this.kiekis > this.turis) {
      this.kiekis = this.turis;
    }
  }

  ispilti() {
    const kiekis = this.kiekis;
    this.kiekis = 0;
    return kiekis;
  }

  stiklinejeYra() {
    console.log(this.kiekis);
  }
}

const stikline1 = new Stikline(200);
const stikline2 = new Stikline(150);
const stikline3 = new Stikline(100);

stikline1.ipilti(200);

stikline2.ipilti(stikline1.ispilti());

stikline3.ipilti(stikline2.ispilti());

stikline1.stiklinejeYra();
stikline2.stiklinejeYra();
stikline3.stiklinejeYra();

//Sukurti klasę Grybas. Sukurti klasę Krepsys. Krepsys, kuri turi savybę dydis,
// kuriai konstruktoriuje yra priskiriama reikšmė 500 ir savybę prikrauta 
// (kuri pradžioje lygi 0). Grybas turi tris savybes, 
// kurios taip pat yra paskaičiuojamos konstruktoriuje: 
// valgomas, sukirmijes, svoris. Kuriant Grybo objektą jo savybės turi 
// būti atsitiktinai (rand funkcija) priskiriamos taip: valgomas- true arba
//  false, sukirmijes- true arba false ir svoris- nuo 5 iki 45. 
// Eiti grybauti, t.y. Kurti naujus Grybas objektus, jeigu nesukirmijęs
//  ir valgomas dėti į Krepsi objektą, t.y. Vykdyti deti(grybas) metodą 
// kol bus pririnktas pilnas krepšys nesukirmijusių ir valgomų grybų 
// (gali būti truputį daugiau nei dydis)

class Grybas {
  constructor() {
    this.valgomas = Math.random() < 0.5;
    this.sukirmijes = Math.random() < 0.5;
    this.svoris = Math.floor(Math.random() * 41) + 5;
  }
}

class Krepsys {
  constructor() {
    this.dydis = 500;
    this.prikrauta = 0;
  }

  deti(grybas) {
    this.prikrauta += grybas.svoris;
  }
}

const krepsys = new Krepsys();

while (krepsys.prikrauta < krepsys.dydis) {
  const grybas = new Grybas();

  if (grybas.valgomas && !grybas.sukirmijes) {
    krepsys.deti(grybas);
  }
}

console.log(krepsys.prikrauta);

// (STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), 
// kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose. 
// Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą 
// bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų 
// keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius). 
// Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).

class Troleibusas4 {

  static visiKeleiviai = 0;

  constructor() {
    this.keleiviuSkaicius = 0;
  }

  static bendrasKeleiviuSkaicius(kiek) {
    Troleibusas4.visiKeleiviai += kiek;
  }

  ilipa(keleiviuSkaicius) {
    this.keleiviuSkaicius += keleiviuSkaicius;
    Troleibusas4.bendrasKeleiviuSkaicius(keleiviuSkaicius);
  }

  islipa(keleiviuSkaicius) {
    this.keleiviuSkaicius -= keleiviuSkaicius;
    Troleibusas4.bendrasKeleiviuSkaicius(-keleiviuSkaicius);
  }

  vaziuoja() {
   return Math.max(this.keleiviuSkaicius, 0);
  }

  static keleiviuSkaiciusVisuoseTroleibusuose() {
    return Troleibusas4.visiKeleiviai;
  }
};

const t1 = new Troleibusas4();
const t2 = new Troleibusas4();

t1.ilipa(15);
t1.islipa(7);
t2.ilipa(7);
t2.islipa(5);

t1.vaziuoja();
t2.vaziuoja();
Troleibusas4.keleiviuSkaiciusVisuoseTroleibusuose();

console.log('pirmas trulikas', t1.vaziuoja());
console.log('antras trulikas', t2.vaziuoja());
console.log('visuose trulikuose', Troleibusas4.keleiviuSkaiciusVisuoseTroleibusuose());

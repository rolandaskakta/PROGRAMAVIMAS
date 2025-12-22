//Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  
// kuri lygi 0. Parašyti šiai klasei metodus, 
// pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) ir
//  metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). 
// Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.



// parase Saulegraza
class Kibiras1 {

  #akmenuKiekis; //privatus

  constructor() {
    this.#akmenuKiekis = 0;
  }
  prideti1Akmeni() {
    this.#akmenuKiekis++;
  }
  pridetiDaugAkmenu(kiekis) {
    this.#akmenuKiekis += kiekis;
  }
  kiekPririnktaAkmenu() {
    console.log(this.#akmenuKiekis);
  }
  get akmenuSkaicius(){
    return this.#akmenuKiekis
  }
}

// naudoja Pranas
const kibiras = new Kibiras1();
kibiras.prideti1Akmeni();
kibiras.prideti1Akmeni();

kibiras.akmenuKiekis = 5;

kibiras.kiekPririnktaAkmenu();




class PiestukuDezute {
  constructor() {
    this.piestukai = [];
  }

  pridetiPiestuka(spalva) {
    this.piestukai.push(spalva);
  }

  atspausdintiPiestukus() {
    console.log(this.piestukai);
  }
}

const piestukuDezute1 = new PiestukuDezute();

piestukuDezute1.pridetiPiestuka('red');
piestukuDezute1.pridetiPiestuka('blue');
piestukuDezute1.pridetiPiestuka('yellow');

piestukuDezute1.atspausdintiPiestukus();





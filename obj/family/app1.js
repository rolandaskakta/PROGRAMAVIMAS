// klase raso programuotoja Giedre.

// klase tevas
class Miskas {
    constructor(pavadinimas, plotas) {
        this.pavadinimas = pavadinimas;
        this.plotas = plotas; // plotas hektarais
    }

};

// klase raso tomas

// klase vaikas
class Zveris extends Miskas {
    constructor(pavadinimas, plotas) {
        // super() kviecia tevines klases konstruktoriu
        super(pavadinimas,plotas);
    }
     briedis(vardas) {
        console.log(`${vardas} gyvena ${this.pavadinimas} miške, kurio plotas yra ${this.plotas} ha.`);
    }
    bebras(vardas) {
        console.log(`${vardas} gyvena ${this.pavadinimas} miške, kurio plotas yra ${this.plotas} ha.`);
    }
}

const zveris1 = new Zveris('Giraitė', 150);
zveris1.bebras('Bebras Sigis');
 
const zveris2 = new Zveris('Ąžuolynas', 200);
zveris2.briedis('Briedis Valius');

// klase raso giedre


class Bebras extends Miskas {
 
    constructor(pavadinimas, plotas, vardas) {
        super(pavadinimas, plotas);
        this.vardas = vardas;
    }
 
    gyvena() {
        console.log(`${this.vardas} gyvena ${this.pavadinimas} miške, kurio plotas yra ${this.plotas} ha.`);
    }
 
}
 
class Briedis extends Miskas {
 
    constructor(pavadinimas, plotas, vardas) {
        super(pavadinimas, plotas);
        this.vardas = vardas;
    }
 
    gyvena() {
        console.log(`${this.vardas} gyvena ${this.pavadinimas} miške, kurio plotas yra ${this.plotas} ha.`);
    }
}
 
const bebras = new Bebras('Giraitė', 150, 'Bebras Pkakas');
bebras.gyvena();
 
const briedis = new Briedis('Ąžuolynas', 200, 'Briedis Pakas');
briedis.gyvena();
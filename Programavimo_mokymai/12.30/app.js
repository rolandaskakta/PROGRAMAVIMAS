console.log('oop')

class car {
    constructor(brand, year){
        this.brand = brand ;
        this.year = year;
    }

    getInfo() {
        return `${this.brand} ${this.year}`;
    }

}
const audi = new car('Audi', 2020);

console.log(audi.getInfo());



class BankAccount {
    constructor () {
        this.balansas = 0;
        this.istorija = [];
    }

    idetiPinigu(amount) {
        this.balansas += amount;
        this.istorija.push(`+${amount}`);
        
    }
    isimtiPinigu(amount){
        if(this.balansas > amount){
        this.balansas -= amount;
         this.istorija.push(`-${amount}`);
        } else {
            // this.istorija.push(`NEPAVYKO: -${amount} (nepakankamas likutis)`)
            throw new Error('Nepakankamas likutis');
        }
    }
    gautiBalansa() {
        return this.balansas;
    }
    gautiIstorija() {
        return this.istorija;
    }
}

const saskaita = new BankAccount();

saskaita.idetiPinigu(100);
saskaita.idetiPinigu(150);
saskaita.isimtiPinigu(70);
saskaita.idetiPinigu(750);
saskaita.isimtiPinigu(500);
saskaita.isimtiPinigu(100);


console.log( saskaita.gautiBalansa());
console.log(saskaita.gautiIstorija());

class Studentas {
    constructor(vardas, metai) {
        this.vardas = vardas;
        this.metai = metai;
        this.pazymiai = [];
    }
}

let Petras = new Studentas('Petras', 2007);

console.log(Petras)
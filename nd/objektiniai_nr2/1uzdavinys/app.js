
//Sukurti klasę Marsas. Sukurti statinį metodą pridetiPalydovą(), 
// kuris sukuria naują Marsas objektą, turintį dvi savybes id: rand 100000 - 999999 
// ir pavadinimas: pagal taisyklę iškvietus pirmą kartą “Deimas”, antrą kartą “Fobas”.
//  Metodas grąžina Marsas objektą. Metodą iškvietus trečią, ketvirtą ir t.t. kartus,
//  metodas turi nekurti daugiau naujų Marsas objektų, o grąžinti atsitiktine tvarka,
//  vieną iš dviejų jau sukurtų Marsas objektų. Tarkim penkis kartus iškvietus metodą,
//  turime matyti tik du skirtingus objektus (žiūrim pagal id).

class Marsas {
    static palydovai = [];
    static pavadinimai = ['Deimas', 'Fobas'];

    constructor(id, pavadinimas) {
        this.id = id;
        this.pavadinimas = pavadinimas;
    }

    static pridetiPalydova() {
        if (this.palydovai.length < 2) {
            const id = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
            const pavadinimas = this.pavadinimai[this.palydovai.length];

            const naujas = new Marsas(id, pavadinimas);
            this.palydovai.push(naujas);

            return naujas;
        }

        const randomIndex = Math.floor(Math.random() * 2);
        return this.palydovai[randomIndex];
    }
}

const pirmas = Marsas.pridetiPalydova();
const antras = Marsas.pridetiPalydova();
const trecias = Marsas.pridetiPalydova();
const ketvirtas = Marsas.pridetiPalydova();
const penktas = Marsas.pridetiPalydova();
const sestas = Marsas.pridetiPalydova();
const septintas = Marsas.pridetiPalydova();

console.log(pirmas);
console.log(antras);
console.log(trecias);
console.log(ketvirtas);
console.log(penktas);
console.log(sestas);
console.log(septintas);

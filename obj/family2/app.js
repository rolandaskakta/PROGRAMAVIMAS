console.log('oop')

class Box {

    getColor() {
        return 'red';
    }

    getWeight() {
        return 20;
    }

}


class Ball extends Box {

    getColor() {
        return 'blue';
    }

    getMaterial() {
        return 'plastic';
    }

}

const ball1 = new Ball();
console.log(ball1.getMaterial());
console.log(ball1.getColor());
console.log(ball1.getWeight());






class OldMan65 {

    static sidabras = '25kg';

    #auksas = '5kg';

    constructor() {
        console.log('Man 65', this.#auksas);
        this.pinigai = 10000;
    }
    getSocial() {
        return 'Facebook'
    }

    getHouse() {
        return 'Big';
    }
    getGold() {
        return this.#auksas;
    }
}

class Man40 extends OldMan65 {

    static sidabras = '15kg';
    constructor() {
        super(); // jeigu vaikinej klasej yra konstruktorius jis turi tureti pasikreipima i tevo konstruktoriu
        console.log('Man 40')
    }

    getSocial() {
        return 'Instagram'
    }
}

class YoungMan18 extends Man40 {
    constructor() {
        super(); // jeigu vaikinej klasej yra konstruktorius jis turi tureti pasikreipima i tevo konstruktoriu
        console.log('Man 18')
    }
    getSocial() {
        return 'TikTok'
    }
}

const man65 = new OldMan65();
const man40 = new Man40();
const man18 = new YoungMan18();

console.log(man65.getSocial());
console.log(man40.getSocial());
console.log(man18.getSocial());
console.log(man18.getHouse());

console.log(man18.pinigai);
console.log(man18.getGold());


console.log(OldMan65.sidabras);
console.log(YoungMan18.sidabras);
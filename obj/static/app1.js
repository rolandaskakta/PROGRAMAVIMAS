class Kisene {

    static viso = 0;
    static pridetiBendra(kiek) {
        this.viso += kiek
    }

    constructor() {
        this.yra =0;
    }
    prideti(kiek) {
        this.yra += kiek;
       this.constructor.viso += kiek;
    }
    isimti(kiek) {
        this.yra -= kiek;
       this.constructor.viso -= kiek;
    }
}

const k1 = new Kisene();
const k2 = new Kisene();

k1.prideti(5);
k2.prideti(2);

k1.isimti(4);

const k3 = new Kisene();
k3.prideti(1);

console.log(k1, k2, k3,);

console.log('kiseneje yra viso ', Kisene.viso);


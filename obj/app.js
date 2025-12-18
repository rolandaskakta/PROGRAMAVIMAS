console.log('OOP')

class Bebras {
    // instrukcija objekto gamybai

    // metodas (funkcija) kuri AUTOMATISKAI pasileidzia objekto kurimo metu
    constructor(metai) {
        console.log('KONSTRUOJAM')
        this.bebroMetai = metai; //this === b1, kita kart this === b2, dar kita kart this ===b3,

        // this nuoroda i dar neegzistuojanti objekta 'TAS'
    }
    kiekMetu() {
        console.log('Bebrui yra: ' + this.bebroMetai + 'metu')
    }
}



// gaminam objekta pagal instrukcija
const b1 = new Bebras(10);

// b1 yra objektas pagamintas pagal Bebras klases instrukcijas

console.log(b1);

// galim tokiu prisigaminti daug

const b2 = new Bebras(12);
const b3 = new Bebras(16);

console.log(b2,b3);
b2.kiekMetu();
b3.kiekMetu();
b1.kiekMetu();

//

class Namas {
constructor(kamb, kami) {
    this.kambariai = kamb;
    this.kaminai = kami;
    // this.kamIrKami = kamb * kami;
}
kamIrKami(){ 
    const sandauga = this.kambariai * this.kaminai;


}
}

const n1 = new Namas(4, 1);
const n2 = new Namas(7, 3);
const n3 = new Namas(2, 0);

console.log(n1, n2, n3)

console.log(n2, )

n2.kamIrKami();

// parasyti metoda kuris atspausdina kaminu ir kambariu sandauga



console.log('OOP')

class Bebras {
    // instrukcija objekto gamybai

    // metodas (funkcija) kuri AUTOMATISKAI pasileidzia objekto kurimo metu
    constructor() {
        console.log('KONSTRUOJAM')
        this.bebroMetai = 12;
    }
}


// gaminam objekta pagal instrukcija
const b1 = new Bebras();

// b1 yra objektas pagamintas pagal Bebras klases instrukcijas

console.log(b1);

// galim tokiu prisigaminti daug

const b2 = new Bebras();
const b3 = new Bebras();

console.log(b2,b3);

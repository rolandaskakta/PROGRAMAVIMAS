
class Buttons {

    constructor() {
        this.buttons = document.querySelectorAll('button');
        this.h1 = document.querySelector('h1');
        this.addEventToButton1();
        this.addEventToButton2();
        this.addEventToButton3();
    }
    addEventToButton1() {
        this.buttons[0].addEventListener('click', _ => {
            this.h1.textContent = 'Miau blet!';
        });
    }
    addEventToButton2() {
        // Regular function
        this.buttons[1].addEventListener('click', _ => {
            this.h1.textContent = 'Muuuu blet!';
        });
    }
    addEventToButton3() {
        // Regular function turi savo "this"
        this.buttons[2].addEventListener('click', function () {
            console.log(this);
            this.h1.textContent = 'Roar!';
            // Čia "this" nurodo į mygtuką, ant kurio paspausta.
            // Kadangi mums reikia "this" iš Buttons klasės,
            // naudojame bind(this), kuris priskiria "this" reikšmę iš Buttons klasės.
        }.bind(this));
    }


}

new Buttons(); // paleidziam klase buttons
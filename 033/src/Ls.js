import {v4 as uuidV4 } from 'uuid';

class Ls {
    
    constructor(key) {
        this.key = key; // prisimenam key
        this.readLocalStorage(); // paleidziam metoda readlocalstorage
    }


    readLocalStorage = _ => {
        let data = localStorage.getItem(this.key);
        if (null === data) {
            this.list = [];
        } else {
            this.list = JSON.parse(data);
        }
    }

    writeLocalStorage = _ => {
        let data = JSON.stringify(this.list);
        localStorage.setItem(this.key, data);
    }

    //* CRUD Code**//


    /* STORE vykdo naujo "daikto" irasyma i saugykla
    turi gauti "daikta"
    turi "daiktui" priskirti ID ir irasyti i saugykla
    */

    Store = data => {
        // const id = rand(10000000, 999999999); //netikras unikalus numeris
        const id = uuidV4();
        const dataToStore = {
            ...data,
            id,

        }
        this.list.unshift(dataToStore);
        this.writeLocalStorage();
       
    }

    /* 
    Destroy ivykdo daikto pasalinima is saugyklos
    turi gauti "daikto" identifikatoriu
    turi pasalinti daikta su nurodytu identifikatorium
    */

    Destroy = id => {
        this.list = this.list.filter(item => item.id != id); // ismetam kvadratuka
         this.writeLocalStorage();
       
    }


    /**
     * Update vykdo redaguoto "daikto" saugojima saugykloje
     * turi gauti "daikto" identifikatoriu ir daikto naujas savybes
     * turi persaugoti daikta su nurodytu identifikatoriu ir naujom savybem
     */
    Update = (id, data) => {
        this.list = this.list.map(item => item.id == id ? { ...item, ...data, id } : item);
         this.writeLocalStorage();
       
    };
}

export default Ls;// iseksportuojam
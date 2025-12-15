console.log('CRUD');

/* 
Naujo pridejimas

Create - vaizdas
Store - veiksmas

*/

let LIST;
const KEY = 'myFAncyColorsList';

const init = _ => {
    readLocalStorage();
    render();
    const createInput = document.querySelector('[data-create-color-input]');
    const createButton = document.querySelector('[data-create-color-button]');
    createButton.addEventListener('click', _ => {
        const color = createInput.value;
        Store(color);
    })
}


const readLocalStorage = _ => {
    let data = localStorage.getItem(KEY);
    if (null === data) {
        LIST = [];
    } else {
        LIST = JSON.parse(data);
    }
}

const writeLocalStorage = _ => {
    let data = JSON.stringify(LIST);
    localStorage.setItem(KEY, data);
}


const rand = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
}

const render = _ => {
    const listBin = document.querySelector('[data-colors-list]');
    const listRowTemplate = document.querySelector('[data-list-template]');
    listBin.innerHTML = '';
    LIST.forEach(colorItem => {
        const rowHtml = listRowTemplate.content.cloneNode(true);
        const colorSq = rowHtml.querySelector('[data-color-sq]');


        //******DELETE */


        const deleteButtton = rowHtml.querySelector('[data-delete-sq]');

        //colorItem.id sugeneruotas store metode id
        // dataset.id i elementa prideda atributa 'data-id'
        // dataset.id = coloritem.id // atributui priskiria reiksme data-id="1654646"
        deleteButtton.dataset.id = colorItem.id;

        deleteButtton.addEventListener('click', e => {

            // e - eventas
            // e.target is evento gautas paspaustas mygtuko elementas
            // e.target.dataset - kreipimasis i elemento "data-" atributus
            // e.target.dataset.id - kreipimasis i atributa "data-id"

            const id = parseInt(e.target.dataset.id);
            Destroy(id);
        });

        //****EDIT */
        const editInput = rowHtml.querySelector('[data-edit-color-input]');
        const editButton = rowHtml.querySelector('[data-edit-color-button]');

        editInput.value = colorItem.color; // senu duomenu perrasymas i edit forma
        editButton.dataset.id = colorItem.id;
        editButton.addEventListener('click', e => {
            const id = parseInt(e.target.dataset.id);
            const color = editInput.value;

            Update(id, color);


        })



        colorSq.style.backgroundColor = colorItem.color + '70'; // + permatomumo skaicius
        colorSq.style.borderColor = colorItem.color;

        listBin.appendChild(rowHtml);


    });
}




/* STORE vykdo naujo "daikto" irasyma i saugykla
turi gauti "daikta"
turi "daiktui" priskirti ID ir irasyti i saugykla
*/

const Store = data => {
    const id = rand(10000000, 999999999); //netikras unikalus numeris
    dataToStore = {
        id, // supaprastintas id: id,
        color: data
    }
    LIST.unshift(dataToStore);
    writeLocalStorage();
    render();
}

/* 
Destroy ivykdo daikto pasalinima is saugyklos
turi gauti "daikto" identifikatoriu
turi pasalinti daikta su nurodytu identifikatorium
*/

const Destroy = id => {
    LIST = LIST.filter(color => color.id != id); // ismetam kvadratuka
    writeLocalStorage();
    render();
}


/**
 * Update vykdo redaguoto "daikto" saugojima saugykloje
 * turi gauti "daikto" identifikatoriu ir daikto naujas savybes
 * turi persaugoti daikta su nurodytu identifikatoriu ir naujom savybem
 */
const Update = (id, data) => {
    LIST = LIST.map(item => item.id == id ? {...item, color: data} : item);
    writeLocalStorage();
    render();
};


init(); // inicijuojam/paleidziam funkcija
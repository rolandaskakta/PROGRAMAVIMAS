import Ls from './Ls.js';
console.log('CRUD');

/* 
Naujo pridejimas

Create - vaizdas
Store - veiksmas

*/

let LS; // klases Ls objektas (bus)

const init = _ => {
    LS = new Ls('myFAncyColorsList'); // LS/list jau atsiranda kvadratukai spalvu
    render(LS.list);
    const createInput = document.querySelector('[data-create-color-input]');
    const createButton = document.querySelector('[data-create-color-button]');
    createButton.addEventListener('click', _ => {
        const color = createInput.value;
        const dataToStore ={
            color
        }
        LS.Store(dataToStore);
        render(LS.list);
    })
}

const render = list => {
    const listBin = document.querySelector('[data-colors-list]');
    const listRowTemplate = document.querySelector('[data-list-template]');
    listBin.innerHTML = '';
    list.forEach(colorItem => {
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

        
            const id = e.target.dataset.id;
            LS.Destroy(id);
            render(LS.list);

        });

        //****EDIT */
        const editInput = rowHtml.querySelector('[data-edit-color-input]');
        const editButton = rowHtml.querySelector('[data-edit-color-button]');

        editInput.value = colorItem.color; // senu duomenu perrasymas i edit forma
        editButton.dataset.id = colorItem.id;
        editButton.addEventListener('click', e => {
            const id = e.target.dataset.id;
            const color = editInput.value;

            const dataToUpdate = {
                color
            }

            LS.Update(id, dataToUpdate);
            render(LS.list);

        })

        colorSq.style.backgroundColor = colorItem.color + '70'; // + permatomumo skaicius
        colorSq.style.borderColor = colorItem.color;

        listBin.appendChild(rowHtml);

    });
}

init(); // inicijuojam/paleidziam funkcija
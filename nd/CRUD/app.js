/*Ganykla. Turim trijų rūšių gyvulius: avis, antis ir antilopes. Kiekvienas gyvulys turi savo svorį.
Parašyti localStorage CRUD aplikaciją, kurioje būtų galima pridėti naujus gyvulius su jų svoriais į 
ganyklą, ištrinti iš ganyklos ir redaguoti kiekvieno jų svorį. */


let LIST;
const KEY = 'Ganykla';

const init = _ => {
    readLocalStorage();
    render();
    const createType = document.querySelector('[data-create-type]');
    const createWeight = document.querySelector('[data-create-weight]');
    const createButton = document.querySelector('[data-create-button]');

    createButton.addEventListener('click', _ => {
        const type = createType.value;
        const weight = Number(createWeight.value);
        Store(type, weight);
    });
};


const readLocalStorage = _ => {
    const data = localStorage.getItem(KEY);
    LIST = data === null ? [] : JSON.parse(data);
};

const writeLocalStorage = _ => {
    localStorage.setItem(KEY, JSON.stringify(LIST));
};


const rand = (min, max) => {
    const minC = Math.ceil(min);
    const maxF = Math.floor(max);
    return Math.floor(Math.random() * (maxF - minC + 1) + minC);
};



const render = _ => {
    const listBin = document.querySelector('[data-animals-list]');
    const template = document.querySelector('[data-list-template]');

    listBin.innerHTML = '';

    LIST.forEach(animal => {
        const rowHtml = template.content.cloneNode(true);

        const typeEl = rowHtml.querySelector('[data-animal-type]');
        const editInput = rowHtml.querySelector('[data-edit-weight]');
        const editButton = rowHtml.querySelector('[data-edit-button]');
        const deleteButton = rowHtml.querySelector('[data-delete-button]');

        typeEl.textContent = animal.type;
        editInput.value = animal.weight;

        
        deleteButton.dataset.id = animal.id;
        deleteButton.addEventListener('click', e => {
            const id = parseInt(e.target.dataset.id);
            Destroy(id);
        });

        
        editButton.dataset.id = animal.id;
        editButton.addEventListener('click', e => {
            const id = parseInt(e.target.dataset.id);
            const weight = Number(editInput.value);
            Update(id, weight);
        });

        listBin.appendChild(rowHtml);
    });
};


const Store = (type, weight) => {
    const id = rand(10000000, 999999999);

    const dataToStore = {
        id,
        type,
        weight
    };

    LIST.unshift(dataToStore);
    writeLocalStorage();
    render();
};


const Destroy = id => {
    LIST = LIST.filter(animal => animal.id != id);
    writeLocalStorage();
    render();
};


const Update = (id, weight) => {
    LIST = LIST.map(animal =>
        animal.id == id ? { ...animal, weight } : animal
    );
    writeLocalStorage();
    render();
};

init();
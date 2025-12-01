console.log('Labas Apiau')

// fetch('https://in3.dev/inv/')
//     .then(response => response.json())
//     .then(json => console.log(json));



// turiu objekta

const namas = {
    kaminas: true,
    kambariai: 5,
    adresas: 'Pievos g. 15'
};

// reikia perduoti per interneta , todel reikia versti i  stringa


const objektasKaipStringas = JSON.stringify(namas);

console.log(namas);
console.log(objektasKaipStringas);

// perduodam 

// reikia vel atversti i objekta

const velNamas = JSON.parse(objektasKaipStringas);

console.log(velNamas)






const usersUl = document.querySelector('#users-container');

const printUserList = users => {

    users.forEach(user => {
        const li = document.createElement('li'); //tuscias li elementas
        const userName = user.name; // paimu is strukturos name
        const phrase = user.company.catchPhrase;
        const id = user.id;
        const idVat = id * 21 / 100;
        li.innerText = userName + ' ' + phrase;// i li idedu paimta name
        usersUl.appendChild(li);
        li.classList.add('user');
        const liVat = document.createElement('li'); //tuscias li elementas
        liVat.innerText = idVat;
        usersUl.appendChild(liVat);
    });
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        console.log(users);
        printUserList(users);



    });
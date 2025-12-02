console.log('Veikia');

// fetch('https://in3.dev/inv/') // siunčia užklausa
//     .then(res => res.json()) // laukiam tada JSON gautą rezultatą
//     .then(inv => console.log(inv)); // kai yra JSON tada loginam

// const saskNr = document.querySelector('#saskaitos-numeris');

//     const saskaitosNumeris = inv => {
//         inv.forEach(numeris =>{
//             const saskNum = inv.number;
//             saskNr.innerText = saskNum;



//         });
//     }

fetch('https://in3.dev/inv/')
    .then(res => res.json())
    .then(inv => {
        saskaita(inv);
        console.log(inv);
    });

// const saskNr = document.querySelector('#saskaitos-numeris');
// const saskData = document.querySelector('#israsymo-data');
// const saskApmokejimas = document.querySelector('#apmoketi-iki');
// ////---------PIRKEJAS////////////
// const pirkejoAdresas = document.querySelector('#pirkejo-adresas');
// const pirkejoKodas = document.querySelector('#pirkejo-kodas');
// const pirkejoPastas = document.querySelector('#pirkejo-pastas');
// const pirkejoPavadinimas = document.querySelector('#pirkejo-pavadinimas');
// const pirkejoTelefonas = document.querySelector('#pirkejo-telefonas');
// const pirkejoPvm = document.querySelector('#pirkejo-pvm');
// ////--------PARDAVEJAS////////
// const pardavejoAdresas = document.querySelector('#pardavejo-adresas');
// const pardavejoKodas = document.querySelector('#pardavejo-kodas');
// const pardavejoPastas = document.querySelector('#pardavejo-pastas');
// const pardavejoPavadinimas = document.querySelector('#pardavejo-pavadinimas');
// const pardavejoTelefonas = document.querySelector('#pardavejo-telefonas');
// const pardavejoPvm = document.querySelector('#pardavejo-pvm');

// const lentele = document.querySelector('#krepselis');
// // const prekes = inv.items;





// const saskaita = inv => {
//     saskNr.innerText = inv.number;
//     saskData.innerText = inv.date;
//     saskApmokejimas.innerText = inv.due_date;
//     /////------------PIRKEJAS////////
//     pirkejoAdresas.innerText = inv.company.buyer.address;
//     pirkejoKodas.innerText = inv.company.buyer.code;
//     pirkejoPastas.innerText = inv.company.buyer.email;
//     pirkejoPavadinimas.innerText = inv.company.buyer.name;
//     pirkejoTelefonas.innerText = inv.company.buyer.phone;
//     pirkejoPvm.innerText = inv.company.buyer.vat;
//     /////--------------PARDAVEJAS/////
//     pardavejoAdresas.innerText = inv.company.seller.address;
//     pardavejoKodas.innerText = inv.company.seller.code;
//     pardavejoPastas.innerText = inv.company.seller.email;
//     pardavejoPavadinimas.innerText = inv.company.seller.name;
//     pardavejoTelefonas.innerText = inv.company.seller.phone;
//     pardavejoPvm.innerText = inv.company.seller.vat;


//     ////---------------------------////
//     const container = document.querySelector('#krepselis');

//     const items = inv.items;
//     // if (!items || items.length === 0) {
//     //     container.innerText = 'Prekių nėra';
//     //     return;
//     // }

//     // Sukuriam lentelę
//     const table = document.createElement('table');


//     // Antraštė
//     const thead = document.createElement('thead');
//     const headerRow = document.createElement('tr');

//     ['Prekės pavadinimas', 'Kiekis', 'Kaina', 'Nuolaida', 'Suma'].forEach(text => {
//         const th = document.createElement('th');
//         th.innerText = text;
//         headerRow.appendChild(th);
//     });

//     thead.appendChild(headerRow);
//     table.appendChild(thead);

//     // Kūnas
//     const tbody = document.createElement('tbody');

//     items.forEach(item => {
//     const tr = document.createElement('tr');

//     // Prekės pavadinimas
//     const tdTitle = document.createElement('td');
//     tdTitle.innerText = item.description;
//     tr.appendChild(tdTitle);

//     // Kiekis
//     const qty = item.quantity; 
//     const tdQty = document.createElement('td');
//     tdQty.innerText = qty;
//     tr.appendChild(tdQty);


//     // Kaina
//     const price = item.price;
//     const tdPrice = document.createElement('td');
//     tdPrice.innerText = price.toFixed(2) + ' €';
//     tr.appendChild(tdPrice);

//     let discountAmount = 0;
//     if (item.discount && Object.keys(item.discount).length) {
//         if (item.discount.type === 'percentage') {
//             discountAmount = (price * qty) * (item.discount.value / 100);
//         } else if (item.discount.type === 'fixed') {
//             discountAmount = item.discount.value; // fiksuota nuolaida per visą prekės kiekį
//         }
//     }

//     // Galutinė suma = (kaina * kiekis) - nuolaida
//     const sum = (price * qty) - discountAmount;
//     const tdSum = document.createElement('td');
//     tdSum.innerText = sum.toFixed(2) + ' €';
//     tr.appendChild(tdSum);

//     tbody.appendChild(tr);

//     // Pridedame pristatymo kainą į atskirą eilutę po prekėmis
// const shippingRow = document.createElement('tr');

// // Tuščias td - kad sutaptų su lentelės stulpeliais
// for(let i = 0; i < 3; i++) {
//     const emptyTd = document.createElement('td');
//     shippingRow.appendChild(emptyTd);
// }

// const tdShippingLabel = document.createElement('td');
// tdShippingLabel.innerText = 'Pristatymas:';
// shippingRow.appendChild(tdShippingLabel);

// const tdShippingPrice = document.createElement('td');
// tdShippingPrice.innerText = (inv.shippingPrice || 0).toFixed(2) + ' €';
// shippingRow.appendChild(tdShippingPrice);

// tbody.appendChild(shippingRow);
// });

//     table.appendChild(tbody);
//     container.appendChild(table);
// };
/////--------------------------2 variantas
// const saskNr = document.querySelector('#saskaitos-numeris');
// const saskData = document.querySelector('#israsymo-data');
// const saskApmokejimas = document.querySelector('#apmoketi-iki');

// // PIRKEJAS
// const pirkejoAdresas = document.querySelector('#pirkejo-adresas');
// const pirkejoKodas = document.querySelector('#pirkejo-kodas');
// const pirkejoPastas = document.querySelector('#pirkejo-pastas');
// const pirkejoPavadinimas = document.querySelector('#pirkejo-pavadinimas');
// const pirkejoTelefonas = document.querySelector('#pirkejo-telefonas');
// const pirkejoPvm = document.querySelector('#pirkejo-pvm');

// // PARDAVEJAS
// const pardavejoAdresas = document.querySelector('#pardavejo-adresas');
// const pardavejoKodas = document.querySelector('#pardavejo-kodas');
// const pardavejoPastas = document.querySelector('#pardavejo-pastas');
// const pardavejoPavadinimas = document.querySelector('#pardavejo-pavadinimas');
// const pardavejoTelefonas = document.querySelector('#pardavejo-telefonas');
// const pardavejoPvm = document.querySelector('#pardavejo-pvm');

// const container = document.querySelector('#krepselis');

// function saskaita(inv) {
//     // Sąskaitos duomenys
//     saskNr.innerText = inv.number;
//     saskData.innerText = inv.date;
//     saskApmokejimas.innerText = inv.due_date;

//     // Pirkėjo duomenys
//     pirkejoAdresas.innerText = inv.company.buyer.address;
//     pirkejoKodas.innerText = inv.company.buyer.code;
//     pirkejoPastas.innerText = inv.company.buyer.email;
//     pirkejoPavadinimas.innerText = inv.company.buyer.name;
//     pirkejoTelefonas.innerText = inv.company.buyer.phone;
//     pirkejoPvm.innerText = inv.company.buyer.vat;

//     // Pardavėjo duomenys
//     pardavejoAdresas.innerText = inv.company.seller.address;
//     pardavejoKodas.innerText = inv.company.seller.code;
//     pardavejoPastas.innerText = inv.company.seller.email;
//     pardavejoPavadinimas.innerText = inv.company.seller.name;
//     pardavejoTelefonas.innerText = inv.company.seller.phone;
//     pardavejoPvm.innerText = inv.company.seller.vat;

//     // Išvalom seną turinį
//     container.innerHTML = '';

//     const items = inv.items;

//     if (!items || items.length === 0) {
//         container.innerText = 'Prekių nėra';
//         return;
//     }

//     // Sukuriam lentelę
//     const table = document.createElement('table');
//     table.style.width = '100%';
//     table.style.borderCollapse = 'collapse';
//     table.style.marginTop = '20px';

//     // Antraštė
//     const thead = document.createElement('thead');
//     const headerRow = document.createElement('tr');

//     ['Prekės pavadinimas', 'Kiekis', 'Kaina', 'Nuolaida', 'Suma'].forEach(text => {
//         const th = document.createElement('th');
//         th.innerText = text;
//         th.style.border = '1px solid #000';
//         th.style.padding = '8px';
//         headerRow.appendChild(th);
//     });

//     thead.appendChild(headerRow);
//     table.appendChild(thead);

//     // Kūnas
//     const tbody = document.createElement('tbody');

//     items.forEach(item => {
//         const tr = document.createElement('tr');

//         // Prekės pavadinimas
//         const tdTitle = document.createElement('td');
//         tdTitle.innerText = item.description || 'Be pavadinimo';
//         tdTitle.style.border = '1px solid #000';
//         tdTitle.style.padding = '8px';
//         tr.appendChild(tdTitle);

//         // Kiekis
//         const qty = item.quantity || 1;
//         const tdQty = document.createElement('td');
//         tdQty.innerText = qty;
//         tdQty.style.border = '1px solid #000';
//         tdQty.style.padding = '8px';
//         tr.appendChild(tdQty);

//         // Kaina
//         const price = item.price || 0;
//         const tdPrice = document.createElement('td');
//         tdPrice.innerText = price.toFixed(2) + ' €';
//         tdPrice.style.border = '1px solid #000';
//         tdPrice.style.padding = '8px';
//         tr.appendChild(tdPrice);

//         // Nuolaida
//         let discountAmount = 0;
//         let discountText = '-';

//         if (item.discount && Object.keys(item.discount).length) {
//             if (item.discount.type === 'percentage') {
//                 discountAmount = (price * qty) * (item.discount.value / 100);
//                 discountText = item.discount.value + '%';
//             } else if (item.discount.type === 'fixed') {
//                 discountAmount = item.discount.value;
//                 discountText = item.discount.value.toFixed(2) + ' €';
//             }
//         }

//         const tdDiscount = document.createElement('td');
//         tdDiscount.innerText = discountText;
//         tdDiscount.style.border = '1px solid #000';
//         tdDiscount.style.padding = '8px';
//         tr.appendChild(tdDiscount);

//         // Suma (kaina * kiekis - nuolaida)
//         const sum = (price * qty) - discountAmount;
//         const tdSum = document.createElement('td');
//         tdSum.innerText = sum.toFixed(2) + ' €';
//         tdSum.style.border = '1px solid #000';
//         tdSum.style.padding = '8px';
//         tr.appendChild(tdSum);

//         tbody.appendChild(tr);
//     });

//     // Pristatymo kaina
//     const shippingRow = document.createElement('tr');

//     // Pirmi keturi tušti langeliai
//     for (let i = 0; i < 4; i++) {
//         const emptyTd = document.createElement('td');
//         emptyTd.style.border = '1px solid #000';
//         emptyTd.style.padding = '8px';
//         shippingRow.appendChild(emptyTd);
//     }

//     const tdShippingLabel = document.createElement('td');
//     tdShippingLabel.innerText = 'Pristatymas:';
//     tdShippingLabel.style.border = '1px solid #000';
//     tdShippingLabel.style.padding = '8px';
//     shippingRow.appendChild(tdShippingLabel);

//     const tdShippingPrice = document.createElement('td');
//     tdShippingPrice.innerText = (inv.shippingPrice || 0).toFixed(2) + ' €';
//     tdShippingPrice.style.border = '1px solid #000';
//     tdShippingPrice.style.padding = '8px';
//     shippingRow.appendChild(tdShippingPrice);

//     tbody.appendChild(shippingRow);

//     table.appendChild(tbody);
//     container.appendChild(table);

//////----------------trrecias variantas

const saskNr = document.querySelector('#saskaitos-numeris');
const saskData = document.querySelector('#israsymo-data');
const saskApmokejimas = document.querySelector('#apmoketi-iki');

// PIRKEJAS
const pirkejoAdresas = document.querySelector('#pirkejo-adresas');
const pirkejoKodas = document.querySelector('#pirkejo-kodas');
const pirkejoPastas = document.querySelector('#pirkejo-pastas');
const pirkejoPavadinimas = document.querySelector('#pirkejo-pavadinimas');
const pirkejoTelefonas = document.querySelector('#pirkejo-telefonas');
const pirkejoPvm = document.querySelector('#pirkejo-pvm');

// PARDAVEJAS
const pardavejoAdresas = document.querySelector('#pardavejo-adresas');
const pardavejoKodas = document.querySelector('#pardavejo-kodas');
const pardavejoPastas = document.querySelector('#pardavejo-pastas');
const pardavejoPavadinimas = document.querySelector('#pardavejo-pavadinimas');
const pardavejoTelefonas = document.querySelector('#pardavejo-telefonas');
const pardavejoPvm = document.querySelector('#pardavejo-pvm');

const container = document.querySelector('#krepselis');

function saskaita(inv) {
    saskNr.innerText = inv.number;
    saskData.innerText = inv.date;
    saskApmokejimas.innerText = inv.due_date;

    pirkejoAdresas.innerText = inv.company.buyer.address;
    pirkejoKodas.innerText = inv.company.buyer.code;
    pirkejoPastas.innerText = inv.company.buyer.email;
    pirkejoPavadinimas.innerText = inv.company.buyer.name;
    pirkejoTelefonas.innerText = inv.company.buyer.phone;
    pirkejoPvm.innerText = inv.company.buyer.vat;

    pardavejoAdresas.innerText = inv.company.seller.address;
    pardavejoKodas.innerText = inv.company.seller.code;
    pardavejoPastas.innerText = inv.company.seller.email;
    pardavejoPavadinimas.innerText = inv.company.seller.name;
    pardavejoTelefonas.innerText = inv.company.seller.phone;
    pardavejoPvm.innerText = inv.company.seller.vat;

    container.innerHTML = '';

    const items = inv.items;

    if (!items || items.length === 0) {
        container.innerText = 'Prekių nėra';
        return;
    }

    const table = document.createElement('table');
    table.classList.add('krepselio-lentele');

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    ['Prekės pavadinimas', 'Kiekis', 'Kaina', 'Nuolaida', 'Suma'].forEach(text => {
        const th = document.createElement('th');
        th.innerText = text;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    items.forEach(item => {
        const tr = document.createElement('tr');

        const tdTitle = document.createElement('td');
        tdTitle.innerText = item.description || 'Be pavadinimo';
        tr.appendChild(tdTitle);

        const qty = item.quantity || 1;
        const tdQty = document.createElement('td');
        tdQty.innerText = qty;
        tr.appendChild(tdQty);

        const price = item.price || 0;
        const tdPrice = document.createElement('td');
        tdPrice.innerText = price.toFixed(2) + ' €';
        tr.appendChild(tdPrice);

        let discountAmount = 0;
        let discountText = '-';

        if (item.discount && Object.keys(item.discount).length) {
            if (item.discount.type === 'percentage') {
                discountAmount = (price * qty) * (item.discount.value / 100);
                discountText = '-' + item.discount.value + '%' + '\n' + discountAmount.toFixed(2) + ' €';
            } else if (item.discount.type === 'fixed') {
                discountAmount = item.discount.value;
                discountText =  '-' +  item.discount.value.toFixed(2) + ' €';
            }
        }

        const tdDiscount = document.createElement('td');
        tdDiscount.innerText = discountText;
        tr.appendChild(tdDiscount);

        const sum = (price * qty) - discountAmount;
        const tdSum = document.createElement('td');
        tdSum.innerText = sum.toFixed(2) + ' €';
        tr.appendChild(tdSum);

        tbody.appendChild(tr);
    });

    // Pristatymo eilutė
    const shippingRow = document.createElement('tr');

    const tdShippingLabel = document.createElement('td');
    tdShippingLabel.innerText = 'Pristatymas:';
    tdShippingLabel.colSpan = 4; // sujungiame pirmus 4 stulpelius į vieną
    shippingRow.appendChild(tdShippingLabel);

    const tdShippingPrice = document.createElement('td');
    tdShippingPrice.innerText = (inv.shippingPrice || 0).toFixed(2) + ' €';
    shippingRow.appendChild(tdShippingPrice);

    tbody.appendChild(shippingRow);

    table.appendChild(tbody);
    container.appendChild(table);
}

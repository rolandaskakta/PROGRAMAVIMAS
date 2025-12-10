
fetch('https://in3.dev/inv/')
    .then(res => res.json())
    .then(inv => {
        saskaita(inv);
        console.log(inv);
    });



const saskNr = document.querySelector('#saskaitos-numeris');
const saskData = document.querySelector('#israsymo-data');
const saskApmokejimas = document.querySelector('#apmoketi-iki');

const pirkejoAdresas = document.querySelector('#pirkejo-adresas');
const pirkejoKodas = document.querySelector('#pirkejo-kodas');
const pirkejoPastas = document.querySelector('#pirkejo-pastas');
const pirkejoPavadinimas = document.querySelector('#pirkejo-pavadinimas');
const pirkejoTelefonas = document.querySelector('#pirkejo-telefonas');
const pirkejoPvm = document.querySelector('#pirkejo-pvm');

const pardavejoAdresas = document.querySelector('#pardavejo-adresas');
const pardavejoKodas = document.querySelector('#pardavejo-kodas');
const pardavejoPastas = document.querySelector('#pardavejo-pastas');
const pardavejoPavadinimas = document.querySelector('#pardavejo-pavadinimas');
const pardavejoTelefonas = document.querySelector('#pardavejo-telefonas');
const pardavejoPvm = document.querySelector('#pardavejo-pvm');

const container = document.querySelector('#krepselis');
const sumaBePvmEl = document.querySelector('#suma-be-pvm');
const pvmSumaEl = document.querySelector('#pvm-suma');
const sumaSuPvmEl = document.querySelector('#suma-su-pvm');

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

    const table = document.createElement('table');
    table.classList.add('krepselio-lentele');

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    ['Prekės pavadinimas', 'Kiekis', 'Kaina be PVM', 'Nuolaida', 'Suma'].forEach(text => {
        const th = document.createElement('th');
        th.innerText = text;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    let prekiuViso = 0;

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
                discountText = `-${item.discount.value}%` + '\n' + (discountAmount).toFixed(2) + ' €';
            } else if (item.discount.type === 'fixed') {
                discountAmount = item.discount.value;
                discountText = `-${item.discount.value.toFixed(2)} €`;
            }
        }

        const tdDiscount = document.createElement('td');
        tdDiscount.innerText = discountText;
        tr.appendChild(tdDiscount);

        const sum = (price * qty) - discountAmount;
        const tdSum = document.createElement('td');
        tdSum.innerText = sum.toFixed(2) + ' €';
        tr.appendChild(tdSum);

        prekiuViso += sum;

        tbody.appendChild(tr);
    });

    const shippingRow = document.createElement('tr');

    const tdShippingLabel = document.createElement('td');
    tdShippingLabel.innerText = 'Pristatymas:';
    tdShippingLabel.colSpan = 4;
    shippingRow.appendChild(tdShippingLabel);

    const tdShippingPrice = document.createElement('td');
    tdShippingPrice.innerText = (inv.shippingPrice || 0).toFixed(2) + ' €';
    shippingRow.appendChild(tdShippingPrice);

    tbody.appendChild(shippingRow);

    const galutineSuma = prekiuViso + (inv.shippingPrice || 0);

    const totalRow = document.createElement('tr');

    for (let i = 0; i < 3; i++) {
        const empty = document.createElement('td');
        empty.innerText = '';
        totalRow.appendChild(empty);
    }

    const tdTotalLabel = document.createElement('td');
    tdTotalLabel.innerText = 'Iš viso (be PVM):';
    totalRow.appendChild(tdTotalLabel);

    const tdTotalValue = document.createElement('td');
    tdTotalValue.innerText = galutineSuma.toFixed(2) + ' €';
    totalRow.appendChild(tdTotalValue);

    tbody.appendChild(totalRow);

    const pvm = galutineSuma * 0.21;

    const pvmRow = document.createElement('tr');
    for (let i = 0; i < 3; i++) {
        const empty = document.createElement('td');
        empty.innerText = '';
        pvmRow.appendChild(empty);
    }

    const tdPvmLabel = document.createElement('td');
    tdPvmLabel.innerText = 'PVM (21%):';
    pvmRow.appendChild(tdPvmLabel);

    const tdPvmValue = document.createElement('td');
    tdPvmValue.innerText = pvm.toFixed(2) + ' €';
    pvmRow.appendChild(tdPvmValue);

    tbody.appendChild(pvmRow);

    const sumaSuPvm = galutineSuma + pvm;

    const finalRow = document.createElement('tr');
    for (let i = 0; i < 3; i++) {
        const empty = document.createElement('td');
        empty.innerText = '';
        finalRow.appendChild(empty);
    }

    const tdFinalLabel = document.createElement('td');
    tdFinalLabel.innerText = 'Galutinė suma (su PVM):';
    finalRow.appendChild(tdFinalLabel);

    const tdFinalValue = document.createElement('td');
    tdFinalValue.innerText = sumaSuPvm.toFixed(2) + ' €';
    finalRow.appendChild(tdFinalValue);

    tbody.appendChild(finalRow);

    table.appendChild(tbody);
    container.appendChild(table);

}
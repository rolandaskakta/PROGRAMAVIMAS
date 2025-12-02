console.log('Veikia');
 
fetch('https://in3.dev/inv/') // siunčia užklausa
    .then(res => res.json()) // laukiam tada JSON gautą rezultatą
    .then(inv => console.log(inv)); // kai yra JSON tada loginam
//  const invJson = `{
    
//     "number": "AB-77766092",
//     "date": "2025-12-01",
//     "due_date": "2025-12-12",
//     "company": {
//         "buyer": {
//             "name": "UAB Petrauskas ir Kavaliauskas",
//             "address": "Saltoniškių gatvė 55, Kėdainiai LT-90137",
//             "code": "57797210",
//             "vat": "LT718747187",
//             "phone": "+370 46 30 72 64",
//             "email": "sakalauskas.deimantas@gmail.com"
//         },
//         "seller": {
//             "name": "UAB Pocius ir Pocius",
//             "address": "Saltoniškių alėja 57, Visaginas LT-62739",
//             "code": "09574176",
//             "vat": "LT423872418",
//             "phone": "(8 5) 135 2087",
//             "email": "petrauskiene.zigfrida@yahoo.com"
//         }
//     },
//     "items": [
//         {
//             "description": "Metalinis kavos staliukas Sunkus metalas nikeliuotas",
//             "quantity": 9,
//             "price": 480.99,
//             "discount": []
//         },
//         {
//             "description": "Fotelis su dėžėmis Dramblys su pagalve ir uždengimu",
//             "quantity": 1,
//             "price": 225.99,
//             "discount": []
//         },
//         {
//             "description": "Raudonas odinis fotelis Raudonkepuraitė su pagalve",
//             "quantity": 9,
//             "price": 225.95,
//             "discount": []
//         },
//         {
//             "description": "Stalas Violeta",
//             "quantity": 5,
//             "price": 150.99,
//             "discount": []
//         },
//         {
//             "description": "Mėlynas odinis fotelis Smurf",
//             "quantity": 2,
//             "price": 210,
//             "discount": []
//         }
//     ],
//     "shippingPrice": 71
// }`;
 
// const inv = JSON.parse(invJson);

// console.log(inv)
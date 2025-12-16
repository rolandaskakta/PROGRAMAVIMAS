import { v4 as manoUuid } from 'uuid'; // paima ne default metoda v4 ir pavidinu ji manoUUID

// console.log('Labas ka tu?', 'Labas as gerai', 5*5);


const naujasId = manoUuid();
console.log('Sugeneruotas UUID:', naujasId);
 
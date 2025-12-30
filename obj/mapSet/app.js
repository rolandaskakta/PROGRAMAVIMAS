console.log('mapSet');

const arr = []; // sutrumpintas masyvas
const arr1 = new Array(); // ilgesnis variantas

arr.push('yellow');
arr.push('green');
arr.push('red');

console.log(arr, arr.length);

console.log(arr[2]);


const map = new Map();

map.set('spalva1', 'yellow');
map.set('spalva2', 'green');
map.set('spalva3', 'red');
map.set('spalva2', 'black');
map.set(87, 'skaicius');
map.set({bla: 123}, 'objektas1');
map.set({bla: 123}, 'objektas2');
console.log(map, map.size);
console.log(map.get('spalva2'));


const fancyMap = new Map();
 
fancyMap.set(a => a * 3, 5);
fancyMap.set(a => a * 3, 8);
fancyMap.set(a => a * 10, 5);
fancyMap.set(a => a * 10, 15);
fancyMap.set(a => a / 3, 2);
 

console.log(fancyMap);

fancyMap.forEach((v, f) => console.log(f(v)));

// bandom pasortinti

const arrFromMap = [...map];

console.log(arrFromMap);

arrFromMap.sort((a, b) => a[1].localeCompare(b[1]));
console.log(arrFromMap);
const express = require('express');
const fs = require('fs'); // failų sistemos modulis-biblioteka
const app = express();
const port = 80;
 
 
// Dalis Router
app.get('/', (req, res) => {
 
 res.send('topWithTitle + about + bottom');
});
 
app.get('/about/racoon/green', (req, res) => {
 
 res.send('About page asdasdasd');
});
 
 

// duomenų perdavimas su parametrais
app.get('/racoon/:color', (req, res) => {
    // iš URL paimame spalvos parametrą
    // color yra kintamasis įdėtas į URL vietą
    const racoonColor = req.params.color;
    res.send('<h1 style="color:' + racoonColor + '" ' +'>This racoon is ' + racoonColor + '</h1>');
});


app.get('/url-symbols', (req, res) => {
 
    const symbols = '!--@--#--$--%--^--&';
 
    const encodedSymbols = encodeURIComponent(symbols);
 
    res.send('Original symbols: ' + symbols + '<br>' +
             'Encoded symbols: ' + encodedSymbols + '<br>' +
             'Decoded symbols: ' + decodeURIComponent(encodedSymbols)
    );
 
});

app.get('/kas/:vardas/kiek/:amzius', (req, res) => {
    const vardas = req.params.vardas;
    const amzius = req.params.amzius;
    res.send('Sveikas ' + vardas + '. Tavo amžius yra ' + amzius);
});
 
 
app.get('/kalkuliatorius/:kiekis1/:kiekis2/suma', (req, res) => {
  const kiekis1 = +req.params.kiekis1;
  const kiekis2 = +req.params.kiekis2;
  const suma = kiekis1 + kiekis2;

  res.send(kiekis1 + ' + ' + kiekis2 + ' = ' + suma);
});


app.get('/didesnis/:skaicius1/:skaicius2', (req, res) => {
  const skaicius1 = +req.params.skaicius1;
  const skaicius2 = +req.params.skaicius2;

  if (skaicius1 > skaicius2) {
    res.send(`Didesnis skaičius yra ${skaicius1}`);
  } else {
    res.send(`Didesnis skaičius yra ${skaicius2}`);
  
}});

//------------------------------------------------------------------------------------

// duomenų perdavimas su query (užklausos) parametrais
// parametrai yra URL dalis po klaustuko ?
app.get('/spalvotas-dydis', (req, res) => {
    // paimame query parametrus iš req objekto
    const spalva = req.query.color; // pvz: /query?color=red
    const dydis = req.query.size;   // pvz: /query?size=10
    const mazis = req.query.small;
    res.send(`Spalva yra ${spalva}, dydis yra ${dydis}, mazis yra ${mazis}`, );
});


/*

https://www.google.com/search?q=karve&sca_esv=7389a8dcd685bcae&biw=714&bih=1270&sxsrf=AE3
TifO-t3Fi4mc97D9AoCGrczlEFtQnpw%3A1767782455867&ei=NzheabnRNPDUwPAP3JO2yQw&ved=0ahUKEwj5yMnqn
vmRAxVwKhAIHdyJLckQ4dUDCBE&uact=5&oq=karve&gs_lp=Egxnd3Mtd2l6LXNlcnAiBWthcnZlMgoQIxiABBgnGIoFMh
AQLhiABBhDGMcBGIoFGK8BMgUQABiABDIFEAAYgAQyChAAGIAEGEMYigUyChAAGIAEGEMYigUyCBAAGIAEGMsBMggQLhiABBj
LATIIEAAYgAQYywEyBRAAGIAESMkQUPwFWJAMcAB4ApABAJgBX6ABlwKqAQEzuAEDyAEA-AEBmAIEoALSAsICBBAAGEfCAgUQLh
iABJgDAIgGAZAGCJIHAzEuM6AHlUGyBwMwLjO4B8oCwgcFMi0xLjPIBzKACAA&sclient=gws-wiz-serp

*/

app.get('/kalkuliatorius', (req, res) => {
    // paimame query parametrus iš req objekto
    const skaicius10 = parseInt(req.query.skaicius10); // pvz: /query?color=red
    const skaicius20 = parseInt(req.query.skaicius20);   // pvz: /query?size=10
    const suma = skaicius10 + skaicius20;
    res.send(` ${skaicius10} + ${skaicius20} suma ${suma}`, );
});
//http://localhost/kalkuliatorius?skaicius10=10&skaicius20=8&suma=suma



app.get('/query-suma', (req, res) => {
    const skaicius1 = +req.params.skaicius1;
    const skaicius2 = parseFloat(req.query.skaicius2);
    const suma = skaicius1 + skaicius2;
    res.send(`${skaicius1} + ${skaicius2} = ${suma}`);
});
 
// https://localhost/query-suma?skaicius1=5&skaicius2=10




app.get('/mix-suma/:skaicius1', (req, res) => {
    const skaicius1 = parseFloat(req.params.skaicius1);
    const skaicius2 = parseFloat(req.query.skaicius2);
    const suma = skaicius1 + skaicius2;
    res.send(`${skaicius1} + ${skaicius2} = ${suma}`);
});

// http://localhost/mix-suma/5?skaicius2=10















// Paleidžia serverį ir parašo terminale, kad viskas yra gerai.
app.listen(port, () => {
    console.log(`Viskas gerai. Bebras dirba ant ${port} porto`);
});

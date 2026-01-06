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









// Paleidžia serverį ir parašo terminale, kad viskas yra gerai.
app.listen(port, () => {
    console.log(`Viskas gerai. Bebras dirba ant ${port} porto`);
});

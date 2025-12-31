const express = require('express');
const fs = require('fs'); // failu sistemos modulis
const app = express();
const port = 80;

app.get('/', (req, res) => {
    //req jau yra kaip objektas
    //res yra objektas, veliau automatiskai verciamas i stringa
  res.status(200).send('<h1>Labas, Bebrai!, Ka tu? kur naujus?</h1>')
});

app.get('/barsukas', (req, res) => {
    //req jau yra kaip objektas
    //res yra objektas, veliau automatiskai verciamas i stringa
  res.send('Barsukas')
});

// URL su perduodamu parametru
app.get('/barsukas/:id', (req, res) => {

    const id = req.params.id; // params raktinis zodis gauti parametrui

  res.send('Barsukas ' + id);
});

app.get('/briedis', (req, res) => {
   const data = fs.readFileSync('./html/briedis.html', 'utf8');
  res.send(data)
});





//paleidzia serveri ir paraso kad viskas gerai
app.listen(port, () => {
  console.log(`Viskas gerai, Bebras dirba ant ${port} porto`)
});

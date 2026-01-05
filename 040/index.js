const express = require('express');
const fs = require('fs'); // failu sistemos modulis
const app = express();
const port = 80;


// failai folderyje 'public' bus pasiekiami narsykleje
app.use(express.static('public'));

app.get('/', (req, res) => {
    const top = fs.readFileSync('./html/top.html', 'utf8');
    const bottom = fs.readFileSync('./html/bottom.html', 'utf8');
    const home = fs.readFileSync('./html/home.html', 'utf8');
    res.send(top + home + bottom);
});

//paleidzia serveri ir paraso kad viskas gerai
app.listen(port, () => {
  console.log(`Viskas gerai, Bebras dirba ant ${port} porto`)
});

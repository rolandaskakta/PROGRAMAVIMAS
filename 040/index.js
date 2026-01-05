const express = require('express');
const fs = require('fs'); // failu sistemos modulis
const app = express();
const port = 80;


// failai folderyje 'public' bus pasiekiami narsykleje
app.use(express.static('public'));

app.get('/', (req, res) => {

  //skaito tris atskirus failus, toks skaitymas galimas tik back-ende
  const top = fs.readFileSync('./html/top.html', 'utf8');
  const bottom = fs.readFileSync('./html/bottom.html', 'utf8');
  const home = fs.readFileSync('./html/home.html', 'utf8');

  const pageTitle = 'Home Page';
  const topWithTitle = top.replace('{{title}}', pageTitle);

  res.send(topWithTitle + home + bottom); // jau vienas HTML failas
});

app.get('/services', (req, res) => {

  //skaito tris atskirus failus, toks skaitymas galimas tik back-ende
  const top = fs.readFileSync('./html/top.html', 'utf8');
  const bottom = fs.readFileSync('./html/bottom.html', 'utf8');
  const services = fs.readFileSync('./html/services.html', 'utf8');

  const pageTitle = 'Services';
  const topWithTitle = top.replace('{{title}}', pageTitle);
  res.send(topWithTitle + services + bottom); // vienas html failass
});

app.get('/about', (req, res) => {

  //skaito tris atskirus failus, toks skaitymas galimas tik back-ende
  const top = fs.readFileSync('./html/top.html', 'utf8');
  const bottom = fs.readFileSync('./html/bottom.html', 'utf8');
  const about = fs.readFileSync('./html/about.html', 'utf8');
const pageTitle = 'About us';
    const topWithTitle = top.replace('{{title}}', pageTitle);
  res.send(topWithTitle + about + bottom); // vienas html failass
});

app.get('/contact', (req, res) => {

  //skaito tris atskirus failus, toks skaitymas galimas tik back-ende
  const top = fs.readFileSync('./html/top.html', 'utf8');
  const bottom = fs.readFileSync('./html/bottom.html', 'utf8');
  const contact = fs.readFileSync('./html/contact.html', 'utf8');

  const pageTitle = 'Contact us';
    const topWithTitle = top.replace('{{title}}', pageTitle);
  res.send(topWithTitle + contact + bottom); // vienas html failass
});

//paleidzia serveri ir paraso kad viskas gerai
app.listen(port, () => {
  console.log(`Viskas gerai, Bebras dirba ant ${port} porto`)
});

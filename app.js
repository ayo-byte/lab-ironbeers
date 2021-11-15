const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index');
});



app.get('/beers', (req, res) => {
  console.log('doing api')
  const beerlist = punkAPI.getBeers()
  const strongBeers = punkAPI.getBeers({'abv_gt': 8})
  console.log(strongBeers)
  res.render('beers')// ,punkAPI.getBeers())
})

app.listen(3000, () => console.log('🏃‍ on port 3000'));

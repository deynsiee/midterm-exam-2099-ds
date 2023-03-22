/*
SALALILA, DAYNA MICAELA
WD-202
*/

const express = require('express');
const app = express();

const dishes = [
  {
    type: 'Sisig',
    province: 'Pampanga',
    price: 220,
  },
  {
    type: 'Salpicao',
    province: 'Quezon',
    price: 180,
  },
  {
    type: 'Bagnet',
    province: 'Ilocos',
    price: 370,
  },
];

//get all records (route 1)
app.get('/dishes', (req, res) => {
  res.send(dishes);
});

//get dish type (route 2)
app.get('/dishes/:type', (req, res) => {
  var typeofDish = req.params.type;
  var dish = dishes.find((h) => h.type === typeofDish);
  if (dish) {
    res.send(dish);
  } else {
    res.status(404).send('Record not found.');
  }
});

//undefined route (3)
app.get('*', (req, res) => {
  res.status(404).send('Route is undefined. Record not found.');
});

app.listen(3000, () => console.log('Listening on Port 3000...'));

/*
SALALILA, DAYNA MICAELA
WD-202
*/

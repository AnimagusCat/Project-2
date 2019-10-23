console.log("about to require express");
const express = require('express');

const app = express();
console.log("done creating app");

//tells ajax to find the script file in the public folder
app.use(express.static('public'))

// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

const pg = require('pg');

// Initialise postgres client
const configs = {
  user: 'syahirah',
  host: '127.0.0.1',
  database: 'pokemons',
  port: 5432,
};

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

////////////////////////////ROUTES//////////////////////////



///SHOW LIST OF QUESTIONS
app.get('/home', (request, response) => {
  console.log('on home route');
  response.render('firstQuestion');
});

////SUBMIT THE FORM/////
app.post('/recommend', (request, response) => {
    console.log("this is request in index.js: ", request);
    response.render('recommend');
});

//THIS APP.GET IS FOR AJAX REQUEST
//IT WON'T GET RENDERED IN BROWSER UNLESS YOU DOM IT
/*app.get('/recommend', (request, response) => {
  console.log('on recommend route');
  //console.log('this is the response: ', response);
  response.render('recommend');
});*/


/*app.get('/recommend', (request, response) => {

  const query = 'SELECT * FROM pokemons';

  pool.query(query, (error, result) => {
    if (error) {
        console.error('query error:', error.stack);
        response.send( 'query error' );
    } else {
    response.send(result.rows);
    console.log("this is result.rows", result.rows);
    console.log("this is result.rows", result.rows[0]);
    };
  })
});*/

//////////////////////PORT DETAILS//////////////////////////
const port = 5000;
console.log("start listening");
app.listen(port)
console.log("done listening");
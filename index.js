const express = require('express');
const app = express();

app.use(express.static('public'))

// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Initialise postgres client
const configs = {
  user: 'syahirah',
  host: '127.0.0.1',
  database: 'project2',
  port: 5432,
};

const pg = require('pg');
const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

var sha256 = require('js-sha256');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
var SALT = "m0v3355!1!";

/***********************************************************/
////////////////////////////ROUTES//////////////////////////
/**********************************************************/

//////////////SHOW LIST OF QUESTIONS////////////
app.get('/home', (request, response) => {
  console.log('on home route');
  response.render('firstQuestion');
});

//////////////SUBMIT THE FORM & GET VALUES FOR URL/////////////
app.post('/recommend', (request, response) => {
  console.log("this is request.body" , request.body);

  let mood = request.body.mood;
  switch (mood) {
    case "happy": genre = [16, 80, 27, 10402, 53];
    break;
    case "sad": genre = [35, 99, 18, 36, 10749, 10770];
    break;
    case "angry": genre = [28, 10751, 10752];
    break;
    case "meh": genre = [12, 14, 9648, 878];
    break;
  };

  let time = request.body.time;

  let urlData = {
    genreKey: genre,
    runtimeKey: time
  };

  console.log("the genre: ", urlData.genreKey);
  console.log("the duration: ", urlData.runtimeKey);

  response.render('recommend', urlData);
});

/////////////SHOW SIGN IN PAGE//////////////
app.get('/signin', (request, response) => {
  console.log('on signin route');
  response.render('signin');
});

///////////VERIFY SIGN IN DETAILS/////////////
app.post('/signin', (request, response) => {
  console.log('on signin route');
  response.redirect("/home");
});

//////////SHOW REGISTER ACCOUNT PAGE//////////
app.get('/register', (request, response) =>{
  response.render("register");
});

///////SUBMITS REGISTRATION FORM AND ADD TO USER DB//////
app.post('/register', (request, response)=>{
  let username = request.body.username;
  console.log("Username: " + username);
  let password = sha256(request.body.password + SALT);
  console.log("password: "+ password);

  let values = [username, password];
  const queryString = `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *`;

  pool.query(queryString, values, (err, result) => {
    if (err) {
      console.error("query error:", err.stack);
      response.send("Oh no! Error in registering. Please try again.");
    } else {
        let user_id = result.rows[0].id;
        let currentSessionCookie = sha256(user_id + SALT );
        response.cookie('user_id', user_id);
        response.cookie('loggedIn', currentSessionCookie);
        response.redirect("/home");
    }
  });
});

//////SHOW USER'S MOVIE LIST///////
app.get ('/profile', (request, response) => {
  response.render("profile");
})

//////ADD MOVIE TO USER'S MOVIE LIST//////
app.post('/profile', (request, response) => {

})

/**********************************************************/
//////////////////////PORT DETAILS//////////////////////////
/**********************************************************/

const port = 5000;
console.log("start listening");
app.listen(port)
console.log("done listening");
const express = require('express');
const app = express();
//const url = require('url');
require('dotenv').config();

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

//check to see if we have this heroku environment variable
// if( process.env.DATABASE_URL ){

//   //we need to take apart the url so we can set the appropriate configs

//   const params = url.parse(process.env.DATABASE_URL);
//   const auth = params.auth.split(':');

//   //make the configs object
//   var configs = {
//     user: auth[0],
//     password: auth[1],
//     host: params.hostname,
//     port: params.port,
//     database: params.pathname.split('/')[1],
//     ssl: true
//   };

// }else{

    // Initialise postgres client
    const configs = {
      user: 'syahirah',
      host: '127.0.0.1',
      database: 'project2',
      port: 5432,
    };
//}

const pg = require('pg');
const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const sha256 = require('js-sha256');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const SALT = process.env.SALT;


/***********************************************************/
////////////////////////////ROUTES//////////////////////////
/**********************************************************/

///////SHOW ABOUT PAGE////////
app.get('/about', (request, response) => {
  response.render('about');
});

//////////////SHOW LIST OF QUESTIONS////////////
app.get('/home', (request, response) => {
  console.log('on home route');
  response.render('home');
});

//////////////SUBMIT THE FORM & SHOW RECOMMEND PAGE/////////////
app.post('/recommend', (request, response) => {
  //console.log("this is request.body" , request.body);
  console.log('On recommend route');
  let mood = request.body.mood;
  switch (mood) {
    case "happy": genre = [99, 27, 53, 10751];
    break;
    case "sad": genre = [16, 35, 18, 36, 10749, 10770];
    break;
    case "angry": genre = [80, 28, 10402 , 10752];
    break;
    case "meh": genre = [12, 14, 9648, 878];
    break;
  };

  let time = request.body.time;

  let urlData = {
    genreKey: genre,
    runtimeKey: time
  };

  //console.log("the genre: ", urlData.genreKey);
  //console.log("the duration: ", urlData.runtimeKey);

  response.render('recommend', urlData);
});

//////SHOW INDIVIDUAL MOVIE PAGE/////
app.get('/movie/:id', (request, response) => {
    let inputId = parseInt( request.params.id );
    // console.log("this is the inputId: ", inputId );

    let movie = {
        id: inputId
    };

    // console.log("this is movie object: ", movie);
    response.render('movieid', movie);
  });

/////////////SHOW SIGN IN PAGE//////////////
app.get('/signin', (request, response) => {
  console.log('on signin route');
  response.render('signin');
});

///////////VERIFY SIGN IN DETAILS/////////////
app.post('/signin', (request, response) => {
  let username = [request.body.username];
  console.log ("the username is: " + username);
  let hashedPassword = sha256(request.body.password + SALT);
  console.log("hashed entered password: " + hashedPassword);

  const queryString = `SELECT * FROM users WHERE username = $1`;
  console.log("this is the query string from POST signin: ", queryString);

  pool.query(queryString, username, (err, result) => {
    console.log("this is the result", result);
   // console.log("this is the result.rows", result.rows);
    if (err) {
      console.error("query error:", err.stack);
      response.send("Error in verifying user. Please try again.");
    } else {
      if (hashedPassword === result.rows[0].password) {
        let user_id = result.rows[0].id;
        let currentSessionCookie = sha256(user_id + SALT);

        response.cookie('user_id', user_id);
        response.cookie('loggedIn', currentSessionCookie);
        response.redirect("/home");
      } else {
        response.status(403).send('Wrong password!');
      };
    };
  });
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
  let user_id = [request.cookies.user_id];
  let savedCookie = request.cookies.loggedIn;

  const queryUsers = `SELECT * FROM users WHERE id = $1`;
  const queryMovieList = `SELECT * FROM movielist WHERE users_id = $1`;

  if (savedCookie === undefined) {
  response.send ("You need to be logged in to view this page!")
  } else {
    pool.query(queryUsers, user_id, (err, result) => {
      if (err) {
        console.error("query error:", err.stack);
        response.send("Error in fetching user profile. Please try again.");
      } else {
          pool.query(queryMovieList, user_id, (err, result) => {
            const movieList = {
                list: result.rows
            };
            console.log("this is movieList in INDEX: ", movieList);
          response.render("profile", movieList);
          });

        };
    });
  }
});

//////ADD MOVIE TO USER'S MOVIE LIST//////
app.post('/profile', (request, response) => {
  console.log("this is request.body.data: ", request.body.data);
  let user_id = request.cookies.user_id;
  console.log("this is the user_id: ", user_id);
  let savedCookie = request.cookies.loggedIn;

  let movieid = request.body.data.movieid;
  let movietitle = request.body.data.movietitle;
  let posterimage = request.body.data.posterimage;
  let movierating = request.body.data.movierating;
  let watched = request.body.data.watched;
  let favourite = request.body.data.favourite;

  if (savedCookie === undefined) {
    response.send ("You need to be logged in to view this page!")
  } else {
      let values = [user_id, movieid, movietitle, posterimage, movierating, watched, favourite];
      const queryString = `INSERT INTO movielist (users_id, movieid, movietitle, posterimage, movierating, watched, favourite) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;

      pool.query(queryString, values, (err, result) => {
        console.log(values);
        if (err) {
          console.error("query error:", err.stack);
          response.send("Oh no! Error in adding to list. Please try again.");
        } else {
            response.send(result);
          }
      });
  }
});

//////UPDATE USER'S MOVIELIST INFO FOR WATCHED, FAV AND DELETE/////
app.put('/profile', (request, response) => {
  let user_id = request.cookies.user_id;
  console.log("this is the request.body: ", request.body);

  //const queryString = `SELECT * FROM movielist WHERE users_id = $1 AND movieid = $2`;

  const queryString = `UPDATE movielist SET watched = $1 WHERE users_id = $2 AND movieid = $3`;

      pool.query(queryString, values, (err, result) => {
        console.log(values);
        if (err) {
          console.error("query error:", err.stack);
          response.send("Oh no! Error in adding to list. Please try again.");
        } else {
            response.send(result);
          }
      });



})

/**********************************************************/
//////////////////////PORT DETAILS//////////////////////////
/**********************************************************/
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log('~~~ Tuning in to the waves of port '+PORT+' ~~~'));


//const server = app.listen(5000, () => console.log('~~~ Tuning in to the waves of port 5000 ~~~'));

let onClose = function(){
  console.log("closing");

  server.close(() => {
    console.log('Process terminated');
    pool.end( () => console.log('Shut down db connection pool'));
  })
};

process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);

/*const port = 5000;
console.log("start listening");
app.listen(port)
console.log("done listening");*/
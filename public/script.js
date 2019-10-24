// what to do when we receive the request
//what you want http request to do must be within the responseHandler function
var createMovieDetails = function() {
  //need to JSON.parse to convert it to an object
  //the responseText is the result from the query in index.js app.get
  //or the data object you specified within the app.get in index.js
  console.log("response text", JSON.parse(this.responseText));
  console.log("status text", this.statusText);
  console.log("status code", this.status);

  //////the JSON data from URL////////
  var key = JSON.parse(this.responseText);
  console.log(key);
  var keyArray = key.results;
  console.log(keyArray);

  ////create the movie contents and append to body////
  if (request.status >= 200 && request.status < 400) {
    keyArray.forEach(movie => {
        const img = document.createElement("img");
        let baseURL = "https://image.tmdb.org/t/p/w185";
        let poster = movie.poster_path;
        img.src = "".concat(baseURL, poster);

        const h3 = document.createElement('h3');
        h3.textContent = movie.title;

        const h4 = document.createElement('h4');
        h4.textContent = movie.vote_average;

        const p = document.createElement('p');
        p.textContent = movie.overview;

    document.body.appendChild(img);
    document.body.appendChild(h3);
    document.body.appendChild(h4);
    document.body.appendChild(p);
    });
  } else {
      reponse.send("it's not working!");
  };
};

// make a new request
//wrap in a function
var request = new XMLHttpRequest();

////// when page has finished loading, run this//////
request.addEventListener("load", createMovieDetails);

///////THIS URL CHANGES ACCORDING TO FORM'S ANSWERS/////
console.log("genre from the script.js: " , something.genreKey);
console.log("time from the script.js: ", something.runtimeKey);
//this is an array of genre values
const genreArray = something.genreKey;
const runtimeKey = something.runtimeKey;

//genreKey.forEach(function (eachKey) => {


//})


//let url = "".concat('https://api.themoviedb.org/3/discover/movie?api_key=731fb93fefd0f2baf1f4459eb3c95d13&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=', genreKey, '&with_runtime.lte=', runtimeKey );

let url = "https://api.themoviedb.org/3/discover/movie?api_key=731fb93fefd0f2baf1f4459eb3c95d13&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16%7C80%7C27%7C10402%7C53&with_runtime.lte=120";
// %7C stands for | (OR)

request.open("GET", url);

// send the request
request.send();
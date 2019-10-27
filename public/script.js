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
        const card = document.createElement('div');
        card.setAttribute('class', 'card mb-3');

        const row = document.createElement('div');
        row.setAttribute('class', 'row no-gutters');

        const col4 = document.createElement('div');
        col4.setAttribute('class', 'col-md-4');

        const img = document.createElement("img");
        let baseURL = "https://image.tmdb.org/t/p/w342";
        let poster = movie.poster_path;
        img.setAttribute('class', 'card-img');
        img.src = "".concat(baseURL, poster);

        const col8 = document.createElement('div');
        col8.setAttribute('class', 'col-md-8');

        const cardBody = document.createElement('div');
        cardBody.setAttribute('class', 'card-body');

        const h5 = document.createElement('h5');
        h5.setAttribute('class', 'card-title');
        h5.textContent = movie.title;

        const h6 = document.createElement('h6');
        h6.setAttribute('class', 'card-subtitle mb-2 text-muted');
        h6.textContent = movie.vote_average;

        const p = document.createElement('p');
        p.setAttribute('class', 'card-text text-left text-truncate');
        p.textContent = movie.overview;

        const a = document.createElement('a');
        a.href = "http://thefair.com/";
        a.textContent = "See more info";

        const container = document.getElementsByClassName("container");
        container[0].appendChild(card);
        card.appendChild(row);
        row.appendChild(col4);
        col4.appendChild(img);
        row.appendChild(col8);
        col8.appendChild(cardBody);
        cardBody.appendChild(h5);
        cardBody.appendChild(h6);
        cardBody.appendChild(p);
        cardBody.appendChild(a);

    });
  } else {
      reponse.send("Error fetching movie data");
  };
};

/////send new HTTP request/////
var request = new XMLHttpRequest();

//// when page has finished loading, run this//////
request.addEventListener("load", createMovieDetails);

/////THIS URL CHANGES ACCORDING TO FORM'S ANSWERS/////
console.log("genre from the script.js: " , something.genreKey);
console.log("time from the script.js: ", something.runtimeKey);

////this is an array of genre values//////
const genreArray = something.genreKey;
console.log(genreArray);

////this joins all the values in the array and add %7C to the middle values///
let genreArrayString = genreArray.join("%7C");

let time = something.runtimeKey;

let url = 'https://api.themoviedb.org/3/discover/movie?api_key=731fb93fefd0f2baf1f4459eb3c95d13&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=' + genreArrayString + '&with_runtime.lte=' + time;

request.open("GET", url);

// send the request
request.send();

// let url = "https://api.themoviedb.org/3/discover/movie?api_key=731fb93fefd0f2baf1f4459eb3c95d13&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16%7C80%7C27%7C10402%7C53&with_runtime.lte=120";
// %7C stands for | (OR)
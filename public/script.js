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
        card.setAttribute('class', 'card');

        const img = document.createElement("img");
        let baseURL = "https://image.tmdb.org/t/p/w342";
        let poster = movie.poster_path;
        img.setAttribute('class', 'card-img-top');
        img.src = "".concat(baseURL, poster);

        const cardBody = document.createElement('div');
        cardBody.setAttribute('class', 'card-body h-100');

        const h5 = document.createElement('h5');
        h5.setAttribute('class', 'card-title');
        h5.textContent = movie.title;

        const pRating = document.createElement('h6');
        pRating.setAttribute('class', 'card-subtitle mb-2 text-muted');
        pRating.textContent = movie.vote_average;

        const pOverview = document.createElement('p');
        pOverview.setAttribute('class', 'card-text text-left');
        pOverview.textContent = movie.overview;

        const container = document.getElementsByClassName("container");
        container[0].appendChild(card);
        card.appendChild(img);
        card.appendChild(cardBody);
        cardBody.appendChild(h5);
        cardBody.appendChild(pRating);
        cardBody.appendChild(pOverview);
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

/*genreArray.forEach(eachKey => {
    console.log("this is eachKey: ", eachKey);
    var eachKeyValue = "%7C" + eachKey;

    console.log("eachKey after adding string: " + eachKeyValue);
    eachKey.concat()
    return;
});*/

// let url = "https://api.themoviedb.org/3/discover/movie?api_key=731fb93fefd0f2baf1f4459eb3c95d13&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16%7C80%7C27%7C10402%7C53&with_runtime.lte=120";
// %7C stands for | (OR)
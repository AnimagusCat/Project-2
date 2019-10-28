var showProfileMovie = function() {
  //need to JSON.parse to convert it to an object
  //the responseText is the result from the query in index.js app.get
  //or the data object you specified within the app.get in index.js
  console.log("response text", JSON.parse(this.responseText));
  console.log("status text", this.statusText);
  console.log("status code", this.status);

  //////the JSON data from URL////////
  var movie = JSON.parse(this.responseText);
  console.log("this is one movie: ", movie);
  //var keyArray = key.results;
  //console.log(keyArray);

  ////create the movie contents and append to body////
  if (request.status >= 200 && request.status < 400) {
    //keyArray.forEach(movie => {
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
        pOverview.setAttribute('class', 'card-text text-center');
        pOverview.textContent = "Runtime: " + movie.runtime + "mins";

       /* const link = document.createElement('a');
        a.href = "http://thefair.com/";
        a.textContent = "thefair.com";

        document.body.appendChild(a);*/

        const container = document.getElementsByClassName("container");
        container[0].appendChild(card);
        card.appendChild(img);
        card.appendChild(cardBody);
        cardBody.appendChild(h5);
        cardBody.appendChild(pRating);
        cardBody.appendChild(pOverview);
    //document.body.appendChild(img);
    //document.body.appendChild(h3);
    //document.body.appendChild(h4);
    //document.body.appendChild(p);
   // });
  } else {
      reponse.send("it's not working!");
  };
};

// make a new request
//wrap in a function
var request = new XMLHttpRequest();

////// when page has finished loading, run this//////
request.addEventListener("load", showProfileMovie);

///////THIS URL CHANGES ACCORDING TO FORM'S ANSWERS/////
//console.log("genre from the script.js: " , something.genreKey);
//console.log("time from the script.js: ", something.runtimeKey);
//this is an array of genre values
//const genreArray = something.genreKey;
//const runtimeKey = something.runtimeKey;

/*if (genreArray[0]) {
    var firstGenreKey = genreArray[0];
} else {
    genreArray.forEach(function (eachKey) => {
    console.log("this is eachKey: ", eachKey);
    var eachKeyValue = "%7C" + "eachKey";
    return;
    });
};*/


//let url = "".concat('https://api.themoviedb.org/3/discover/movie?api_key=731fb93fefd0f2baf1f4459eb3c95d13&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=', genreKey, '&with_runtime.lte=', runtimeKey );

let url = "https://api.themoviedb.org/3/movie/420818?api_key=731fb93fefd0f2baf1f4459eb3c95d13&language=en-US";
// %7C stands for | (OR)

request.open("GET", url);

// send the request
request.send();
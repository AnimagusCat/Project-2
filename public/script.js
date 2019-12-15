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
        h5.style.cssText = "font-size: 1.1rem;";
        h5.textContent = movie.title;

        const h6 = document.createElement('h6');
        h6.setAttribute('class', 'card-subtitle mb-2 text-muted');
        h6.textContent = movie.vote_average;

        const p = document.createElement('p');
        p.setAttribute('class', 'card-text text-left');
        p.style.cssText = "font-size: 0.9rem;";
        let movieDescription = movie.overview.substring(0, 200);
        p.textContent = `${movieDescription}...`;

        const div = document.createElement('div');
        div.setAttribute('class', 'link-box');

        const a = document.createElement('a');
        let urlId = movie.id;
        a.href = "".concat("/movie/", movie.id);
        a.textContent = "See more info";

        const plusSubmit = document.createElement('input');
        plusSubmit.setAttribute('type', 'image');
        plusSubmit.src = "images/plus.png";
        plusSubmit.style.cssText = "width: 10%;";

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
        cardBody.appendChild(div);
        div.appendChild(a);
        col4.appendChild(plusSubmit);

        plusSubmit.addEventListener('click', checkAdd, false);
        function checkAdd(){
            if (request.cookies === null) {
                plusSubmit.setAttribute('data-toggle', 'popover');
                plusSubmit.setAttribute('data-content', 'You need to be logged in to add movies to your list');
            } else {
                const dataToAdd = {
                movieid: movie.id,
                movietitle: movie.title,
                posterimage: movie.poster_path,
                movierating: movie.vote_average,
                watched: false,
                favourite: false,
            };
                runAJAX(dataToAdd);
            };
        };
    });
  } else {
      reponse.send("Error fetching movie data");
  };
};

/////send new HTTP request/////
var request = new XMLHttpRequest();

//// when page has finished loading, run this//////
request.addEventListener("load", createMovieDetails);

// console.log("genre from the script.js: " , something.genreKey);
// console.log("time from the script.js: ", something.runtimeKey);

////this is an array of genre values//////
const genreArray = something.genreKey;
// console.log(genreArray);

/////THIS URL CHANGES ACCORDING TO FORM'S ANSWERS/////
////this joins all the values in the array and add %7C to the middle values///
let genreArrayString = genreArray.join("%7C");

let time = something.runtimeKey;

let url = 'https://api.themoviedb.org/3/discover/movie?api_key=731fb93fefd0f2baf1f4459eb3c95d13&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=' + genreArrayString + '&with_runtime.lte=' + time;

request.open("GET", url);

// send the request
request.send();

let runAJAX = function (data) {
    /////send new HTTP request/////
    var request = new XMLHttpRequest();
    request.addEventListener("load",function(){
        console.log(JSON.parse(this.responseText));
    });

    let url = '/profile';

    request.open("POST", url);

    request.setRequestHeader("Content-type", "application/json;charset=UTF-8")
    console.log("HEREEEEEE")
    console.log(data);
    let something = {
        data:data
    }
    // send the request
    request.send(JSON.stringify(something));
}
var individualMovie = function() {
  //need to JSON.parse to convert it to an object
  //the responseText is the result from the query in index.js app.get
  //or the data object you specified within the app.get in index.js
  //console.log("response text", JSON.parse(this.responseText));
  // console.log("status text", this.statusText);
  // console.log("status code", this.status);

  //////the JSON data from URL////////
  var movieDetails = JSON.parse(this.responseText);

  ////create the movie contents and append to body////
  if (request.status >= 200 && request.status < 400) {
    //////FOR THE FIRST TAB 'DETAILS'////////
    const row1 = document.createElement('div');
    row1.setAttribute('class', 'row');

    const posterCol = document.createElement('div');
    posterCol.setAttribute('class', 'col-sm-4 poster');

    const img = document.createElement("img");
    let baseURL = "https://image.tmdb.org/t/p/w342";
    let poster = movieDetails.poster_path;
    img.setAttribute('class', 'img-fluid rounded float-left');
    img.src = "".concat(baseURL, poster);

    const detailCol = document.createElement('div');
    detailCol.setAttribute('class', 'col-sm-8 main');
    detailCol.style.cssText = "text-align: left; height: inherit;";

    const row2 = document.createElement('div');
    row2.setAttribute('class', 'row title-year');

    const titleCol = document.createElement('div');
    titleCol.setAttribute('class', 'col-9 title');

    const title = document.createElement('h2');
    title.textContent = movieDetails.title;

    const yearCol = document.createElement('div');
    yearCol.setAttribute('class', 'col-3 year');

    const year = document.createElement('h2');
    year.textContent = movieDetails.release_date.substring(0, 4);
    year.style.cssText = "text-align: right;";

    const row3 = document.createElement('div');
    row3.setAttribute('class', 'row');

    const voteCol = document.createElement('div');
    voteCol.setAttribute('class', 'col-sm-4 vote');

    const ratingLabel = document.createElement('p');
    ratingLabel.textContent = "Average Rating";
    ratingLabel.style.cssText = "margin: 0";

    const rating = document.createElement('h5');
    rating.textContent = movieDetails.vote_average;

    const addCol = document.createElement('div');
    addCol.setAttribute('class', 'col-sm-8 add-icon');

    const plus = document.createElement('input');
    plus.setAttribute('type', 'image');
    plus.setAttribute('class', 'img-fluid rounded float-right');
    plus.src = "/images/plus.png";
    plus.style.cssText = "width: 7%;";

    const row4 = document.createElement('div');
    row4.setAttribute('class', 'row overview');
    row4.style.cssText = "padding: 15px";

    const overviewLabel = document.createElement('h5');
    overviewLabel.textContent = "Overview";

    const overview = document.createElement('p');
    overview.textContent = movieDetails.overview;

    const row5 = document.createElement('div');
    row5.setAttribute('class', 'row');

    const runtimeCol = document.createElement('div');
    runtimeCol.setAttribute('class', 'col-sm-4 runtime');

    const runtimeLabel = document.createElement('h5');
    runtimeLabel.textContent = "Duration";

    const runtime = document.createElement('p');
    runtime.textContent = movieDetails.runtime + " mins";

    const genreCol = document.createElement('div');
    genreCol.setAttribute('class', 'col-sm-8 genres');

    const genreLabel = document.createElement('h5');
    genreLabel.textContent = "Genres";

    let genresArray = movieDetails.genres;

    const content = document.getElementById("nav-details");
    content.appendChild(row1);
    row1.appendChild(posterCol);
    posterCol.appendChild(img);
    row1.appendChild(detailCol);
    detailCol.appendChild(row2);
    row2.appendChild(titleCol);
    titleCol.appendChild(title);
    row2.appendChild(yearCol);
    yearCol.appendChild(year);
    detailCol.appendChild(row3);
    row3.appendChild(voteCol);
    voteCol.appendChild(ratingLabel);
    voteCol.appendChild(rating);
    row3.appendChild(addCol);
    addCol.appendChild(plus);
    detailCol.appendChild(row4);
    row4.appendChild(overviewLabel);
    row4.appendChild(overview);
    detailCol.appendChild(row5);
    row5.appendChild(runtimeCol);
    runtimeCol.appendChild(runtimeLabel);
    runtimeCol.appendChild(runtime);
    row5.appendChild(genreCol);
    genreCol.appendChild(genreLabel);

    let genres = genresArray.map (genreItem => {
        const genre = document.createElement('p');
        genre.textContent = genreItem.name;
        genreCol.appendChild(genre);
        return;
    });

    /////ADDS EVENT LISTENER TO PLUS BUTTON//////
    plus.addEventListener('click', checkAdd, false);
    function checkAdd(){
        let cookies = thisMovie.cookies;
        if (cookies === undefined) {
            alert("You need to be logged in to add movies to your list");
        } else {
            const addAlert = document.createElement('p');
            addAlert.setAttribute('class', 'alertMovieid');
            addAlert.textContent = 'Added!';
            alertPosition = document.querySelector('.add-icon');
            alertPosition.appendChild(addAlert);

            setTimeout(function() {
                addAlert.setAttribute('class', 'hideAlert');
            } ,500);

            const dataToAdd = {
            movieid: movieDetails.id,
            movietitle: movieDetails.title,
            posterimage: movieDetails.poster_path,
            movierating: movieDetails.vote_average,
            watched: false,
            favourite: false,
            };
                runAJAX(dataToAdd);
            };
        };

    /////FOR THE SECOND TAB 'TRAILER'/////
    if (movieDetails.videos.results.length === 0){
      document.getElementById("trailer").style.display = "none";
      const errorMsg = document.createElement('h6');
      errorMsg.textContent = "Sorry, trailer is not available for this title";
      const trailerTab = document.getElementById("nav-trailer");
      trailerTab.appendChild(errorMsg);
    } else {
        const trailer = document.getElementById("trailer");

        let baseTrailerURL = "https://www.youtube.com/embed/";
        let movieTrailerId = movieDetails.videos.results[0].key;
        trailer.src = "".concat(baseTrailerURL, movieTrailerId);
    };
  } else {
      reponse.send("Error fetching movie data");
  };
};

/////send new HTTP request/////
var request = new XMLHttpRequest();

//// when page has finished loading, run this//////
request.addEventListener("load", individualMovie);

/////THE MOVIE ID THAT USER SELECTED/////
let thisMovieId = thisMovie.id;

let API_KEY = thisMovie.API_KEY;

let url = 'https://api.themoviedb.org/3/movie/' + thisMovieId + '?api_key=' + API_KEY + '&language=en-US&append_to_response=videos';

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
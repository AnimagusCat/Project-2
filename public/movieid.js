var individualMovie = function() {
  //need to JSON.parse to convert it to an object
  //the responseText is the result from the query in index.js app.get
  //or the data object you specified within the app.get in index.js
  //console.log("response text", JSON.parse(this.responseText));
  console.log("status text", this.statusText);
  console.log("status code", this.status);

  //////the JSON data from URL////////
  var movieDetails = JSON.parse(this.responseText);
  console.log("this is the full movie details: ", movieDetails);
  console.log("this is the genre: ", movieDetails.genres);
  console.log("this is the title: ", movieDetails.title);
  console.log("this is the overview: ", movieDetails.overview);
  ////create the movie contents and append to body////
  if (request.status >= 200 && request.status < 400) {
    //////FOR THE FIRST TAB 'DETAILS'////////
    const row1 = document.createElement('div');
    row1.setAttribute('class', 'row');

    const posterCol = document.createElement('div');
    posterCol.setAttribute('class', 'col-sm-5 poster');

    const img = document.createElement("img");
    let baseURL = "https://image.tmdb.org/t/p/w342";
    let poster = movieDetails.poster_path;
    img.setAttribute('class', 'img-fluid rounded float-left');
    img.src = "".concat(baseURL, poster);

    const detailCol = document.createElement('div');
    detailCol.setAttribute('class', 'col-sm-7 main');
    detailCol.style.cssText = "text-align: left; height: inherit;";

    const row2 = document.createElement('div');
    row2.setAttribute('class', 'row');

    const titleCol = document.createElement('div');
    titleCol.setAttribute('class', 'col-sm-10 title');

    const title = document.createElement('h2');
    title.textContent = movieDetails.title;

    const yearCol = document.createElement('div');
    yearCol.setAttribute('class', 'col-sm-2 year');

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

    const plus = document.createElement("img");
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
    console.log("this is genresArray: ", genresArray);

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
        console.log("this is the genreItem: ", genreItem);
        const genre = document.createElement('p');
        genre.textContent = genreItem.name;
        console.log ("this is a genre: ", genre);
        genreCol.appendChild(genre);
        return;
    });

    /////FOR THE SECOND TAB 'TRAILER'/////
    const trailerTab = document.getElementById("nav-trailer");




  } else {
      reponse.send("Error fetching movie data");
  };
};

/////send new HTTP request/////
var request = new XMLHttpRequest();

//// when page has finished loading, run this//////
request.addEventListener("load", individualMovie);

/////THE MOVIE ID THAT USER SELECTED/////
console.log("Movie ID from the index.js: " , thisMovie.id);
let thisMovieId = thisMovie.id;

let url = 'https://api.themoviedb.org/3/movie/' + thisMovieId + '?api_key=731fb93fefd0f2baf1f4459eb3c95d13&language=en-US';

request.open("GET", url);

// send the request
request.send();


/*const img = document.createElement("img");
        let baseURL = "https://image.tmdb.org/t/p/w342";
        let poster = movieDetails.poster_path;
        //img.setAttribute('class', 'card-img');
        img.src = "".concat(baseURL, poster);
        console.log(img.src);

        const col8 = document.createElement('div');
        col8.setAttribute('class', 'col-md-8');

        const cardBody = document.createElement('div');
        cardBody.setAttribute('class', 'card-body');

        const h5 = document.createElement('h5');
        h5.setAttribute('class', 'card-title');
        h5.textContent = "POSTER GOES HERE";

        const h6 = document.createElement('h6');
        h6.setAttribute('class', 'card-subtitle mb-2 text-muted');
        h6.textContent = movie.vote_average;

        const p = document.createElement('p');
        p.setAttribute('class', 'card-text text-left');
        p.style.cssText = "font-size: 0.9rem;";
        let movieDescription = movie.overview.substring(0, 160);
        p.textContent = `${movieDescription}...`;

        const div = document.createElement('div');
        div.setAttribute('class', 'link-box');

        const a = document.createElement('a');
        let urlId = movie.id;
        a.href = "".concat("/movie/", movie.id);
        a.textContent = "See more info";*/
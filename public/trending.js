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
        //card.textContent = "this is the card";

        const row = document.createElement('div');
        row.setAttribute('class', 'row no-gutters');
        //row.textContent = "this is the row";

        const col4 = document.createElement('div');
        col4.setAttribute('class', 'col-md-4');
        //col4.textContent = "this is the col-4";

        const img = document.createElement("img");
        let baseURL = "https://image.tmdb.org/t/p/w342";
        let poster = movie.poster_path;
        img.setAttribute('class', 'card-img');
        img.src = "".concat(baseURL, poster);
        //img src = "text.img";

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

let url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=731fb93fefd0f2baf1f4459eb3c95d13';

request.open("GET", url);

// send the request
request.send();
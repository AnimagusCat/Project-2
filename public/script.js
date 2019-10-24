// what to do when we receive the request
//what you want http request to do must be within the responseHandler function
var responseHandler = function() {
  //need to JSON.parse to convert it to an object
  //the responseText is the result from the query in index.js app.get
  //or the data object you specified within the app.get in index.js
  console.log("response text", JSON.parse(this.responseText));
  console.log("status text", this.statusText);
  console.log("status code", this.status);

  var key = JSON.parse(this.responseText);
  console.log(key);
  var keyArray = key.results;
  console.log(keyArray);

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


    /*var createTitle = document.createElement("p");
    var movieTitleArray = key.results.map ((movie) => {
        return (
            movie.title
        );
    });
    createTitle.textContent = `${movieTitleArray}`;

    console.log(movieTitleArray);
    document.body.appendChild(createTitle);*/
};

// make a new request
//wrap in a function
var request = new XMLHttpRequest();

// listen for the request response
request.addEventListener("load", responseHandler);

// ready the system by calling open, and specifying the url
/*let baseurl = "https://api.themoviedb.org/3/discover/movie?api_key=731fb93fefd0f2baf1f4459eb3c95d13&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false";
let with_genres = null;*/

/*const formAnswer = function(mood_value, time_value){
    if (document.getElementById('m1').checked) {
    mood_value = document.getElementById('m1').value;
    console.log(mood_value);
    } else if (document.getElementById('m2').checked){
        mood_value = document.getElementById('m2').value;
        console.log(mood_value);
    } else if (document.getElementById('m2')
};*/

let moodValue = null;
let timeValue = null;

function formAnswer(moodValue, timeValue){
    var mood1 = document.getElementById('m1');
    var mood2 = document.getElementById('m2');
    var mood3 = document.getElementById('m3');
    var mood4 = document.getElementById('m4');

    var time1 = document.getElementById('t1');
    var time2 = document.getElementById('t2');
    var time3 = document.getElementById('t3');


    if (mood1.checked) {
        moodValue = mood1.value;
    } else if (mood2.checked) {
        moodValue = mood2.value;
    } else if (mood3.checked) {
        moodValue = mood3.value;
    } else if (mood4.checked) {
        moodValue = mood4.value;
    };

    if (time1.checked){
        timeValue = time1.value;
    } else if (time2.checked) {
        timeValue = time2.value;
    } else if (time3.checked) {
        timeValue = time3.value;
    };
    console.log(moodValue, timeValue);
    return moodValue, timeValue;
};

/*var mood = document.getElementsByName('mood');
    console.log(mood);
    for(i = 0; i < mood.length; i++) {
        if(mood[i].checked) {
        mood_value = mood[i].value;
        };
    };
    var time = document.getElementsByName('time');
    console.log(time);
    for(i = 0; i < time.length; i++) {
        if(time[i].checked) {
        time_value = time[i].value;
        };
    };
    return;*/

///////THIS URL CHANGES ACCORDING TO FORM'S ANSWERS/////
const genreKey = null;
const runtimeKey = null;
//let url = "".concat('https://api.themoviedb.org/3/discover/movie?api_key=731fb93fefd0f2baf1f4459eb3c95d13&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=', genreKey, '&with_runtime.lte=', runtimeKey );

let url = "https://api.themoviedb.org/3/discover/movie?api_key=731fb93fefd0f2baf1f4459eb3c95d13&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_runtime.lte=120";


request.open("GET", url);

// send the request
request.send();
/////HEART CLICK HANDLER/////
const heart = document.querySelectorAll(".heartBtn");

for (let i = 0; i < heart.length; i++){
    heart[i].addEventListener('click', clickHeart);
};

function clickHeart(event){
    let heart = event.target;
    let favText = heart.nextElementSibling;

    //change classnames so they appear coloured or not
    if (heart.className === 'heartBtn'){
      heart.setAttribute('class', 'heartBtn heart-selected');
      favText.setAttribute('class', 'pro-btn-selected');

    } else if (heart.className === 'heartBtn heart-selected'){
        heart.classList.remove('heart-selected');
        favText.setAttribute('class', 'pro-btn-text');
    }

    //selected movieid to update
    const dataToAdd = {
        movieid: heart.value
    };
    runHeartAJAX(dataToAdd);
  };

//////CHECK CLICK HANDLER/////
const check = document.querySelectorAll(".checkBtn");

for (let i = 0; i < check.length; i++){
    check[i].addEventListener('click', clickCheck);
};

function clickCheck(event){
    let check = event.target;
    let watchText = check.nextElementSibling;

    //change classnames so they appear coloured or not
    if (check.className === 'checkBtn'){
      check.setAttribute('class', 'checkBtn check-selected');
      watchText.setAttribute('class', 'pro-btn-selected');

    } else if (check.className === 'checkBtn check-selected'){
        check.classList.remove('check-selected');
        watchText.setAttribute('class', 'pro-btn-text');
    }

    //selected movieid to update
    const dataToAdd = {
        movieid: check.value
    };
    runCheckAJAX(dataToAdd);
};

/////CROSS CLICK HANDLER/////
const cross = document.querySelectorAll(".crossBtn");

for (let i = 0; i < cross.length; i++) {
    cross[i].addEventListener('click', clickCross);
};

function clickCross(event){
    let cross = event.target;

    if (confirm("Delete this movie from your list?") === true){
        //retrieve the card to be deleted
        let crossBox = cross.parentElement;
        console.log(crossBox);

        let icons = crossBox.parentElement;
        console.log(icons);

        let cardBody = icons.parentElement;
        console.log(cardBody);

        let col8 = cardBody.parentElement;
        console.log(col8);

        let row = col8.parentElement;
        console.log(row);

        let card = row.parentElement;
        console.log(card);

        let container = document.querySelector('.container');
        container.removeChild(card);

        //get movieid to be deleted
        const dataToDelete = {
            movieid: cross.value
        };

        runCrossAJAX(dataToDelete);
    };
};



//update user's profile if heart button is clicked
let runHeartAJAX = function (data) {
    /////send new HTTP request/////
    var request = new XMLHttpRequest();
    request.addEventListener("load",function(){
        console.log(JSON.parse(this.responseText));
    });

    let url = '/heart';

    request.open("PUT", url);

    request.setRequestHeader("Content-type", "application/json;charset=UTF-8")
    console.log(data);
    let something = {
        data:data
    }
    // send the request
    request.send(JSON.stringify(something));
};

//update user's profile if check button is clicked
let runCheckAJAX = function (data){
    var request = new XMLHttpRequest();
    request.addEventListener("load", function(){
        console.log(JSON.parse(this.responseText));
    });

    let url = '/check';

    request.open("PUT", url);

    request.setRequestHeader("Content-type", "application/json;charset=UTF-8")
    console.log(data);
    let something = {
        data: data
    }

    request.send(JSON.stringify(something));
};

//update user's profile if cross button is clicked
let runCrossAJAX = function (data){
    var request = new XMLHttpRequest();
    request.addEventListener("load", function(){
        console.log(JSON.parse(this.responseText));
    });

    let url = '/cross';

    request.open("PUT", url);

    request.setRequestHeader("Content-type", "application/json;charset=UTF-8")
    console.log(data);
    let something = {
        data: data
    }

    request.send(JSON.stringify(something));
};
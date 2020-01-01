/////HEART CLICK HANDLER/////
const heart = document.querySelectorAll(".heartBtn");

for (let i = 0; i < heart.length; i++){
    heart[i].addEventListener('click', clickHeart);
};

function clickHeart(event){
    let heart = event.target;

    if (heart.className === 'heartBtn'){
      heart.setAttribute('class', 'heartBtn heart-selected');
      // console.log("this is the new heart class: ", heart.className);

    } else if (heart.className === 'heartBtn heart-selected'){
        heart.classList.remove('heart-selected');
        // console.log("this is the new heart class: ", heart.className);
    }

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

    if (check.className === 'checkBtn'){
      check.setAttribute('class', 'checkBtn check-selected');
    } else if (check.className === 'checkBtn check-selected'){
        check.classList.remove('check-selected');
    }

    const dataToAdd = {
        movieid: check.value
    };
    runCheckAJAX(dataToAdd);
};

/////CROSS CLICK HANDLER/////
const cross = document.querySelectorAll(".crossBtn");

for (let i = 0; i < cross.length; i++) {
    cross[i].addEventListener('click', clickCross);
    console.log("this is one cross in loop: ", cross[i]);
};

function clickCross(event){
    let cross = event.target;
    console.log("cross clicked!");

    const dataToDelete = {
        movieid: cross.value
    };
    runCrossAJAX(dataToDelete);
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
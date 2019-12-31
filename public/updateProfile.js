const heart = document.querySelectorAll(".heartBtn");

for (let i = 0; i < heart.length; i++){
    heart[i].addEventListener('click', clickHandler);
};

function clickHandler(event){
    let heart = event.target;

    if (heart.className === 'heartBtn'){
      heart.setAttribute('class', 'heartBtn heart-selected');
      console.log("this is the new heart class: ", heart.className);

    } else if (heart.className === 'heartBtn heart-selected') {
        heart.classList.remove('heart-selected');
        console.log("this is the new heart class: ", heart.className);
    }


    const dataToAdd = {
        movieid: heart.value
    };
    runAJAX(dataToAdd);
  };


// var updateProfile = function() {

//   console.log("response text", JSON.parse(this.responseText));
//   console.log("status text", this.statusText);
//   console.log("status code", this.status);



// };

//update user's profile if heart button is clicked
let runAJAX = function (data) {
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
}
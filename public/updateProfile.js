var updateProfile = function() {

  console.log("response text", JSON.parse(this.responseText));
  console.log("status text", this.statusText);
  console.log("status code", this.status);

  //////the JSON data from URL////////
  var clickHandler = function(event){
    let heart = event.target;
    console.log("this is heart within clickHandler: ", heart);
      heart.src = "/images/favorite-heart-button.png";
      heart.style.cssText = "width: 30px;";

      console.log("this is heart value: ", heart.defaultValue);
      const dataToAdd = heart.defaultValue;

      runAJAX(dataToAdd);
  };

  let heart = document.querySelectorAll(".heart");
  console.log("this is heart: ", heart);

  for (var i = 0; i < heart.length; i++){
    heart[i].addEventListener('click', clickHandler);
    console.log("this is one heart in loop: ", heart[i]);
  };
};

var request = new XMLHttpRequest();

request.addEventListener("load", updateProfile);

let url = '/profile';

request.open("PUT", url);
request.setRequestHeader("Content-type", "application/json;charset=UTF-8")

request.send(dataToAdd);
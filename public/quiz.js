var exploreBtn = document.getElementById('exploreBtn');

exploreBtn.addEventListener('click', function() {
    //hide explore button
    exploreBtn.setAttribute('id', 'hideButton');
    //create background div for questions
    // var qnBoard = document.createElement('div');
    // qnBoard.setAttribute('id', 'qnBoard');
    // document.getElementsByClassName('jumbotron')[0].appendChild(qnBoard);
    //show first question
    var showQn = document.getElementById('qnBoard');
    showQn.setAttribute('id', 'showQnBoard');



})
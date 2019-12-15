var React = require('react');
const Layout = require("./layout");

class Home extends React.Component {

  render() {

    return (
              <html>
              <Layout />
              <link rel="stylesheet" href="style.css"/>
                <body>

                  <div className="jumbotron">
                      <h1 className="display-4">No idea what movie to watch?</h1>
                      <p className="lead">Let us recommend some specially tailored for you!</p>
                      <button className="btn btn-explore btn-lg" id="exploreBtn">Explore</button>

                      <div id="qnBoard">
                        <form method="POST" action="/recommend" id="form">
                            <h5>How are you feeling now?</h5>
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="mood" id="m1" value="happy" defaultChecked/>
                              <label class="form-check-label" for="m1">Happy</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="mood" id= "m2" value="sad"/>
                              <label class="form-check-label" for="m2">Sad</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="mood" id= "m3" value="angry"/>
                              <label class="form-check-label" for="m3">Angry</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="mood" id= "m4" value="meh"/>
                              <label class="form-check-label" for="m4">Meh</label>
                            </div>

                            <br />
                            <br />
                            <h5>How much time can you spare?</h5>
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="time" id="t1" value="60" defaultChecked/>
                              <label class="form-check-label" for="t1">Less than 1 hour</label>
                            </div>

                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="time" id="t2" value="120"/>
                              <label class="form-check-label" for="t2">1 - 2 hours</label>
                            </div>

                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="time" id="t3" value="240"/>
                              <label class="form-check-label" for="t3">More than 2 hours</label>
                            </div>
                            <br />
                            <br />
                            <button type= "submit" value= "submit" className="btn btn-submit">Submit</button>
                        </form>



                      </div>





                  </div>

                </body>

                <script src="/quiz.js"></script>
              </html>
    );
  }
}

module.exports = Home;
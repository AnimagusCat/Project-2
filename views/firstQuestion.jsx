var React = require('react');
const Layout = require("./layout");

class firstQuestion extends React.Component {

  render() {

    return (
              <html>
              <Layout />
                <body>
                <div className="container mt-4 text-center">
                  <br />
                    <h3>No idea what movie to watch? Let us recommend you some!</h3>
                    <br />

                    <h5>How are you feeling now?</h5>
                    <form method="POST" action="/recommend" id="form">
                      <div class="form-options">
                          <input type="radio" name="mood" id="m1" value="happy"/>Happy<br />
                          <input type="radio" name="mood" id= "m2" value="sad"/>Sad<br />
                          <input type="radio" name="mood" id= "m3" value="angry"/>Angry<br />
                          <input type="radio" name="mood" id= "m4" value="meh"/>Meh<br />
                      </div>
                    <h5>How much time can you spare?</h5>
                      <div class="form-options">
                          <input type="radio" name="time" id="t1" value="60"/>Less than 1 hour<br />
                          <input type="radio" name="time" id="t2" value="120"/>1 - 2 hours<br />
                          <input type="radio" name="time" id="t3" value="240"/>More than 2 hours<br />
                       <br />
                       </div>
                      <button type= "submit" value= "submit">Submit</button>
                    </form>
                  </div>
                </body>
              </html>
    );
  }
}

module.exports = firstQuestion;
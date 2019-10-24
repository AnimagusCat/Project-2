var React = require('react');
const Layout = require("./layout");

class firstQuestion extends React.Component {

  render() {
    console.log('this is from the hello.jsx');

    return (
              <html>
              <Layout />
                <body>
                  <h3>How are you feeling now?</h3>
                  <form method="POST" action="/recommend" id="form">

                    <input type="radio" name="mood" id="m1" value="happy"/>Happy<br />
                    <input type="radio" name="mood" id= "m2" value="sad"/>Sad<br />
                    <input type="radio" name="mood" id= "m3" value="angry"/>Angry<br />
                    <input type="radio" name="mood" id= "m4" value="meh"/>Meh<br />

                  <h3>How much time can you spare?</h3>
                    <input type="radio" name="time" id="t1" value="60"/>Less than 1 hour<br />
                    <input type="radio" name="time" id="t2" value="120"/>1 - 2 hours<br />
                    <input type="radio" name="time" id="t3" value=">180"/>More than 2 hours<br />
                     <br />
                    <button type= "submit" value= "submit">Submit</button>

                  </form>

                </body>
              </html>
    );
  }
}

module.exports = firstQuestion;
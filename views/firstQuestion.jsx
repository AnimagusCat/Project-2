var React = require('react');

class firstQuestion extends React.Component {

  render() {
    console.log('this is from the hello.jsx');

    return (
              <html>
                <body>
                  <h1>How are you feeling now?</h1>
                  <form method="POST" action="/recommend" id="form">

                    <input type="radio" name="mood" id="m1" value="happy"/>Happy<br />
                    <input type="radio" name="mood" id= "m2" value="sad"/>Sad<br />
                    <input type="radio" name="mood" id= "m3" value="angry"/>Angry<br />
                    <input type="radio" name="mood" id= "m4" value="meh"/>Meh<br />

                  <h1>How much time can you spare?</h1>
                    <input type="radio" name="time" value="60"/>Less than 1 hour<br />
                    <input type="radio" name="time" value="120"/>1 - 2 hours<br />
                    <input type="radio" name="time" value=">180"/>More than 2 hours<br />
                     <br />
                    <button type="submit" form="form" value="submit" onClick="formAnswer(mood_value, time_value)">Submit</button>
                  </form>

                </body>
              </html>
    );
  }
}

module.exports = firstQuestion;
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
                        <p id="firstQn">TEST TEST</p>
                      </div>





                  </div>

                </body>

                <script src="/quiz.js"></script>
              </html>
    );
  }
}

module.exports = Home;
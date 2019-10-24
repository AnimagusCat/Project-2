var React = require('react');
const Layout = require("./layout");

class Recommend extends React.Component {

  render() {

    return (
              <html>
              <Layout />
                <body>
                <div className="container mt-4 text-center">
                  <h1>Your recommended movies</h1>
                </div>
                </body>
                <script src="/script.js"></script>
              </html>
    );
  }
}

module.exports = Recommend;
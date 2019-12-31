var React = require('react');
const Layout = require("./layout");

class signOut extends React.Component {

  render() {
    return (
              <html>
              <Layout />
                <body>
                <div className="container mt-4 text-center">
                  <p>Successfully signed out</p>
                  <img src="../images/clap.gif"/>
                </div>
                </body>
              </html>
    );
  }
}

module.exports = signOut;
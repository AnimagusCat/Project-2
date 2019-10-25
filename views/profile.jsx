var React = require('react');
const Layout = require("./layout");

class Profile extends React.Component {

  render() {
    let jData = JSON.stringify(this.props);
    return (
              <html>
              <Layout />
              <link rel="stylesheet" href="style.css"/>
                <body>
                <div className="container mt-4 text-center">
                  <br />
                  <h2>Your Movie List</h2>
                  <br />
                  <p>Oh no, it's empty! You can add movies to your list by clicking on the '+' button on a movie result.</p>
                  </div>
                </body>
                <script dangerouslySetInnerHTML={{__html:
                    `var something = ${jData};`
                }}/>
                <script src="/scriptProfileMovie.js"></script>
              </html>
    );
  }
}

module.exports = Profile;
var React = require('react');
const Layout = require("./layout");

class Recommend extends React.Component {


  render() {
    let jData = JSON.stringify(this.props);
    return (
              <html>
              <Layout />

                <body>
                <div className="container mt-4 text-center">
                  <br />
                  <h2 id="recommend-title">Your recommended movies</h2>
                  <br />



                </div>
                </body>
                <script dangerouslySetInnerHTML={{__html:
                    `var something = ${jData};`
                }}/>
                <script src="/script.js"></script>
              </html>
    );
  }
}

module.exports = Recommend;
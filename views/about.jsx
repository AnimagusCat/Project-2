var React = require('react');
const Layout = require("./layout");

class About extends React.Component {

  render() {
    return (
              <html>
              <Layout />
              <link rel="stylesheet" href="style.css"/>
                <body>
                <div className="container mt-4 text-center">
                  <br />

                    <h2>About</h2>
                    <br />

                    <div class="about-info">
                        <p style={{margin: "0 10% 0 10%" }}><b>showMe</b> helps you find movies specially tailored to your mood and available time so you can quickly get to watching instead of filtering through irrelevant lists. This service is free and you may use this as a guest. However as a member, you can gain access to your own watchlist where you can add and favourite movies.</p>
                        <br />
                        <br />
                        <p>This product uses the <a href="https://www.themoviedb.org/" target="_blank">TMDb</a> API but is not endorsed or certified by TMDb.</p>
                        <img src="/images/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png" alt="TMDb logo" style={{width: "12%"}}/>
                    </div>
                </div>
                </body>

              </html>
    );
  }
}

module.exports = About;
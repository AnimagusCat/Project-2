var React = require('react');
const Layout = require("./layout");

class Profile extends React.Component {

  render() {
    //let baseURL = "https://image.tmdb.org/t/p/w342";
    //console.log("this is this.props: ", this.props);
    //let posterURL = {this.props.poster};
    //let url = "".concat(baseURL, posterURL);

    console.log("this is this.props: ", this.props);
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
                  <br />
                  <div className="card mb-3" style={{maxWidth: "540px"}}>
                      <div className="row no-gutters">
                        <div className="col-md-4">
                          <img src= {"https://image.tmdb.org/t/p/w342"+ this.props.poster}
                          class="card-img" alt="poster image"/>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">Rating: {this.props.rating}</p>
                            <p className="card-text">Watched: {this.props.watched}</p>
                            <p className="card-text">Favourite: {this.props.favourite}</p>
                            <a href={"/movie/" + this.props.movieId}>See more info</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </body>

              </html>
    );
  }
}

module.exports = Profile;
var React = require('react');
const Layout = require("./layout");

class Profile extends React.Component {

  render() {

    console.log("this is this.props: ", this.props);
    console.log("this is this.props.list: ", this.props.list);

    const movies = this.props.list.map (movieItem => {
      return <div className="card mb-3" style={{maxWidth: "540px"}}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src= {`https://image.tmdb.org/t/p/w342/${movieItem.posterimage}`} class="card-img" alt="poster image"/>
          </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{movieItem.movietitle}</h5>
            <p className="card-text">Rating: {movieItem.movierating}</p>
            <p className="card-text">Watched: {movieItem.watched}</p>
            <p className="card-text">Favourite: {movieItem.favourite}</p>
            <a href={`/movie/${movieItem.movieid}`}>See more info</a>
          </div>
        </div>
        </div>
      </div>;
    });

    let errorMsg = "";
    console.log("this is the initial errorMsg: ", errorMsg);

    if (this.props.list.length === 0) {
       errorMsg = "Oh no, it's empty! You can add movies to your list by clicking on the '+' button on a movie result.";
       console.log("this is the errorMsg if null: ", errorMsg);
    };

    return (
              <html>
              <Layout />
              <link rel="stylesheet" href="style.css"/>
                <body>
                <div className="container mt-4 text-center">
                  <br />
                  <h2>Your Movie List</h2>
                  <br />
                  <p>{errorMsg}</p>
                  <br />
                    {movies}
                  </div>
                </body>

              </html>
    );
  }
}

module.exports = Profile;
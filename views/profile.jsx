var React = require('react');
const Layout = require("./layout");

class Profile extends React.Component {

  render() {

    //console.log("this is this.props: ", this.props);
    //console.log("this is this.props.list: ", this.props.list);

    const movies = this.props.list.map (movieItem => {
      return <div className="card mb-3" style={{maxWidth: "540px"}}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src= {`https://image.tmdb.org/t/p/w342/${movieItem.posterimage}`} className="card-img" alt="poster image"/>
          </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{movieItem.movietitle}</h5>

                <h6 className="card-text">{movieItem.movierating}</h6>

                <a href={`/movie/${movieItem.movieid}`}>See more info</a>
                <div className="icons d-flex justify-content-around" style={{paddingTop: "20%"}}>

                    <button type="submit" value={movieItem.movieid} style={{backgroundColor: "white", borderStyle: "none"}}><i class='bx bx-check bx-lg'></i></button>

                    <button type="submit" value={movieItem.movieid} style={{backgroundColor: "white", borderStyle: "none"}}><i class='bx bx-heart bx-md'></i></button>

                    <button type="submit" value={movieItem.movieid} style={{backgroundColor: "white", borderStyle: "none"}}><i class='bx bx-x bx-lg'></i></button>

                </div>
            </div>
        </div>
        </div>
      </div>
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
              <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.4/css/boxicons.min.css' rel='stylesheet'/>
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
                <script src="/updateProfile.js"></script>
              </html>
    );
  }
}

module.exports = Profile;
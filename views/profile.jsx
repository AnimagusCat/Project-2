var React = require('react');
const Layout = require("./layout");

class Profile extends React.Component {

  render() {
    let jData = JSON.stringify(this.props);

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

                    <div className="checkBox">
                        <button type="submit" value={movieItem.movieid} className="checkBtn"><i class='bx bx-check bx-lg'></i></button>
                        <p className="pro-btn-text">Watched</p>
                    </div>

                    <div className="heartBox">
                        <button type="submit" value={movieItem.movieid} className="heartBtn"><i class='bx bxs-heart bx-md'></i>
                        </button>
                        <p className="pro-btn-text">Favourite</p>
                    </div>

                    <div className="crossBox">
                        <button type="submit" value={movieItem.movieid} className="crossBtn"><i class='bx bx-x bx-lg'></i></button>
                        <p className="pro-btn-text">Remove</p>
                    </div>

                </div>
            </div>
        </div>
        </div>
      </div>
    });

    let errorMsg = "";

    if (this.props.list.length === 0) {
       errorMsg = "Oh no, it's empty! You can add movies to your list by clicking on the '+' button on a movie result.";
    };

    return (
              <html>
              <Layout />
              <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.4/css/boxicons.min.css' rel='stylesheet'/>
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
                <script dangerouslySetInnerHTML={{__html:
                    `var something = ${jData};`
                }}/>
                <script src="/updateProfile.js"></script>
              </html>
    );
  }
}

module.exports = Profile;
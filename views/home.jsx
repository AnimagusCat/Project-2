var React = require('react');
const Layout = require("./layout");

class Home extends React.Component {

  render() {
    return (
              <html>
              <Layout />
              <link rel="stylesheet" href="style.css"/>
                <body>
                <div className="container mt-4 text-center">
                  <br />

                    <h1 className="display-4">No idea what movie to watch?</h1>
                    <p className="lead">Let us recommend some specially for you!</p>
                    <p className="lead">
                    <a className="btn btn-warning btn-lg" href="#" role="button">Start</a>
                    </p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <h3>Trending this week</h3>

                <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">

                <div className="controls-top">
                    <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fa fa-chevron-left"></i></a>
                    <a className="btn-floating" href="#multi-item-example" data-slide="next"><i className="fa fa-chevron-right"></i></a>
                </div>

                <ol className="carousel-indicators">
                    <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
                    <li data-target="#multi-item-example" data-slide-to="1"></li>
                    <li data-target="#multi-item-example" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner" role="listbox">

                <div className="carousel-item active">

                <div className="row">
                    <div className="col-md-4">
                      <div className="card mb-2">
                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                          alt="Card image cap"/>
                        <div className="card-body">
                          <a className="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 clearfix d-none d-md-block">
                      <div className="card mb-2">
                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                          alt="Card image cap"/>
                        <div className="card-body">
                          <a className="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 clearfix d-none d-md-block">
                      <div className="card mb-2">
                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                          alt="Card image cap"/>
                        <div className="card-body">
                          <a className="btn btn-primary">Button</a>
                        </div>
                      </div>
                    </div>
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

module.exports = Home;
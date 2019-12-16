var React = require('react');
const Layout = require("./layout");


class Movie extends React.Component {


  render() {
    let jData = JSON.stringify(this.props);
    return (
              <html>
                <Layout />

                <body>
                <div className="container mt-4 text-center">
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-details-tab" data-toggle="tab" href="#nav-details" role="tab" aria-controls="nav-home" aria-selected="true">Details</a>

                        <a className="nav-item nav-link" id="nav-trailer-tab" data-toggle="tab" href="#nav-trailer" role="tab" aria-controls="nav-trailer" aria-selected="false">Trailer</a>
                      </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                      <div className="tab-pane fade show active" id="nav-details" role="tabpanel" aria-labelledby="nav-details-tab">
                      </div>

                      <div className="tab-pane fade" id="nav-trailer" role="tabpanel" aria-labelledby="nav-trailer-tab">
                        <iframe width="853" height="480" id ="trailer" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                    </div>
                </div>
                </body>
                <script dangerouslySetInnerHTML={{__html:
                    `var thisMovie = ${jData};`
                }}/>
                <script src="/movieid.js"></script>
              </html>
    );
  }
}

module.exports = Movie;
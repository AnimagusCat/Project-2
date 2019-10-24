var React = require("react");

class Layout extends React.Component {
  render() {
    return (
    <html>
        <head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          ></link>
        </head>
        <body>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a href="/" className="navbar-brand">showMe.</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar7">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse justify-content-stretch" id="navbar7">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/signin">Sign In</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </body>
    </html>
    );
  }
}

module.exports = Layout;
var React = require("react");

class Layout extends React.Component {
  render() {
    return (
    <html>
        <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
        </head>
        <body>
            <nav className="navbar navbar-expand-md navbar-dark" style={{backgroundColor: '#640D14'}}>
                <a href="/home" className="navbar-brand">showMe.</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar7">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse justify-content-stretch" id="navbar7">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/profile">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/signin">Sign In</a>
                        </li>
                    </ul>
                </div>
            </nav>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        </body>

    </html>
    );
  }
}

module.exports = Layout;
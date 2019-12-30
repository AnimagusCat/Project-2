var React = require('react');
const Layout = require("./layout");

class signIn extends React.Component {

  render() {
    return (
              <html>
              <Layout />
                <body>
                <div className="container mt-4 text-center">
                  <h2 className="log-in">Sign In</h2>
                   <br />

                   <form method="POST" action="/signin">

                      <div className="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control col-sm-3 mx-auto" name="username" autocomplete="username"/>
                      </div>

                      <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control col-sm-3 mx-auto" name="password" autocomplete="current-password"/>
                      </div>

                      <button type="submit" class="btn btn-submit">Submit</button>
                    </form>

                   <br />
                  <p>Don't have an account? <a href="/register">Register here!</a></p>
                </div>
                </body>
              </html>
    );
  }
}

module.exports = signIn;
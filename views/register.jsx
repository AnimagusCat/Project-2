var React = require('react');
const Layout = require("./layout");

class register extends React.Component {

  render() {
    return (
              <html>
              <Layout />
                <body>
                <div className="container mt-4 text-center">
                  <h2 className="log-in">Register An Account</h2>
                   <br />

                   <form method="POST" action="/register">

                      <div className="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control col-sm-3 mx-auto" name="username" required />
                      </div>

                      <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control col-sm-3 mx-auto" name="password" required />
                      </div>

                      <button type="submit" class="btn btn-submit">Submit</button>
                    </form>

                  </div>
                </body>
              </html>
    );
  }
}

module.exports = register;
var React = require('react');
const Layout = require("./layout");

class signIn extends React.Component {

  render() {
    return (
              <html>
              <Layout />
                <body>
                <div className="container mt-4 text-center">
                  <h2>Sign In</h2>
                   <br />
                  <form method="POST" action="/signin">
                    <div>Username: <input type="text" name="username" required/></div>
                    <br />
                    <div>Password: <input type="password" name="password" required/></div>
                    <br />

                    <button type="submit" value="submit">Submit</button>
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
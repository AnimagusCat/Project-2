var React = require('react');
const Layout = require("./layout");

class register extends React.Component {

  render() {
    return (
              <html>
              <Layout />
                <body>
                <div className="container mt-4 text-center">
                  <h2>Register An Account</h2>
                   <br />
                  <form method="POST" action="/register">
                    <div>Username: <input type="text" name="username" required /></div>
                    <br />
                    <div>Password: <input type="password" name="password" required/></div>
                    <br />

                    <button type="submit" value="submit">Submit</button>
                  </form>
                  </div>
                </body>
              </html>
    );
  }
}

module.exports = register;
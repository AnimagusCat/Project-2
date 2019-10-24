var React = require('react');
const Layout = require("./layout");

class register extends React.Component {

  render() {
    return (
              <html>
              <Layout />
                <body>
                  <h2>Register An Account</h2>
                   <br />
                  <form method="POST" action="/register">
                    <div>Username: <input type="text" name="username" /></div>
                    <br />
                    <div>Password: <input type="text" name="password" /></div>
                    <br />

                    <input type="submit" value="submit" />
                  </form>

                </body>
              </html>
    );
  }
}

module.exports = register;
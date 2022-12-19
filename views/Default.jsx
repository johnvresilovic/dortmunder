const React = require("react");
const pageStyle = {
  backgroundColor: "antiquewhite",
  fontFamily: "Segoe UI",
};
class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <link rel="stylesheet" type="text/css" href="./styles.css" />
          <title>{this.props.title}</title>
        </head>
        <body style={pageStyle}>
          <h2>{this.props.title}</h2>
          {this.props.children}
        </body>
      </html>
    );
  }
}
module.exports = DefaultLayout;

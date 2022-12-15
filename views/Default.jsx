const React = require('react');
const pageStyle = {
  backgroundColor:'palegoldenrod',
  fontFamily:'Segoe UI'
}
class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head><title>{this.props.title}</title></head>
        <body style={pageStyle}>
        <h1>{this.props.title}</h1>
        {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout
const React = require('react')
const pageStyle = {
  backgroundColor:'lemonchiffon',
  fontFamily:'Segoe UI',
}
class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head><title>{this.props.title}</title>
        <link rel="stylesheet" type="text/css" href="./styles.css"/></head>
        <body style={pageStyle}>
        <h1>{this.props.title}</h1>
        {this.props.children}
        </body>
      </html>
    )
  }
}
module.exports = DefaultLayout
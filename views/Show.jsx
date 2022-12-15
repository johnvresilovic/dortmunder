const React = require("react");
class Show extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.dortmunder.title}</h1>
        <img src={this.props.dortmunder.image}></img>
        <h2>{this.props.dortmunder.price}</h2>
        <h2>Number in stock: {this.props.dortmunder.quantity}</h2>
        <nav>
          <a href="/dortmunder">See the whole series</a>
        </nav>
      </div>
    )
  }
}
module.exports = Show

const React = require("react");
class Show extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.dortmunder.title}</h1>
        <h2>{this.props.dortmunder.year}</h2>
        <h4>{this.props.dortmunder.synopsis}</h4>
        <nav>
          <a href="/dortmunder">See the whole series</a>
        </nav>
      </div>
    )
  }
}
module.exports = Show

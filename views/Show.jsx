const React = require("react");
class Show extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.dortmunder.title}</h1>
        <img src={this.props.dortmunder.image}></img>
        <h2>{this.props.dortmunder.price}</h2>
        <h2>Number in stock: {this.props.dortmunder.quantity}</h2>    
        <a href={`/dortmunder/${this.props.dortmunder._id}/edit`}>Edit</a><br />
        <form action={`/dortmunder/${this.props.dortmunder._id}?_method=DELETE`} method="POST">
        <input type="submit" value="DELETE"/>
        </form>
        <nav>
          <a href="/dortmunder">See the whole series</a>
        </nav>
      </div>
    )
  }
}
module.exports = Show

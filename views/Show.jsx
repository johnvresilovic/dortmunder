const React = require("react")
const DefaultLayout = require('./Default.jsx')
class Show extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.dortmunder.title}>
        <img src={this.props.dortmunder.image}></img>
        <h2>{this.props.dortmunder.price}</h2>
        {
          this.props.dortmunder.quantity === 0
          ? <h2>OUT OF STOCK</h2>
          : <h2>Number in stock: {this.props.dortmunder.quantity}</h2>
        }
        {
          this.props.dortmunder.quantity === 0
          ? <h3>We will restock ASAP!</h3>
          : <form action={`/dortmunder/${this.props.dortmunder._id}?_method=PUT`} method="POST">
            <input type="submit" value="BUY THIS BOOK"/>
            </form>
        }
        <hr></hr>    
        <a href={`/dortmunder/${this.props.dortmunder._id}/edit`}>Edit</a><br />
        <hr></hr>
        <form action={`/dortmunder/${this.props.dortmunder._id}?_method=DELETE`} method="POST">
        <input type="submit" value="Delete"/>
        </form>
        <hr></hr>
        <nav>
          <a href="/dortmunder">See the whole series</a>
        </nav>
      </DefaultLayout>
    )
  }
}
module.exports = Show

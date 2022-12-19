const React = require("react");
const DefaultLayout = require("./Default.jsx");
class Show extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.dortmunder.title}>
        <img src={this.props.dortmunder.image}></img>
        <h4>{this.props.dortmunder.synopsis}</h4>
        <h4>{this.props.dortmunder.price}</h4>
        {this.props.dortmunder.quantity === 0 ? (
          <h4>OUT OF STOCK</h4>
        ) : (
          <h4>Copies available: {this.props.dortmunder.quantity}</h4>
        )}
        {this.props.dortmunder.quantity === 0 ? (
          <h4>More copies coming soon!</h4>
        ) : (
          <form
            action={`/dortmunder/${this.props.dortmunder._id}?_method=PUT`}
            method="POST"
          >
            <input type="submit" name="quantity" value="BUY THIS BOOK" />
          </form>
        )}
        <br />
        <a href={`/dortmunder/${this.props.dortmunder._id}/edit`}>Edit</a>
        <br />
        <br />
        <form
          action={`/dortmunder/${this.props.dortmunder._id}?_method=DELETE`}
          method="POST"
        >
          <input type="submit" value="Delete" />
        </form>
        <br />
        <hr></hr>
        <hr></hr>
        <div>
          <nav>
            <a href="/dortmunder/new">Add a title</a>
          </nav>
          <br />
          <nav>
            <a href="/dortmunder">Back to catalog</a>
          </nav>
          <br />
          <nav>
            <a href="/">Back to author page</a>
          </nav>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Show;

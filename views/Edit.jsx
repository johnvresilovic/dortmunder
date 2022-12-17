const React = require('react');
const DefaultLayout = require('./Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit">      
      <form action={`/dortmunder/${this.props.dortmunder._id}?_method=PUT`} method="POST">
          Title: <input type="text" name="title" defaultValue={this.props.dortmunder.title}/><br/>
          Image URL: <input type="text" name="image"  defaultValue={this.props.dortmunder.image}/><br/>
          Synopsis: <input type="text" name="synopsis" defaultValue={this.props.dortmunder.synopsis}/><br/>
          Price: <input type="text" name="price"  defaultValue={this.props.dortmunder.price}/><br/>
          Quantity: <input type="number" name="quantity"  defaultValue={this.props.dortmunder.quantity }/><br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      <br />
      <nav>
          <a href="/dortmunder">Back to catalog</a>
        </nav>
      <br />
        <nav>
          <a href="/">Back to author page</a>
        </nav>
      </DefaultLayout>
    )
  }
}
module.exports= Edit
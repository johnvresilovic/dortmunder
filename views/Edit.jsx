const React = require('react');
const DefaultLayout = require('./Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit">      
      <form action={`/dortmunder/${this.props.dortmunder._id}?_method=PUT`} method="POST">
          Title: <input type="text" name="title" size='30' defaultValue={this.props.dortmunder.title}/><br /><br />
          Image URL: <input type="text" name="image" size='60' defaultValue={this.props.dortmunder.image}/><br /><br />
          Synopsis: <input type="text" name="synopsis" size='100' defaultValue={this.props.dortmunder.synopsis}/><br /><br />
          Price: <input type="text" name="price"  defaultValue={this.props.dortmunder.price}/><br/><br />
          Quantity: <input type="number" name="quantity"  defaultValue={this.props.dortmunder.quantity }/><br /><br />
          <input type="submit" value="Submit Changes"/>
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
    )
  }
}
module.exports= Edit
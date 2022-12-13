const React = require('react');
const DefaultLayout = require('./Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit">      
     {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
          {/* form is not complete we will do that below*/}
      <form action={`/dortmunders/${this.props.dortmunder._id}?_method=PUT`} method="POST">
          Title: <input type="text" name="title" defaultValue={this.props.dortmunder.title}/><br/>
          Year: <input type="number" name="year"  defaultValue={this.props.dortmunder.year}/><br/>
          Synopsis: <input type="text" name="synopsis"  defaultValue={this.props.dortmunder.synopsis}/><br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports= Edit
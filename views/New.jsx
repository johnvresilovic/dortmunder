const React = require("react")
const DefaultLayout = require('./Default.jsx')
class New extends React.Component {
  render() {
    return (
      <DefaultLayout title={'Add a Title'}>
        <form action='/dortmunder' method='POST'>
          Title: <input type='text' name='title' /><br /><br />
          Image URL: <input type='text' name='image' /><br /><br />
          Synopsis: <input type='text' name='synopsis' /><br /><br />
          Price: <input type='text'name='price' /><br /><br />
          Quantity: <input type='number'name='quantity' /><br /><br />
          <input type='submit' name='' value='Submit' />
        </form>
        <br />
        <hr></hr>
        <hr></hr>
        <div className="footer">
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
module.exports = New
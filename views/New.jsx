const React = require("react")
const DefaultLayout = require('./Default.jsx')
class New extends React.Component {
  render() {
    return (
      <DefaultLayout title={'Add a Dortmunder Title'}>
        <form action='/dortmunder' method='POST'>
          Title: <input type='text' name='title' />
          Image URL: <input type='text' name='image' />
          Price: <input type='text'name='price' />
          Quantity: <input type='number'name='quantity' />
          <input type='submit' name='' value='Submit' />
        </form>
      </DefaultLayout>
    )
  }
}
module.exports = New
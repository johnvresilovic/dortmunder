const React = require("react")

class New extends React.Component {
  render() {
    return (
      <div>
        <h2>Add a Dortmunder title</h2>
        <form action='/dortmunder' method='POST'>
          Title: <input type='text' name='title' />
          Image URL: <input type='text' name='image' />
          Price: <input type='text'name='price' />
          Quantity: <input type='number'name='quantity' />
          <input type='submit' name='' value='Submit' />
        </form>
      </div>
    )
  }
}
module.exports = New
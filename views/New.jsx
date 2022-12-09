const React = require("react")

class New extends React.Component {
  render() {
    return (
      <div>
        <h2>Add a Dortmunder title</h2>
        <form action='/dortmunder' method='POST'>
          Title: <input type='text' name='title' />
          Year: <input type='number' name='year' />
          Synopsis: <input type='text'name='synopsis' />
          <input type='submit' name='' value='Submit' />
        </form>
      </div>
    )
  }
}
module.exports = New
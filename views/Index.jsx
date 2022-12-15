const React = require("react")
const DefaultLayout = require('./Default.jsx')
class Index extends React.Component {
  render() {
    return (
      <DefaultLayout title={'The Dortmunder Store'}>
        <h2>The Best Place to Buy Brilliant Comic Novels by Donald E. Westlake</h2>
        <h4>New York City resident John Dortmunder is a simple man.</h4>
        <h4>All he wants is to live quietly off the proceeds of his criminal endeavors.</h4>
        <h4>Somehow, though, this small-time thief has a knack for getting into big-time trouble.</h4>
        <h4>Dortmunder's schemes to save his skin are ingenious and hilarious!</h4>
        <ul>
          {this.props.dortmunder.map((dortmunder, i) => {
            return (
              <li>
                <a href={`/dortmunder/${dortmunder.id}`}>{dortmunder.title}</a>{" "}<br />
                <a href={`/dortmunder/${dortmunder.id}`}><img src={dortmunder.image}></img></a> <br />
                <a href={`/dortmunder/${dortmunder._id}/edit`}>Edit</a><br />
                <form action={`/dortmunder/${dortmunder._id}?_method=DELETE`} method="POST">
                          <input type="submit" value="DELETE"/>
                      </form>
                      <br />
              </li>
            )
          })}
        </ul>
        <nav>
          <a href="/dortmunder/new">Add to the list</a>
        </nav>
      </DefaultLayout>
    )
  }
}
module.exports = Index

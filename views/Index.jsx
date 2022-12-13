const React = require("react")
const DefaultLayout = require('./Default.jsx')
class Index extends React.Component {
  render() {
    return (
      <DefaultLayout title={'The Dortmunder Series'}>
        <h2>Comic Novels by Donald E. Westlake</h2>
        <ul>
          {this.props.dortmunder.map((dortmunder, i) => {
            return (
              <li>
                <a href={`/dortmunder/${dortmunder.id}`}>{dortmunder.title}</a>{" "}<br />
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

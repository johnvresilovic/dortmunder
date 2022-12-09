const React = require("react")
class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>The Dortmunder Series</h1>
        <h2>Comic Novels by Donald E. Westlake</h2>
        <ul>
          {this.props.dortmunder.map((dortmunder, i) => {
            return (
              <li>
                <a href={`/dortmunder/${dortmunder.id}`}>{dortmunder.title}</a>{" "}
                <br />
              </li>
            );
          })}
        </ul>
        <nav>
          <a href="/dortmunder/new">Add to the list</a>
        </nav>
      </div>
    )
  }
}
module.exports = Index

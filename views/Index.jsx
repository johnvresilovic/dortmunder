const React = require("react")
const DefaultLayout = require('./Default.jsx')
class Index extends React.Component {
  render() {
    return (
      <DefaultLayout title={'The Dortmunder Store'}>
        <a name="top"></a>
        <h2>Your One-Stop Shop for Brilliant Comic Novels About a Very Unlucky Thief</h2>
        <h4>New York City resident John Dortmunder is a simple man.  All he wants is to live quietly off the proceeds of his crimes.  Somehow, though, this small-time crook has a knack for getting into big-time trouble.  Dortmunder's schemes for saving his skin are ingenious and hilarious!</h4>
        <nav>
          <a href="/dortmunder/new">Add a title</a>
        </nav>
        <br />
        <hr></hr>
        <hr></hr>
        <br />
          {this.props.dortmunder.map((dortmunder, i) => {
            return (
                <div className='book-container'>
                <a href={`/dortmunder/${dortmunder.id}`}>{dortmunder.title}</a>{" "}<br /><br />
                <a href={`/dortmunder/${dortmunder.id}`}><img src={dortmunder.image}></img></a><br />
                <p>{dortmunder.synopsis}</p>
                <a href={`/dortmunder/${dortmunder._id}/edit`}>Edit</a><br /><br />
                <form action={`/dortmunder/${dortmunder._id}?_method=DELETE`} method="POST">
                  <input type="submit" value="DELETE"/>
                  </form><br />
                  <hr></hr>   
              </div>
            )
          })}
        <br />
        <hr></hr>
        <hr></hr>
        <div className="footer">
        <nav>
          <a href="/dortmunder/new">Add a title</a>
        </nav>
        <br />
        <nav>
        <a href="#top">Back to top</a>
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
module.exports = Index
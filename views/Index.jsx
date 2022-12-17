const React = require("react")
const DefaultLayout = require('./Default.jsx')
class Index extends React.Component {
  render() {
    return (
      <DefaultLayout title={'The Dortmunder Store'}>
        <a name="top"></a>
        <h2>Your One-Stop Shop for Brilliant Comic Novels by Donald E. Westlake</h2>
        <h4>New York City resident John Dortmunder is a simple man.  All he wants is to live quietly off the proceeds of his petty thievery.  Somehow, though, this small-time crook has a knack for getting into big-time trouble.  Dortmunder's schemes for saving his skin are ingenious and hilarious!</h4>
        <div className='catalog'>
        <ul>
          {this.props.dortmunder.map((dortmunder, i) => {
            return (
              <li>
                <a href={`/dortmunder/${dortmunder.id}`}>{dortmunder.title}</a>{" "}<br /><br />
                <a href={`/dortmunder/${dortmunder.id}`}><img src={dortmunder.image}></img></a>
                <br />
                <a href={`/dortmunder/${dortmunder._id}/edit`}>Edit</a>
                <form action={`/dortmunder/${dortmunder._id}?_method=DELETE`} method="POST">
                          <input type="submit" value="DELETE"/>
                      </form>
                      <br />
                      <br />   
              </li>
              
            )
          })}
        </ul>
        </div>
        <nav>
          <a href="/dortmunder/new">Add to the list</a>
        </nav>
        <a href="#top">Back to top</a>
      </DefaultLayout>
    )
  }
}
module.exports = Index
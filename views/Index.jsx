const React = require("react")
const DefaultLayout = require('./Default.jsx')
class Index extends React.Component {
  render() {
    return (
      <DefaultLayout title={'The Dortmunder Store'}>
        <a name="top"></a>
        <h2>Your One-Stop Shop for Brilliant Comic Novels About a Very Unlucky Thief</h2>
        <p className="dortmunder-bio">New York City resident John Dortmunder is a simple man.</p>  
        <p className="dortmunder-bio">All he wants is to live quietly off the proceeds of his crimes.</p>  
        <p className="dortmunder-bio">But this small-time crook has a knack for getting into big-time trouble.</p>  
        <p className="dortmunder-bio">Dortmunder's schemes for saving his skin are ingenious and hilarious!</p>
        <br />
        <nav>
          <a href="/dortmunder/new">Add a title</a>
        </nav>
        <br />
        <hr></hr>
        <hr></hr>
        <br />
          {this.props.dortmunder.map((dortmunder, i) => {
            return (
                <div className='catalog-container'>
                <div className='book-container'>
                <div className='image-container'><a href={`/dortmunder/${dortmunder.id}`}><img src={dortmunder.image}></img></a><br /><br /></div>
                <div className='text-container'><a href={`/dortmunder/${dortmunder.id}`}>{dortmunder.title}</a>{" "}<br /><br />
                <p>{dortmunder.synopsis}</p><br /></div>  
              </div>
              </div>
            )
          })}
        <br />
        <hr></hr>
        <hr></hr>
        <div>  
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
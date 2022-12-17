const React = require('react');
const DefaultLayout = require('./Default.jsx')

class Home extends React.Component{
  render() {
    return (
      <DefaultLayout title="I believe my subject is bewilderment.  But I could be wrong.">      
      <h2>--Donald E. Westlake, 1933-2008</h2>
      <nav><a href="/dortmunder">Enter the Dortmunder Store</a><br /><br /></nav>
      <img src='./westlake80.png'></img>
      </DefaultLayout>
    )
  }
}
module.exports= Home
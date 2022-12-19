const React = require("react");
const DefaultLayout = require("./Default.jsx");

class Home extends React.Component {
  render() {
    return (
      <DefaultLayout title="I believe my subject is bewilderment.  But I could be wrong.">
        <h3>--Donald E. Westlake, 1933-2008</h3>
        {/* <nav><a href="/dortmunder">Enter the Dortmunder Store</a><br /><br /></nav> */}
        <div className="author-container">
          <div className="author-photo">
            <img src="./westlake.png"></img>
          </div>
          <div className="author-bio">
            <p>
              Donald E. Westlake published over 100 books during a career that
              spanned five decades, numerous genres and multiple pseudonyms. In
              1993 the Mystery Writers of America bestowed its highest honor on
              Westlake by naming him a Grand Master. He was a three-time winner
              of the same organization's Edgar Award: for his novel{" "}
              <em>God Save the Mark</em>, for his short story 'Too Many Crooks,'
              and for his screenplay for <em>The Grifters</em>. In addition to
              the Dortmunder books, Westlake is probably best known for the
              Parker series of hard-boiled crime novels (published under the pen
              name Richard Stark). You can learn more about the author by{" "}
              <a href="https://www.donaldwestlake.com">visiting this site</a>.
              <br />
              <br />
              <em>
                Nobody gets everything in this life. You decide your priorities
                and you make your choices. I'd decided long ago that any cake I
                had would be eaten.
              </em>
              <br />
              --from Westlake's novel <em>Two Much</em>
              <br />
              <br />
              <a href="/dortmunder">Enter the Dortmunder Store</a>
            </p>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Home;

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
// import { faChevronLeft } from '@fortawesome/free-regular-svg-icons'
// import PropTypes from "prop-types"
import { Link } from "gatsby"

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {back : this.props.back}
  }
  
  render(){
    const backBtn = <button className="btn btn-back"><FontAwesomeIcon icon={faChevronLeft} /></button>
    return(
      <header className="shadow">
        <div className="row">
          <div className="col-3">
            {this.state.back != undefined ? backBtn : null}
            
            {/* <Link to="/" className="link_home btn btn-back"> */}
                {/* <FontAwesomeIcon icon={faChevronLeft} /> */}
            {/* </Link> */}
            {/* <Link to="/ingredients/" className="link_ingredients btn btn-back"> */}
                {/* <FontAwesomeIcon icon={faChevronLeft} /> */}
            {/* </Link> */}
          </div>
          <div className="col">
            <Link to="/">
              <StaticImage
                src="../images/logo_white.png"
                height={38}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Feed Sharmaine Everyday"
                // style={{ marginBottom: `1.45rem` }}
              />
            </Link>
          </div>
          <div className="col-3">

          </div>
        </div>
      </header>
    )
  }
}

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header

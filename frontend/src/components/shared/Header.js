import { Link } from "react-router-dom"
import './css/Header.scss'
import { useState } from "react"

function Header({ user }) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className="primary-header flex">
      <Link to="/">
        <div className="title flex">
          <i id="paws" className="fas fa-paw fa-sm"></i>
          <h1 className="pawsibly">Pawsibly</h1>
        </div>
      </Link>

      <button
        onClick={() => setShowMenu(x => !x)}
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={showMenu ? "true" : "false"}
      >
      </button>

      <nav className={`menu ${showMenu ? "show" : ""}`}>
        {user ? (
          <ul id='primary-navigation' className='primary-navigation flex'>
            <li className='active'>
              <Link to="/">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/sign-up">
                <span>Sign Up</span>
              </Link>
            </li>
          </ul>
        ) : (
          <ul id='primary-navigation' className='primary-navigation flex'>
            <li className='active'>
              <Link to="/">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/sign-in">
                <span>Sign In</span>
              </Link>
            </li>
            <li>
              <Link to="/sign-out">Sign Up</Link>
            </li>
          </ul>
        )}

      </nav>
    </header>

    // <div>
    //   <nav>
    //     <div classNameName="nav-wrapper">
    //       <Link to="/" classNameName="brand-logo">
    //         <div classNameName="title">
    //           <i id="paws" className="fas fa-paw fa-sm"></i>
    //           <h1 className="pawsibly">Pawsibly</h1>
    //         </div>
    //       </Link>
    //       <a href="/" data-target="mobile-demo" className="sidenav-trigger">
    //         <i className="material-icons">menu</i>
    //       </a>
    //       {user ? (
    //         <ul className="right hide-on-med-and-down">
    //           <li>
    //             <Link to="/">Home</Link>
    //           </li>
    //           <li>
    //             <Link to="/profile">Profile</Link>
    //           </li>
    //           <li>
    //             <Link to="/sign-out">Sign Out</Link>
    //           </li>
    //         </ul>
    //       ) : (
    //         <ul className="right hide-on-med-and-down">
    //           <li>
    //             <Link to="/">Home</Link>
    //           </li>
    //           <li>
    //             <Link to="/sign-in">Sign In</Link>
    //           </li>
    //           <li>
    //             <Link to="/sign-up">Sign Up</Link>
    //           </li>
    //         </ul>
    //       )}
    //     </div>
    //   </nav>

    //   {user ? (
    //     <ul className="sidenav" id="mobile-demo">
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/profile">Profile</Link>
    //       </li>
    //       <li>
    //         <Link to="/sign-out">Sign Out</Link>
    //       </li>
    //     </ul>
    //   ) : (
    //     <ul className="sidenav" id="mobile-demo">
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/profile">Sign In</Link>
    //       </li>
    //       <li>
    //         <Link to="/sign-out">Sign Up</Link>
    //       </li>
    //     </ul>
    //   )}
    // </div>
  )
}

export default Header

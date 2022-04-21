// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'
// import { NavDropdown,Container,Offcanvas,Form, Button,FormControl } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
// import './css/Header.css'
// const linkStyle = {
//     color: 'white',
//     textDecoration: 'none',
// 	marginLeft:'10px'
// }


// const authenticatedOptions = (
// 	<>
// 		<Nav.Link>
// 		    <Link to='profile' style={linkStyle}>Profile</Link>
//         </Nav.Link>
// 		<Nav.Link>
// 			<Link to='sign-out' style={linkStyle}>
// 				Sign Out
// 			</Link>
// 		</Nav.Link>
// 	</>
// )

// const unauthenticatedOptions = (
// 	<>
//         <Nav.Link>
// 		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
//         </Nav.Link>
//         <Nav.Link>
// 		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
//         </Nav.Link>
// 	</>
// )

// const alwaysOptions = (
// 	<>
// 		<Nav.Link>
// 			<Link to='/' style={linkStyle}>
// 				Home
// 			</Link>
// 		</Nav.Link>
// 	</>
// )


// const Header = ({ user }) => (



// 	// <Navbar className="header" bg='warning' variant='dark' expand='md' >
// 	// 	<Navbar.Brand>
	
//     //         <Link to='/' style={linkStyle} >
//     //             <h1 className="title"><i id="paws" className ="fas fa-paw fa-sm"></i>Pawsibly</h1>
//     //         </Link>
//     //     </Navbar.Brand>
// 	// 	<Navbar.Toggle aria-controls='basic-navbar-nav' />
// 	// 	<Navbar.Collapse id='basic-navbar-nav'>
// 	// 		<Nav className='links'>
// 				// {alwaysOptions}
// 				// {user ? authenticatedOptions : unauthenticatedOptions}
// 	// 		</Nav>
// 	// 	</Navbar.Collapse>
// 	// </Navbar>

// 	<div>
 
//  <nav>
//     <div class="nav-wrapper">
//       <a href="#!" class="brand-logo">Logo</a>
//       <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
//       <ul class="right hide-on-med-and-down">
//         <li><a href="sass.html">Sass</a></li>
//         <li><a href="badges.html">Components</a></li>
//         <li><a href="collapsible.html">Javascript</a></li>
//         <li><a href="mobile.html">Mobile</a></li>
//       </ul>
//     </div>
//   </nav>

//   <ul class="sidenav" id="mobile-demo">
//     <li><a href="sass.html">Sass</a></li>
//     <li><a href="badges.html">Components</a></li>
//     <li><a href="collapsible.html">Javascript</a></li>
//     <li><a href="mobile.html">Mobile</a></li>
//   </ul>
          
//   </div>
// )

// export default Header


import { Link } from "react-router-dom";
import "./css/Header.css";
const linkStyle = {
  color: "white",
  textDecoration: "none",
  marginLeft: "10px",
};

function Header({ user }) {
  return (
    <div>
      <nav>
        <div class="nav-wrapper">
          <Link to="/" className="brand-logo">
            <h1 className="title">
              <i id="paws" className="fas fa-paw fa-sm"></i>Pawsibly
            </h1>
          </Link>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          {user ? (
            <ul class="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/sign-out">Sign Out</Link>
              </li>
            </ul>
          ) : (
            <ul class="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/sign-out">Sign Out</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>

      {user ? (
        <ul class="sidenav" id="mobile-demo">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Sign In</Link>
          </li>
          <li>
            <Link to="/">Sign </Link>
          </li>
        </ul>
      ) : (
        <ul class="sidenav" id="mobile-demo">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/sign-out">Sign Out</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;



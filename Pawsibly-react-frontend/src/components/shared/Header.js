import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import './css/Header.css'
const linkStyle = {
    color: 'white',
    textDecoration: 'none',
	marginLeft:'10px'
}


const authenticatedOptions = (
	<>
		<Nav.Link>
		    <Link to='profile' style={linkStyle}>Profile</Link>
        </Nav.Link>
		<Nav.Link>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Link>
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Link>
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Link>
        <Nav.Link>
		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Link>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Link>
			<Link to='/' style={linkStyle}>
				Home
			</Link>
		</Nav.Link>
	</>
)

const Header = ({ user }) => (

	<Navbar className="header" bg='warning' variant='dark' expand='md' >
		<Navbar.Brand>
	
            <Link to='/' style={linkStyle} >
                <h1 className="title"><i id="paws" class ="fas fa-paw fa-sm"></i>Pawsibly</h1>
            </Link>
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='links'>
				{/* {user && (
					<span className='navbar-text mr-2'>Welcome, {user.first_name}</span>
				)} */}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>

)

export default Header

import { Link } from "react-router-dom";
import "./css/Header.css";
const linkStyle = {
  color: "white",
  textDecoration: "none",
  marginLeft: "10px",
};

function Nav({ user }) {
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

export default Nav;

import './Navbar.css';
import {Link}

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <h2>Mern Shopping cart</h2>
      </div>
      {/* links */}
      <ul className="navbar__links">
          <li>
              <Link>

              </Link>
          </li>
      </ul>
      {/* hamburger menu */}
    </nav>
  );
};

export default Navbar;

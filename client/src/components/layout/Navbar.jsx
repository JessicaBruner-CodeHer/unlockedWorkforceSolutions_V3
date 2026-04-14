import { Link, NavLink } from 'react-router-dom';
import { navigationLinks } from '../../data/navigation';
import { siteContent } from '../../data/siteContent';

const Navbar = () => {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link to="/" className="brand-mark">
          {siteContent.brand.name}
        </Link>

        <nav className="main-nav">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <Link to="/portal/login" className="login-link">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  id: string;
  label: string;
  path: string;
}

interface NavbarProps {
  brandName: string;
  tagline?: string;
  navItems: NavItem[];
}

function Navbar({ brandName, tagline, navItems }: NavbarProps) {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo-link">
          <div className="logo">
            <h1>{brandName}</h1>
            {/* {tagline && <span className="tagline">{tagline}</span>} */}
          </div>
        </Link>
        <nav className="navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

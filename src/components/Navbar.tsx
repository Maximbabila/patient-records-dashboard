interface NavItem {
  id: string;
  label: string;
  href: string;
}

interface NavbarProps {
  brandName: string;
  tagline?: string;
  navItems: NavItem[];
  activeItem?: string;
  onNavClick?: (itemId: string) => void;
}

function Navbar({ brandName, tagline, navItems, activeItem, onNavClick }: NavbarProps) {
  const handleNavClick = (itemId: string, href: string) => {
    if (onNavClick) {
      onNavClick(itemId);
    }
    // For now, just prevent default and handle routing later
    // In a real app, you'd use React Router here
    console.log(`Navigating to ${itemId}: ${href}`);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>{brandName}</h1>
          {tagline && <span className="tagline">{tagline}</span>}
        </div>
        <nav className="navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`nav-link ${activeItem === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id, item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

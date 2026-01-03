import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Link className="brand" to="/">
        <span className="brand-mark">IL</span>
        <div>
          <span className="brand-name">Irene Liang</span>
          <span className="brand-tag">Interactive Media Artist</span>
        </div>
      </Link>
      <div className="menu-wrapper">
        <button
          className={`menu-button ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
      <div
        id="site-menu"
        className={`menu-overlay ${menuOpen ? "is-open" : ""}`}
      >
        <nav className="overlay-nav">
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/projects" onClick={closeMenu}>
            Projects
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
          <a href="mailto:hello@ireneliang.art" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;

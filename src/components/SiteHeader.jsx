import { Link, NavLink } from "react-router-dom";

function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" to="/">
        <span className="brand-mark">IL</span>
        <div>
          <span className="brand-name">Irene Liang</span>
          <span className="brand-tag">Interactive Media Artist</span>
        </div>
      </Link>
      <nav className="site-nav">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <a className="nav-pill" href="mailto:hello@ireneliang.art">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default SiteHeader;

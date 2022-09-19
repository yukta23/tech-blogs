import { Link } from "react-router-dom";
import { ArrowIcon, LogoIcon } from "../assets/icons";
import "./components.css";

function Header(props) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-wrapper">
          <div className="logo">
            <Link to={`/`}>
              <LogoIcon />
            </Link>
            <span>Tech Blogs</span>
          </div>
          <button className="icon">
            <Link to={`/`}>
              <ArrowIcon />
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

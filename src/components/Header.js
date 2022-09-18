import { BookIcon, LogoIcon } from "../assets/icons";
import "./components.css";

function Header(props) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-wrapper">
          <div className="logo">
            <LogoIcon />
            <span>Tech Blogs</span>
          </div>
          <button className="icon">
            <BookIcon/>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const { pathname } = useLocation();
  const isLoginPage = pathname === "/login";

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        AgriShield
      </Link>

      {!isLoginPage && (
        <Link to="/login">
          <button className="nav-login-btn" type="button">
            Log In
          </button>
        </Link>
      )}
    </nav>
  );
}

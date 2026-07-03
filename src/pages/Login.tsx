import type { FormEvent } from "react";
import Navbar from "../components/Navbar";
import "./Login.css";

const farmImage =
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80";

export default function Login() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Login submitted (no backend connected yet)");
  };

  const handleGoogleSignIn = () => {
    alert("Google Sign-In clicked (not connected yet)");
  };

  return (
    <div className="login-page">
      <Navbar />

      <div className="login-container">
        <div className="login-image-section">
          <img src={farmImage} alt="Agriculture farmland" />
        </div>

        <div className="login-form-section">
          <div className="login-box">
            <h1>AgriShield</h1>

            <form onSubmit={handleSubmit}>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />

              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                required
              />

              <button type="submit" className="login-btn">
                Log In
              </button>
            </form>

            <div className="divider">OR</div>

            <button className="google-btn" onClick={handleGoogleSignIn}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                alt="Google icon"
              />
              Sign in with Google
            </button>

            <p className="footer-text">
              Don&apos;t have an account? <span>Sign up</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

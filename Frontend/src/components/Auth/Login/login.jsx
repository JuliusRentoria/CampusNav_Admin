import { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="login">
        <div className="left-side-login">
          <div className="login-logo">Logo</div>
          <div className="school">
            <h1>
              Welcome to <span>BraveRoute</span>
            </h1>
            <p>Your guide through campus life</p>
          </div>
        </div>
        <div className="right-side-login">
          <div className="login-right">
            <h2>LOGIN</h2>
            <form onSubmit={handleSubmit} className="login-form">
              <div className="input-group">
                <label>Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div id="emailHelp" className="form-text text-muted">
                Please enter your email address.
              </div>
              <div className="input-group">
                <label className="mt-3">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div id="emailHelp" className="form-text text-muted">
                Please enter your password.
              </div>
              <button type="submit" className="login-button">
                Login
              </button>
            </form>

            <div className="login-links">
              <Link to="/forgot-password" className="forgot-password-link">
                Forgot Password?
              </Link>
              <Link to="/signup" className="signup-link">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

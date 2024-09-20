import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./signup.css"; // Import your custom CSS
import { useState } from "react";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/login");
  };

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/account", { email, username, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
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
            <h2>SIGN UP</h2>
            <form className="login-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div id="emailHelp" className="form-text text-muted">
                Please enter your FAITH Account.
              </div>
              <div>
                <label htmlFor="username" className="form-label mt-3">
                  Username
                </label>
                <input
                  type="username"
                  id="username"
                  className="form-control"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div id="usernameHelp" className="form-text text-muted">
                Please enter your Username.
              </div>
              <div>
                <label htmlFor="password" className="form-label mt-3">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div id="passwordHelp" className="form-text text-muted">
                Please enter your Password.
              </div>
              <div className="signup-links d-flex justify-content-between mt-3">
                <button type="submit" className="btn btn-primary me-2">
                  Signup
                </button>
                <button onClick={handleGoBack} className="btn btn-primary me-2">
                  Go Back
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

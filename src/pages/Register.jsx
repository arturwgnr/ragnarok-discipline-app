import background from "../assets/ragnarok-background.jpg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();
  const { username, password, setUsername, setPassword, login } = useAuth();
  const [repeatPassword, setRepeatPassword] = useState("");

  function handleImg() {
    navigate("/login");
  }

  function handleRegister() {
    if (password !== repeatPassword) {
      alert("Passwords do not match");
      return;
    }

    const loggedIn = login();
    if (loggedIn) {
      navigate("/ragnarok-main-page");
    }
  }

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      <div
        className="overlay"
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(37, 37, 48, 0.62)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(6px)",
        }}
      ></div>

      <div className="form-box" style={{ position: "relative", zIndex: 1 }}>
        <p id="ragnarok-p">Create your account</p>
        <h1 id="title-2">Sign In</h1>

        <form>
          <div className="input-group">
            <div className="input-field" id="nameField">
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                placeholder="Create Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input-field">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>

            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                placeholder="Create Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                placeholder="Repeat Password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
            </div>

            <p id="new-p">
              Already have an account?{" "}
              <a href="#" onClick={handleImg}>
                Click here
              </a>
            </p>
          </div>

          <div className="btn-field-register">
            <button
              type="button"
              className="blue-button-register"
              id="signIn"
              onClick={handleRegister}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

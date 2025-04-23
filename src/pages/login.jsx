import background from "../assets/ragnarok-background.jpg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { username, password, setUsername, setPassword, login } =
    useContext(AuthContext);

  const navigate = useNavigate();

  function handleLogin() {
    navigate("/register");
  }

  function handlePasswordReset() {
    navigate("/password-reset");
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
          background: "rgba(14, 92, 155, 0.23)",
          backdropFilter: "blur(0.2px)",
          WebkitBackdropFilter: "blur(6px)",
        }}
      ></div>

      <div
        className="form-box form-box-login"
        style={{ position: "relative", zIndex: 1 }}
      >
        <p id="ragnarok-p">The Ragnarok</p>
        <h1 id="title">Sign up</h1>
        <form>
          <div className="input-group">
            <div className="input-field" id="nameField">
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <p>
              Forgot password?{" "}
              <a href="#" onClick={handlePasswordReset}>
                Click here
              </a>
            </p>
          </div>

          <div className="btn-field">
            <button
              type="button"
              id="signUp"
              className="blue-button"
              onClick={() => login(navigate)}
            >
              Sign up
            </button>
            <button
              type="button"
              className="white-button"
              id="signIn"
              onClick={handleLogin}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

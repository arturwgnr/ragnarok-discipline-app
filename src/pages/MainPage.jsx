import background from "../assets/kratos-scifi.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function MainPage() {
  const navigate = useNavigate();

  const { username, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout(navigate);
  };

  function handleToDoList() {
    navigate("/dashboard");
  }

  function handleJournaling() {
    navigate("/journaling");
  }

  function handleProgress() {
    navigate("/progress");
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
          background: "rgba(133, 164, 179, 0.23)",
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      ></div>

      <div className="form-box" style={{ position: "relative", zIndex: 1 }}>
        <p id="ragnarok-p">Welcome to your dashboard, King!</p>
        <br />
        <h1 id="title">{username}</h1>

        <form>
          <div
            className="btn-field"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <button
              type="button"
              className="blue-button"
              onClick={handleLogout}
              style={{ width: "200px", padding: "12px" }}
            >
              Logout
            </button>
            <button
              type="button"
              className="white-button"
              onClick={handleToDoList}
              style={{ width: "200px", padding: "12px" }}
            >
              To-do List
            </button>
            <button
              type="button"
              className="white-button"
              onClick={handleJournaling}
              style={{ width: "200px", padding: "12px" }}
            >
              Journaling
            </button>
            <button
              type="button"
              className="white-button"
              onClick={handleProgress}
              style={{ width: "200px", padding: "12px" }}
            >
              Progress
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MainPage;

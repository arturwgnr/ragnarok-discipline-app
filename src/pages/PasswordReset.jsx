import background from "../assets/hadesgod.jpg";
import { useNavigate } from "react-router-dom";

function PasswordReset() {
  const navigate = useNavigate();

  function handleImg() {
    navigate("/login");
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
          background: "rgba(49, 12, 12, 0.62)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(6px)",
          zIndex: 0,
        }}
      ></div>

      <div
        className="form-box-reset"
        style={{ position: "relative", zIndex: 10 }} // Aumente de 1 para 10
      >
        <p id="ragnarok-p">Reset Password</p>
        <h1 id="title-2-reset">
          Reset link will be sent to the email provided below
        </h1>

        <form>
          <div className="input-group">
            <div className="input-field">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>

            <div className="input-field">
              <i className="fa-solid fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>

            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input type="tex" placeholder="Previous Password" />
            </div>

            <p id="new-p">
              Already have an account?{" "}
              <a href="#" onClick={handleImg}>
                Click here
              </a>
            </p>
          </div>

          <div className="btn-field-register">
            <button type="button" className="red-button-reset" id="signIn">
              Get email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PasswordReset;

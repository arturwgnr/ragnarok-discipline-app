import background from "../assets/kratos-progress2.png";
import { Link } from "react-router-dom";

function Progress() {
  return (
    <div
      className="journal-container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        position: "relative",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(52, 17, 59, 0.18)",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      ></div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 20px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            color: "#fff",
            textShadow: "0 0 6px #000",
            marginBottom: "15px",
          }}
        >
          Progress Analyses
        </h1>

        <div
          style={{
            background: "rgba(217, 205, 221, 0.07)",
            padding: "20px",
            borderRadius: "10px",
            width: "100%",
            maxWidth: "600px",
            boxShadow: "0 0 10px rgba(0,0,0,0.3)",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              lineHeight: "2",
              color: "white",
            }}
          >
            <li>✅ 15 tasks completed</li>
            <li>📓 4 journal entries</li>
            <li>🔥 3 days of focus streak</li>
            <li>🏆 Conquista desbloqueada: “Disciplina em ascensão”</li>
          </ul>
        </div>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <Link
            to="/ragnarok-main-page"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              padding: "12px 24px",
              borderRadius: "12px",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
              transition: "all 0.3s ease",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            ⬅ Back to Main
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Progress;

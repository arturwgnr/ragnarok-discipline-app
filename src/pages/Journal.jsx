import background from "../assets/kratos-journaling.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Journal() {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem("journalEntries");
    return saved ? JSON.parse(saved) : [];
  });

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem("journalEntries", JSON.stringify(entries));
  }, [entries]);

  function handleSaveEntry() {
    if (entry.trim() === "") return;

    if (editingId) {
      const updated = entries.map((e) =>
        e.id === editingId ? { ...e, text: entry } : e
      );
      setEntries(updated);
      setEditingId(null);
    } else {
      const newEntry = {
        id: Date.now(),
        text: entry,
        date: new Date().toLocaleDateString("pt-BR"),
      };
      setEntries([newEntry, ...entries]); // <-- MAIS RECENTE PRIMEIRO
    }

    setEntry("");
  }

  function handleDeleteEntry(id) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    if (editingId === id) {
      setEditingId(null);
      setEntry("");
    }
  }

  function handleEditEntry(id) {
    const entryToEdit = entries.find((e) => e.id === id);
    if (entryToEdit) {
      setEntry(entryToEdit.text);
      setEditingId(id);
    }
  }

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
          background: "rgba(59, 32, 17, 0.18)",
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
        <h1 style={{ color: "#fff", marginBottom: "20px" }}>
          Time to focus again
        </h1>

        <textarea
          placeholder="Write your thoughts..."
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          style={{
            width: "100%",
            height: "150px",
            borderRadius: "10px",
            padding: "15px",
            fontSize: "1rem",
            background: "rgba(255,255,255,0.1)",
            color: "#fff",
            border: "none",
            backdropFilter: "blur(1.5px)",
            marginBottom: "20px",
          }}
        ></textarea>

        <button onClick={handleSaveEntry} className="save-journaling-button">
          {editingId ? "Update" : "Save"}
        </button>

        <div
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <Link to="/ragnarok-main-page" className="save-journaling-button">
            ⬅ Back to Main
          </Link>
        </div>

        <div style={{ marginTop: "30px", width: "100%" }}>
          {entries.map((item) => (
            <div className="user-journaling-div" key={item.id}>
              <p
                style={{
                  marginBottom: "8px",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  color: "#aaa",
                }}
              >
                {item.date}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <p style={{ flex: 1, fontSize: "1.1rem", lineHeight: "1.5" }}>
                  {item.text}
                </p>

                <div style={{ display: "flex", gap: "6px" }}>
                  <button
                    className="edit-entry-button"
                    onClick={() => handleEditEntry(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-entry-button"
                    onClick={() => handleDeleteEntry(item.id)}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Journal;

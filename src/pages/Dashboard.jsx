import background from "../assets/god-battle.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleAddOrEditTask() {
    if (task.trim() === "") return;

    if (editingTaskId) {
      const updatedTasks = tasks.map((t) =>
        t.id === editingTaskId ? { ...t, text: task } : t
      );
      setTasks(updatedTasks);
      setTask("");
      setEditingTaskId(null);
    } else {
      const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTask("");
    }
  }

  function handleDelete(id) {
    const filteredList = tasks.filter((task) => task.id !== id);
    setTasks(filteredList);
    if (editingTaskId === id) {
      setEditingTaskId(null);
      setTask("");
    }
  }

  function handleCompleteTask(id) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  function handleEdit(id) {
    const taskToEdit = tasks.find((t) => t.id === id);
    if (taskToEdit) {
      setTask(taskToEdit.text);
      setEditingTaskId(id);
    }
  }

  return (
    <div
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
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(14, 92, 155, 0.23)",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(6px)",
          zIndex: 0,
        }}
      ></div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          overflowY: "auto",
          padding: "20px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          className="glass-box"
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            background: "rgba(255, 255, 255, 0.08)",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            padding: "30px",
            width: "90%",
            maxWidth: "520px",
            maxHeight: "85vh",
            overflowY: "auto",
          }}
        >
          <h1 className="dashboard-title" style={{ textAlign: "center" }}>
            Daily Battle Organizer
          </h1>

          <div
            className="task-form"
            style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
          >
            <input
              className="task-input"
              type="text"
              placeholder="Add your task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "8px",
                border: "none",
                fontSize: "1rem",
                background: "rgba(255, 255, 255, 0.15)",
                color: "#fff",
              }}
            />
            <button
              className="task-button"
              onClick={handleAddOrEditTask}
              style={{
                padding: "10px 20px",
                backgroundColor: "#197b99",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {editingTaskId ? "Save" : "Add"}
            </button>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {tasks.map((item) => (
              <li
                key={item.id}
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(2px)",
                  borderRadius: "8px",
                  marginBottom: "10px",
                  padding: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <span
                  onClick={() => handleCompleteTask(item.id)}
                  className={`task-text ${item.completed ? "completed" : ""}`}
                >
                  {item.text}
                </span>

                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="edit-task-button"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="delete-task-button"
                  >
                    X
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{
            marginTop: "10px",
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

export default Dashboard;

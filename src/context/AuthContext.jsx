import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (username && password) {
      setUser(username);
      localStorage.setItem("user", JSON.stringify(username));
      return true;
    } else {
      alert("Username and password are required");
      return false;
    }
  };

  const isAuthenticated = () => {
    return user !== null && user !== "";
  };

  const logout = (navigate) => {
    setUser(null);
    setUsername("");
    setPassword("");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        user,
        setUser,
        login,
        isAuthenticated,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

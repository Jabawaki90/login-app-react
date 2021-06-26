import "./App.css";
import { useEffect, useState } from "react";
import Login from "./login";
import List from "./userList";

function App() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [userList, setUserList] = useState([]);

  return (
    <div className="main">
      <Login />

      {loading ? <List /> : <h2>Loading...</h2>}
    </div>
  );
}

export default App;

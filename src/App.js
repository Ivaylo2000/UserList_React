import React, { useState } from "react";
import Users from "./components/Users";
import AddList from "./components/AddList";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const handleUserAdd = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="app">
      <Users onUserAdd={handleUserAdd} />
      <AddList users={users} />
      <div className="olio"></div>
    </div>
  );
}

export default App;

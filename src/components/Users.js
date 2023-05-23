import React, { useState } from "react";
import "./Users.css";

let textError = "";

const Users = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [renderError, setRenderError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
      setRenderError("One of the inputs is empty");
      return;
    }
    if (enteredAge.trim().length > 0 && +enteredAge < 1) {
      setRenderError("Years are less than 1");
      return;
    }

    const newUser = {
      username: enteredUsername,
      userage: enteredAge,
    };

    props.onUserAdd(newUser);

    setEnteredAge("");
    setEnteredUsername("");
    setRenderError("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div>
      <form onSubmit={addUserHandler}>
        <div className="card">
          <label htmlFor="username"> Name</label>
          <input
            id="username"
            value={enteredUsername}
            type="text"
            onChange={usernameChangeHandler}
          />
          <label htmlFor="userage">Age</label>
          <input
            id="userage"
            value={enteredAge}
            type="number"
            onChange={ageChangeHandler}
          />
          <div className="button_p__container">
            <button type="submit">Add User</button>
            <p className="errorMessage">{renderError}</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Users;

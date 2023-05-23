import React from "react";
import "./AddList.css";
const AddList = (props) => {
  return (
    <div className={`AddListcard ${props.users.length === 0 ? "hidden" : ""}`}>
      <ul>
        {props.users.map((user, index) => (
          <li key={index}>{`${user.username} ${user.userage} (Years old)`}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddList;

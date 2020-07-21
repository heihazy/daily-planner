import React from "react";

const ListItem = ({ text, remove }) => {
  return (
    <div>
      <input type="checkbox" name="tasks" id="item" />
      <label htmlFor="item">{text}</label>
      <button onClick={remove}>DELETE</button>
    </div>
  );
};

export default ListItem;

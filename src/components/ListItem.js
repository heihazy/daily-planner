import React from "react";
import "../styling/ListItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const ListItem = ({ text, remove }) => {
  return (
    <div className="item-wrapper">
      <label htmlFor="item" className="wrapper">
        {" "}
        <input
          className="checkbox"
          type="checkbox"
          name="tasks"
          id="item"
          checked="checked"
        />
        <span className="checkmark"></span>
        {text}
      </label>
      <button onClick={remove}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default ListItem;

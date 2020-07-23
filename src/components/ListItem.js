import React from "react";
import "../styling/ListItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ListItem = ({ text, remove }) => {
  const toggleOverLine = (event) => {
    const listElementText = event.target.nextSibling;
    listElementText.style.textDecoration
      ? (listElementText.style.textDecoration = "")
      : (listElementText.style.textDecoration = "line-through");
  };

  return (
    <li className="checkbox-row-wrapper">
      <label htmlFor={text} className="list-item-wrapper">
        <input
          className="checkbox"
          type="checkbox"
          onChange={(event) => {
            toggleOverLine(event);
          }}
        />
        <span className="list-item-text">{text}</span>
      </label>
      <button onClick={remove} className="delete-button">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
};

export default ListItem;

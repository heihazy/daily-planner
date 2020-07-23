import React, { useState } from "react";
import "../styling/ListInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import fire from "./../fire";
import uid from "uid";

const ListInput = () => {
  const [enteredTask, setEnteredTask] = useState("");
  const addTask = (e) => {
    e.preventDefault();
    const taskId = uid();
    fire.database().ref(`tasks/${taskId}`).set({
      text: enteredTask,
      id: taskId,
    });
    document.querySelector("input").value = "";
  };

  const InputHandler = (e) => {
    setEnteredTask(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          className="task-input"
          type="text"
          placeholder="Tasks"
          onChange={(e) => {
            InputHandler(e);
          }}
        />
        <button onClick={(e) => addTask(e)} type="submit">
          <FontAwesomeIcon className="add-btn" icon={faPlus} />
        </button>
      </form>
    </div>
  );
};

export default ListInput;

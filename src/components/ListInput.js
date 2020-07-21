import React, { useState } from "react";
import "../styling/ListInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const ListInput = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  const addTask = (e) => {
    e.preventDefault();
    props.setDailyTasks((currentTasks) => [...currentTasks, enteredTask]);
  };
  const InputHandler = (e) => {
    setEnteredTask(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          name="tasks"
          id="newTask"
          className="task"
          type="text"
          placeholder="Tasks"
          value={enteredTask}
          onChange={InputHandler}
        />
        <button onClick={(e) => addTask(e)} type="submit">
          <FontAwesomeIcon className="add-btn" icon={faPlus} />
        </button>
      </form>
    </div>
  );
};

export default ListInput;

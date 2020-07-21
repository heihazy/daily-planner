import React, { useState } from "react";

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
          type="text"
          placeholder="Tasks"
          value={enteredTask}
          onChange={InputHandler}
        />
        <button onClick={(e) => addTask(e)} type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};

export default ListInput;

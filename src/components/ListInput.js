import React, { useState } from "react";

const ListInput = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  const InputHandler = (e) => {
    setEnteredTask({
      ...enteredTask,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form>
        <input
          name="tasks"
          id="tasks"
          type="text"
          placeholder="Tasks"
          onChange={InputHandler}
        />
        <button onClick={props.onAddTasks} type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};

export default ListInput;

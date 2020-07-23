import React, { useEffect, useState } from "react";
import "./App.css";
import fire from "./fire";
import Header from "./components/Header";
import ListInput from "./components/ListInput";
import ListItem from "./components/ListItem";

const App = () => {
  const [dailyTasks, setDailyTasks] = useState([]);
  useEffect(() => {
    let tasks = fire.database().ref("tasks");
    tasks.on("child_added", (incomingTask) => {
      let task = { text: incomingTask.val().text, id: incomingTask.key };
      setDailyTasks((oldArray) => [...oldArray, task]);
    });
  }, []);

  const removeHandler = (id) => {
    fire.database().ref(`tasks/${id}`).remove();
    setDailyTasks(dailyTasks.filter((task) => task.id !== id));
  };

  const taskList = dailyTasks.map((task) => {
    return (
      <ListItem
        key={task.id}
        text={task.text}
        remove={() => removeHandler(task.id)}
      />
    );
  });

  return (
    <div className="app">
      <Header />
      <ListInput />
      <ul className="tasklist">{taskList}</ul>
    </div>
  );
};

export default App;

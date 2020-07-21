import React, { useState } from "react";
import Header from "./components/Header";
import ListInput from "./components/ListInput";
import ListItem from "./components/ListItem";
const App = () => {
  const [dailyTasks, setDailyTasks] = useState([]);

  const taskList = dailyTasks.map((task) => {
    return <ListItem key={task} text={task} />;
  });

  return (
    <div>
      <Header />
      <ListInput setDailyTasks={setDailyTasks}></ListInput>
      <div>{taskList}</div>
    </div>
  );
};

export default App;

import React, { useState } from "react";

const ToDo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div>
      <input type="text" value={task} onChange={handleChange} />
      <button onClick={addTask}>Lägg till</button>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;

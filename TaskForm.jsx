import { useState } from "react";

function TaskForm({ addTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("medium");
  const [category, setCategory] = useState("general");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask({
      text: task,
      priority: priority,
      category: category,
      completed: false,
    });

    // reset state
    setTask("");
    setPriority("medium");
    setCategory("general");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div>
        <input
          id="input"
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <span>
          <button type="submit">Add Task</button>
        </span>
      </div>

      <div id="btns">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="high">High priority task</option>
          <option value="medium">Medium priority task</option>
          <option value="low">Low priority task</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="general">General</option>
          <option value="work">Work related</option>
          <option value="personal">Personal</option>
        </select>
      </div>
    </form>
  );
}

export default TaskForm;
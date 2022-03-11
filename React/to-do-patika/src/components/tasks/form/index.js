import { useState, useEffect } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { nanoid } from "nanoid";
const Form = ({ addTask, taskList, handleCheckAll }) => {
  const [task, setTask] = useState("");

  const handleInputChange = (e) => {
    if (e.target.value.length < 36) {
      setTask(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //to prevent from reloading website when the form is submitted
    if (task.trim() !== "") {
      let newTask = { id: nanoid(), task: task.trim(), status: "unchecked" };
      addTask([...taskList, newTask]);
      setTask("");
    }
  };

  return (
    <div
      onClick={() => document.querySelector(".task-input").focus()}
      className="flex-center flex-align"
    >
      <form className="task-form flex-align" onSubmit={handleSubmit}>
        <AiOutlineDown
          onClick={handleCheckAll}
          className="icon"
          title="check/uncheck all"
        />
        <input
          className="task-input"
          placeholder="What needs to be done?"
          onChange={handleInputChange}
          value={task}
        />
      </form>
    </div>
  );
};

export default Form;

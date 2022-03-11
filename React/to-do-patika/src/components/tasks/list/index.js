import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Task from "./Task";

const List = ({
  taskList,
  handleCheckTask,
  handleDeleteTask,
  handleCompletedTasks,
}) => {
  const [filtered, setFiltered] = useState(taskList);

  const removeClasses = () => {
    document.getElementById("all").style.borderBottom = "0px solid #000";
    document.getElementById("active").style.borderBottom = "0px solid #000";
    document.getElementById("completed").style.borderBottom = "0px solid #000";
  };

  const handleShowAll = () => {
    setFiltered(taskList);
    removeClasses();
    document.getElementById("all").style.borderBottom = "2px solid #000";
  };

  const handleShowActive = () => {
    setFiltered(taskList.filter((task) => task.status === "unchecked"));
    removeClasses();
    document.getElementById("active").style.borderBottom = "2px solid #000";
  };

  const handleShowCompleted = () => {
    setFiltered(taskList.filter((task) => task.status === "checked"));
    removeClasses();
    document.getElementById("completed").style.borderBottom = "2px solid #000";
  };

  //this is needed, otherwise changes won't be visible to users when tasks are updated
  useEffect(() => {
    setFiltered(taskList);
    removeClasses();
    document.getElementById("all").style.borderBottom = "2px solid #000";
  }, [taskList]);
  return (
    <div className="flex-align flex-center">
      <div className="container">
        {filtered.map((task) => (
          <Task
            id={task.id}
            text={task.task}
            status={task.status}
            handleCheck={handleCheckTask}
            handleDelete={handleDeleteTask}
            key={task.id}
          />
        ))}
        <div className="tasks-bottom">
          <div className="wrapper flex-align">
            <span className="bottom">
              {taskList.filter((task) => task.status === "unchecked").length +
                " " +
                "tasks left"}
            </span>
            <div className="bottom-middle flex-align">
              <span
                id="all"
                className="bottom bottom-btn"
                onClick={handleShowAll}
              >
                All
              </span>
              <span
                id="active"
                className="bottom bottom-btn"
                onClick={handleShowActive}
              >
                Active
              </span>
              <span
                id="completed"
                className="bottom bottom-btn"
                onClick={handleShowCompleted}
              >
                Done
              </span>
            </div>
            <span className="bottom bottom-btn" onClick={handleCompletedTasks}>
              Clear completed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;

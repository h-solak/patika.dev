import { useState, useEffect } from "react";
import Form from "./components/tasks/form/index";
import List from "./components/tasks/list/index";
import { nanoid } from "nanoid";

function App() {
  const defaultTasks = [
    {
      id: nanoid(),
      task: "Watch some Patika.dev tutorials",
      status: "checked",
    },
    {
      id: nanoid(),
      task: "10 push-ups for today!!!",
      status: "checked",
    },
    {
      id: nanoid(),
      task: "Do the dishes!",
      status: "unchecked",
    },
  ];
  const [taskList, setTaskList] = useState(defaultTasks);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("todo-tasks"));
    if (savedNotes) {
      setTaskList(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo-tasks", JSON.stringify(taskList));
    console.log(taskList);
  }, [taskList]);

  const handleCheck = (id) => {
    const selectedItem = taskList.filter((item) => item.id === id);
    let newTaskList = taskList.filter((item) => item.id !== id);
    if (selectedItem[0].status === "checked") {
      selectedItem[0].status = "unchecked";
    } else {
      selectedItem[0].status = "checked";
    }
    newTaskList = [...newTaskList, selectedItem[0]];
    setTaskList(newTaskList);
  };

  const handleDelete = (id) => {
    const newTasks = taskList.filter((item) => item.id !== id);
    setTaskList(newTasks);
  };

  //a function to delete completed tasks
  const handleCompleted = () => {
    const newTasks = taskList.filter((item) => item.status === "unchecked");
    setTaskList(newTasks);
  };

  const checkAll = () => {
    let newTaskList = taskList;
    for (let i = 0; i < newTaskList.length; i++) {
      newTaskList[i].status = "checked";
    }
    setTaskList(newTaskList);
  };

  return (
    <>
      <h1 title="Get your tasks done!">TO-DO</h1>
      <Form
        addTask={setTaskList}
        taskList={taskList}
        handleCheckAll={checkAll}
      />
      <List
        taskList={taskList}
        handleCheckTask={handleCheck}
        handleDeleteTask={handleDelete}
        handleCompletedTasks={handleCompleted}
      />
    </>
  );
}

export default App;

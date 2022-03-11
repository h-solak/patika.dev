import React from "react";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { MdDelete } from "react-icons/md";

const Task = ({ id, text, status, handleCheck, handleDelete }) => {
  return (
    <div className="flex-align">
      <div className="tasks-list">
        <li
          className={
            status === "unchecked"
              ? "task-item flex-align"
              : "task-item flex-align done"
          }
        >
          <span onClick={() => handleCheck(id)} className="flex-align">
            {status === "unchecked" ? (
              <ImCheckboxUnchecked />
            ) : (
              <ImCheckboxChecked />
            )}
          </span>
          <span className="task-text flex-align">{text}</span>
          <span onClick={() => handleDelete(id)} className="flex-align">
            <MdDelete className="delete-icon" />
          </span>
        </li>
      </div>
    </div>
  );
};

export default Task;

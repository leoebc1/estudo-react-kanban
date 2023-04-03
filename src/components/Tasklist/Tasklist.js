import React, { useState } from "react";
import "./tasklist.css";
import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";

export default function Tasklist({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask
}) {
  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        <button className="botao" onClick={addTask}>
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
}

Tasklist.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};

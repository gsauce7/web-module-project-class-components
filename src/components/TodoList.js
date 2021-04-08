import React from 'react';

import ToDo from '/Users/gabrielhenton/github/web-module-project-class-components/src/components/Todo.js';

const ToDoList = (props) => {
  // for sorting the list based on whether an item has been completed or not
  // const sortedList = props.toDoItems.sort((a, b) => a.completed - b.completed);
  return (
    <div className='todo-list'>
      {props.toDoItems.map((item) => (
        <ToDo toggleItem={props.toggleItem} key={item.id} item={item} />
      ))}
      <button onClick={props.clearCompleted} className='clear-btn'>
        Clear Completed Tasks
      </button>
    </div>
  );
};

export default ToDoList;

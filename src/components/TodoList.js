// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import ToDo from 'Todo';

const ToDoList = (props) => {
  // for sorting the list based on whether an item has been purchased or not
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
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

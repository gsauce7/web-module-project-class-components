import React from 'react';
import ToDoList from './components/TodoList';
import ToDoForm from './components/TodoForm';
import './components/Todo.css';

const toDoItems = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false,
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoItems: toDoItems,
      otherVar: 'something',
    };
  }

  // Class methods to update state go here...
  toggleItem = (itemId) => {
    console.log('Toggling item', itemId);
    //map over the to-do array
    // When we find the item clicked, toggle its completed flag
    const updatedtoDoItems = this.state.toDoItems.map((item) => {
      if (itemId === item.id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    console.log('updated array', updatedtoDoItems);
    this.setState({
      ...this.state,
      toDoItems: updatedtoDoItems,
    });
  };

  addItem = (itemName) => {
    this.setState({
      ...this.state,
      toDoItems: [
        ...this.state.toDoItems,
        {
          name: itemName,
          id: Date.now(),
          completed: false,
        },
      ],
    });
  };

  clearCompleted = (e) => {
    //filter all items with purchased:true from this.state.toDoItems
    e.preventDefault();
    this.setState({
      ...this.state,
      toDoItems: this.state.toDoItems.filter((item) => !item.completed),
    });
  };

  //end of class methods

  // Lifecycle methods to handle API calls, event listeners, and other side effects
  // end of lifecycle methods

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>To-Do List</h1>
          <ToDoForm addItem={this.addItem} />
        </div>
        <ToDoList
          clearCompleted={this.clearCompleted}
          toggleItem={this.toggleItem}
          toDoItems={this.state.toDoItems}
        />
      </div>
    );
  }
}

export default App;

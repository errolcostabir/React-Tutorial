import React, { Component } from 'react';
import { render } from 'react-dom';
import Todos from './Todos';
import AddTodo from './AddTodo';


class App extends Component {
state={
  todos:[
    {id:1,item:'Buy Chocolates Using Ralph\'s Amazon Gift Card'},
    {id:2,item: 'Learn React'},
    {id:3,item: 'Exercise'}

  ]
}
deleteTodo=(id)=>{
const todos=this.state.todos.filter(todo=>{
  return todo.id!==id
});
this.setState({
  todos
})
}

addTodo=(todo)=>{
todo.id=Math.random();
let todos=[...this.state.todos,todo];
this.setState({
  todos
})
}
  render(){
  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Your Tasks For The Day</h1>
      <Todos 
      todos={this.state.todos}
      deleteTodo={this.deleteTodo}
      
      />

      <AddTodo addTodo={this.addTodo}/>
    </div>
  );
  }
}

export default App;

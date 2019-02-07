import React, { Component } from 'react'
import './App.css'
import Todo from './Todo'
import TodoList from './TodoList'

class App extends Component {

    constructor() {
    super()
    this.state = {
      tasks: []
    }
  }


  render() {
    return (
      <div className="App">
        <h1>Todos</h1>
        <TodoList todos={this.state.tasks}/>
      </div>
    )
  }
}
export default App
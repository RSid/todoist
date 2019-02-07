import React, { Component } from 'react'
import './App.css'
import TodoList2 from './TodoList2'
import TodoItems2 from './TodoItems2'
import Todo from './Todo'
import TodoList from './TodoList'

class App extends Component {
//  constructor() {
//    super()
//    this.state = {
//      items: [],
//      currentItem: {text:'', key:''},
//    }
//  }
//  handleInput = e => {
//    const itemText = e.target.value
//    const currentItem = { text: itemText, key: Date.now() }
//    this.setState({
//      currentItem,
//    })
//  }
//  addItem = e => {
//    e.preventDefault()
//    const newItem = this.state.currentItem
//    if (newItem.text !== '') {
//      console.log(newItem)
//      const items = [...this.state.items, newItem]
//      this.setState({
//        items: items,
//        currentItem: { text: '', key: '' },
//      })
//    }
//  }
//
//  deleteItem = key => {
//    const filteredItems = this.state.items.filter(item => {
//      return item.key !== key
//    })
//    this.setState({
//      items: filteredItems,
//    })
//  }
//
//  inputElement =React.createRef()

    constructor() {
    super()
    this.state = {
      tasks: []
    }
  }


  render() {
    return (
      <div className="App">
        <TodoList todos={this.state.tasks}/>
      </div>
    )
  }
}
export default App
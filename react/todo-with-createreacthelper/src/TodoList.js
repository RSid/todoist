import React, { Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
   constructor(props) {
    super(props)
    this.state = {
      items: props.todos,
      currentItem: {text:'', key:''},
    }
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      let newId = 1;
      if (this.state.items.length > 0) {
        let lastElement = this.state.items[this.state.items.length - 1]
        let lastId = lastElement.id
        newId = lastId + 1
      }
      let newTodo={id: newId, title: newItem.text}
      const items = [...this.state.items, newTodo]
      this.setState({
        items: items,
        currentItem: { text: '', key: Date.now() },

      })
    }
  }

  deleteItem = id => {
    const filteredItems = this.state.items.filter(item => {
    console.log(item)
    console.log(id)
      return item.id !== id
    })
    this.setState({
      items: filteredItems,
    })
    console.log(this.state.items)
  }


  render() {
    return (
      <div className="todoListMain">
       <div className="header">
          <form onSubmit={this.addItem}>
            <input
              placeholder="Task"
              onChange={this.handleInput}
            />
            <button type="submit"> Add Task </button>
          </form>
        </div>

        {this.state.items.map(t => <Todo id={t.id} title={t.title} deleteItem={this.deleteItem}/>)}
      </div>
    )
  }
}

export default TodoList
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
      let newTodo={id: newId, title: newItem.text, checked: false}
      const items = [...this.state.items, newTodo]
      this.setState({
        items: items,
        currentItem: { text: '', key: Date.now() },

      })
    }
  }

  deleteItem = id => {
    const filteredItems = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({
      items: filteredItems,
    })
  }

toggleCheck = id => {
    const toggledItems = this.state.items.map(item => {
      if(item.id !== id) {
        return item
      } else {
        let newItem = item
        newItem.checked = !item.checked
        return newItem;
      }
    })
    this.setState({
      items: toggledItems,
    })
  }

  undoneItems = () => {
    return this.state.items.filter(item => {
        return !item.checked
    }).length
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

        {this.state.items.map(t => <Todo id={t.id} title={t.title} deleteItem={this.deleteItem} toggleCheck={this.toggleCheck}/>)}
        {this.undoneItems()} items left
      </div>
    )
  }
}

export default TodoList
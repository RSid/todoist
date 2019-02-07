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
      console.log(newItem)
      let newTodo={id: 5, title: newItem.text}
      const items = [...this.state.items, newTodo]
      this.setState({
        items: items,
        currentItem: { text: '', key: Date.now() },

      })
    }
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

        {this.state.items.map(t => <Todo key={t.id} title={t.title} />)}
      </div>
    )
  }
}

export default TodoList
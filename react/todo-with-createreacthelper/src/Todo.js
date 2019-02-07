import React, { Component } from 'react'

class Todo extends Component {
   render() {
    return (<div>{this.props.title} <button onClick={() => this.props.deleteItem(this.props.id)}>Delete</button></div>)
    }
}

export default Todo;
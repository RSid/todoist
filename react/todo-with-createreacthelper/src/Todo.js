import React, { Component } from 'react'

class Todo extends Component {
   render() {
    return (
             <div>
                <input
                name="done"
                type="checkbox"
                checked={this.props.checked}
                onClick={() =>this.props.toggleCheck(this.props.id)} />
                {this.props.title}
                <button onClick={() => this.props.deleteItem(this.props.id)}>Delete</button>
            </div>
    )}
}

export default Todo;
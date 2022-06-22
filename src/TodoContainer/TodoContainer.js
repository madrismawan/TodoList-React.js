import React, {Component} from 'react'
import TodoItem from '../TodoItem/TodoItem'
import NewForm from '../NewForm/NewForm'


class TodoContainer extends Component {
  state = {
      showNew: false
  }

  toggleNew = () => {
    this.setState({showNew: !this.state.showNew})
  }

  render(){
    const {showNew} = this.state
    const {todos, deleteItem, addItem, editItem, markComplete} = this.props
    const todoList = todos.map((todo) => (<TodoItem key={todo.id} {...todo} deleteItem={deleteItem} editItem={editItem} markComplete={markComplete}/>))
    return(
      <div className="todo-container">
        <h1>Todo List | Made Rismawan</h1>
        <button className="button-add" onClick={this.toggleNew}>Add a New Todo</button>
        <NewForm addItem={addItem} toggleNew={this.toggleNew} showNew={showNew}/>
        <div className="todo-card-list">
          {todoList}
        </div>
      </div>
    )
  }
}

export default TodoContainer

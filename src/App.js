import React, {Component} from 'react';
import './App.css';
import TodoContainer from './TodoContainer/TodoContainer'

class App extends Component {
  state={
    todos: [
      {id: 0, title:"Olahraga", complete: false},
      {id: 1, title:"Wisuda", complete: false},
      {id: 2, title:"Learn MERN Stack", complete: false}
    ]
  }

  addItem = (type, item) => {
    const newItem = {...item, id:Date.now()}
    const newState = [...this.state[type], newItem]
    this.setState({[type]: newState})
    console.log()
  }

  deleteItem = (type, id) => {
    const newState = this.state[type].filter((object) => object.id !== id)
    this.setState({[type]: newState})
  }

  editItem = (type, item) => {
    const newState = this.state[type].filter((object) => object.id !== item.id)
    this.setState({[type]: [...newState, item]})
  }

  markComplete = (type, id) => {
    const newState = this.state[type].filter((object) => object.id !== id)
    let item = this.state[type].filter((object) => object.id === id)
    let itemUpdate = {...item[0], complete: !item[0].complete}
    this.setState({[type]: [...newState, itemUpdate]})
  }


  render() {
    const {todos} = this.state
    return (
      <div className="App">
      <TodoContainer todos={todos} addItem={this.addItem} deleteItem={this.deleteItem} editItem={this.editItem} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;

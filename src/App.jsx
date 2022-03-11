import { Component } from 'react';
import Add from './components/Add';
import List from './components/List';
import Footer from './components/Footer';
import axios from 'axios';
import './App.css';
export default class App extends Component {
  state = {
    todos: [],
  };
  async componentDidMount() {
    let p = await axios(
      'http://rap2api.taobao.org/app/mock/data/2213203?scope=response'
    );
    let { todos } = p.data;
    this.setState({ todos });
  }
  render() {
    let { todos } = this.state;
    return (
      <div>
        <div className="hello">hello todoList</div>
        <div className="todolist">
          <Add />
          <List todos={todos} removeTodo={this.removeTodo} />
          <Footer />
        </div>
      </div>
    );
  }

  removeTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ todos: newTodos });
  };
}

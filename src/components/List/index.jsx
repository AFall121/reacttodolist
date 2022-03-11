import React, { Component } from 'react';

export default class List extends Component {
  render() {
    let { todos } = this.props;
    console.log(todos);
    return (
      <ul>
        {todos.map((todo, index) => {
          return (
            <div className="item" key={todo.id}>
              <input type="checkbox" name="" id="" />
              <span>{todo.name}</span>
              <input
                type="button"
                value="删除"
                className="delete"
                onClick={this.delete(todo.id)}
              />
            </div>
          );
        })}
      </ul>
    );
  }

  delete = (id) => {
    return () => {
      this.props.removeTodo(id);
    };
  };
}

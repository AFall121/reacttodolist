import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="task">
        <input type="checkbox" />
        <span>全选</span>
        &nbsp;&nbsp;&nbsp;
        <span>已完成:0/20</span>
      </div>
    );
  }
}

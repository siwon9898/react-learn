import React, { Component } from "react";
import "./App.css";
export default class App extends Component {
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none",
    };
  };

  todoData = [
    {
      id: "1",
      title: "공부하기",
      completed: true,
    },
    {
      id: "2",
      title: "청소하기",
      completed: true,
    },
  ];
  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할일 목록</h1>
          </div>
          <div style={this.getStyle()}>
            <input type="checkbox" defaultChecked={false} />
            공부하기
            <button style={this.btnStyle}>X</button>
          </div>
        </div>
      </div>
    );
  }
}

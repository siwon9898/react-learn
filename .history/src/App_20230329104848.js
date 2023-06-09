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
  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할일 목록</h1>
          </div>
          <div>
            <input type="checkbox" defaultChecked={false} />
            공부하기
            <button style={this.btnStyle}>X</button>
          </div>
        </div>
      </div>
    );
  }
}
